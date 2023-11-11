import React from "react";

export default function PostComments() {
  return (
    <div className="comments-container">
      <img className="pfp" width="50" height="50"></img>
      <div className="post-content">
        <div className="post-metadata">
          <span>
            <strong>Subodh Khanal</strong>
          </span>
          <span>@Username</span>
          <span>30 mins ago</span>
        </div>
        <div className="post-message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}
