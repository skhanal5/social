import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Post() {
  return (
    <div className="post">
      <img className="pfp"></img>
      <div className="post-metadata">
        <span>Subodh Khanal</span>
        <span>@Username</span>
        <span>30 mins ago</span>
      </div>
    </div>
  );
}
