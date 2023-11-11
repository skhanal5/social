import React from "react";
import PostUtilities from "./PostUtilities";

export default function Post() {
  return (
    <div className="post">
      <img className="pfp"></img>
      <div className="post-content">
        <div className="post-metadata">
          <span> <strong>Subodh Khanal</strong></span>
          <span>@Username</span>
          <span>30 mins ago</span>
        </div>
        <div className="post-message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborumƒ
        </div>
        <PostUtilities></PostUtilities>
      </div>
    </div>
  );
}
