import React from "react";
import PostContent from "./PostContent";
import PostComments from "./PostComments";
import AddComment from "./AddComment";

export default function PostView() {
  return (
    <div className="container">
      <PostContent></PostContent>
      <AddComment></AddComment>
      <PostComments></PostComments>
    </div>
  );
}
