import React, { useEffect, useState } from "react";
import PostContent from "./PostContent";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import { useLocation, useOutletContext } from "react-router-dom";
import { supabase } from "../../../client";

export default function PostView() {
  let { state } = useLocation();
  const [comments, setComments] = useState([]);
  const obj = useOutletContext();

  useEffect(() => {
    async function fetchComments() {
      try {
        const { data, error } = await supabase
          .from("comments")
          .select()
          .eq("original_post", state.id);
        for (const comment of data) {
          const { data, error } = await supabase
            .from("users")
            .select()
            .eq("uuid", comment.commenter_id);
          comment["commenter"] = data[0];
        }
        setComments(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchComments();
  }, [comments]);

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

  return (
    <div className="container">
      <PostContent
        key={state.id}
        user={obj[1]} //please delete this later
        id={state.id}
        author={state.author}
        author_id={state.author_id}
        username={state.username}
        pfp={state.pfp}
        timestamp={state.timestamp}
        topic={state.topic}
        title={state.title}
        message={state.message}
        img={state.img}
        upvotes={state.upvotes}
        downvotes={state.downvotes}
      ></PostContent>
      <AddComment user={obj[1]} post_id={state.id} comments={comments} setComments={setComments}></AddComment>
        {comments != null ? (
          <>
            {comments.map((comment) => (
              <PostComments
                key={comment.comment_id ?? ""}
                author={comment.commenter ? comment.commenter.name : ""}
                username={comment.commenter ? comment.commenter.username : ""}
                pfp={comment.commenter ? comment.commenter.pfp : ""}
                time={comment.created_at ? normalizeDate(comment.created_at) : ""}
                message={comment.message}
              ></PostComments>
            ))}
          </>
        ) : (
          <></>
        )}
    </div>
  );
}
