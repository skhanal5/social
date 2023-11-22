import "./App.css";
import React, { useEffect, useState } from "react";
import PostCell from "./components/PostCell";
import { supabase } from "../client";
import { useOutletContext } from "react-router-dom";

export default function App() {
  const obj = useOutletContext();
  const [posts, setPosts] = useState([]);

  let filteredPosts = posts
    ? posts.filter((item) =>
        item.title.toLowerCase().includes(obj[0].toLowerCase())
      )
    : [];

  // splices contents of post if it is too long
  const splicePost = (post_contents) => {
    if (post_contents.length > 300) {
      return post_contents.substring(0, 300) + "...";
    } else {
      return post_contents;
    }
  };

  const normalizeDate = (post_timestamp) => {
    let timestamp = new Date(post_timestamp);
    let now = new Date();
    const elapsedTime = now.getTime() - timestamp.getTime();
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
      return days + " days ago";
    } else if (hours > 0) {
      return hours + " hours ago";
    } else {
      return minutes + " minutes ago";
    }
  };

  const handleSort = (e) => {
    obj[0] = ""
    if (e.target.value == "Popular") {
      filteredPosts.sort((a, b) => parseInt(b.upvotes, 10) - parseInt(a.upvotes, 10));
      setPosts(filteredPosts)
    } else {
      filteredPosts.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        
        return dateB - dateA;
      });
      setPosts(filteredPosts)
    }
  };

  /**
   * 1. grab the posts from posts table
   * 2. also grab the corresponding authors for each post and store it into the posts object
   */
  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase.from("posts").select();

        for (const post of data) {
          const { data, error } = await supabase
            .from("users")
            .select()
            .eq("uuid", post.author_uuid);
          post["author"] = data[0];
        }
        data.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
          
          return dateB - dateA;
        });
        setPosts(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="filter-buttons">
        <select
          className="btn"
          onChange={handleSort}
          name="filter"
          id="filter"
        >
          <option value="Recent">Recent</option>
          <option value="Popular">Popular</option>
        </select>
      </div>
      {posts ? (
        <div className="check">
          {filteredPosts.map((post) => (
            <PostCell
              key={post.post_id}
              id={post.post_id}
              author={post.author.name}
              author_id={post.author_uuid}
              username={post.author.username}
              pfp={post.author.pfp}
              timestamp={normalizeDate(post.created_at)}
              topic={post.topic}
              title={post.title}
              message={post.post_contents}
              img={post.media}
              message_preview={splicePost(post.post_contents)}
              upvotes={post.upvotes}
              downvotes={post.downvotes}
            ></PostCell>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
