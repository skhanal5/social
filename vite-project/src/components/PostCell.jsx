import React from "react";
import PostUtilities from "./PostUtilities";
import { Link } from "react-router-dom";

export default function PostCell({author, username, pfp, timestamp, topic, title, message_preview, upvotes, downvotes}) {

  return (
    <Link style={{ width: "100%", display: 'flex', justifyContent: 'center' }}  to="/post">
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
          <div className="post-topic-card">{topic}</div>
          <div className="post-subject">
            <div>{title}</div>
          </div>
          <div className="post-message">
           {message_preview}
          </div>
          <PostUtilities upvotes={upvotes} downvotes={downvotes}></PostUtilities>
        </div>
      </div>
    </Link>
  );
}
