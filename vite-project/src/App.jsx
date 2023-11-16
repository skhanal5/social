import "./App.css";
import React, { useEffect, useState } from "react";
import PostCell from "./components/PostCell";
import { supabase } from "./client";

export default function App() {
  const [posts, setPosts] = useState([]);

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
    console.log(post_timestamp);
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
        setPosts(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="container">
      {posts ? (
        <div>
          {posts.map((post) => (
            <PostCell
              key={post.author_uuid}
              author={post.author.name}
              username={post.author.username}
              pfp={post.author.pfp}
              timestamp={normalizeDate(post.created_at)}
              topic={post.topic}
              title={post.title}
              message={post.post_contents}
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
