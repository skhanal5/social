import React from "react";
import PostUtilities from "./PostUtilities";
import { Link } from "react-router-dom";

export default function PostCell() {
  return (
    <Link to="/post">
      <div className="post">
        <img className="pfp" width="50" height="50"></img>
        <div className="post-content">
          <div className="post-metadata">
            <span>
              <strong>Subodh Khanal</strong>
            </span>
            <span>@Username</span>
            <span>30 mins ago</span>
          </div>
          <div className="post-topic-card">Topic</div>
          <div className="post-subject">
            <div>This is the title of the post.</div>
          </div>
          <div className="post-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </div>
          <PostUtilities></PostUtilities>
        </div>
      </div>
    </Link>
  );
}
