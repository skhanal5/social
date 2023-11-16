import React from "react";
import PostContent from "./PostContent";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import { useLocation } from "react-router-dom";

export default function PostView() {
  let { state } = useLocation();
  
  return (
    <div className="container">
      <PostContent
        author={state.author}
        username={state.username}
        pfp={state.pfp}
        timestamp={state.created_at}
        topic={state.topic}
        title={state.title}
        message={state.message}
        upvotes={state.upvotes}
        downvotes={state.downvotes}
      ></PostContent>
      <AddComment></AddComment>
      <PostComments></PostComments>
    </div>
  );
}
