import React from "react";
import PostUtilities from "./PostUtilities";
import TopicCard from "./TopicCard";

// delete this later cuase this is just a repeat of PostCell
export default function PostContent({
  author,
  username,
  pfp,
  timestamp,
  topic,
  title,
  message,
  upvotes,
  downvotes
}) {
  return (
    <div className="post">
      <img className="pfp" src={pfp} width="50" height="50"></img>
      <div className="post-content">
        <div className="post-metadata">
          <span>
            <strong>{author}</strong>
          </span>
          <span>{"@" + username}</span>
          <span>{timestamp}</span>
        </div>
        <TopicCard topic={topic}></TopicCard>
        <div className="post-subject">
          <div>{title}</div>
        </div>
        <div className="post-message">{message}</div>
        <PostUtilities upvotes={upvotes} downvotes={downvotes}></PostUtilities>
      </div>
    </div>
  );
}
