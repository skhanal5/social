import React from "react";
import PostUtilities from "./PostUtilities";
import { Link } from "react-router-dom";
import TopicCard from "./TopicCard";

export default function PostCell({
  author,
  username,
  pfp,
  timestamp,
  topic,
  title,
  message,
  message_preview,
  upvotes,
  downvotes,
}) {
  return (
    <Link
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      to="/post"
      state={{
        author,
        username,
        pfp,
        timestamp,
        topic,
        title,
        message,
        upvotes,
        downvotes,
      }}
    >
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
          <div className="post-message">{message_preview}</div>
          <PostUtilities
            upvotes={upvotes}
            downvotes={downvotes}
          ></PostUtilities>
        </div>
      </div>
    </Link>
  );
}
