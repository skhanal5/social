import React from "react";

export default function PostComments({author, username, pfp, time, message}) {
  return (
    <div className="comments-container">
      <img className="pfp" src={pfp} width="50" height="50"></img>
      <div className="post-content">
        <div className="post-metadata">
          <span>
            <strong>{author}</strong>
          </span>
          <span>{"@" + username}</span>
          <span>{time}</span>
        </div>
        <div className="post-message">
          {message}
        </div>
      </div>
    </div>
  );
}
