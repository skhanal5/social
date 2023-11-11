import React from "react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-logo">Topics</div>
      <div className="topbar-mid">
        <div className="topbar-search-container">
          <MagnifyingGlassIcon className="topbar-mag-glass"></MagnifyingGlassIcon>
          <input
            className="topbar-search"
            type="text"
            placeholder="Search Topics..."
          ></input>
        </div>
        <div className="topbar-btn">
          <PlusCircleIcon className="topbar-icon"></PlusCircleIcon>
          <span>Post</span>
        </div>
      </div>

      <div className="topbar-btn">
        <img className="topbar-icon"></img>
        <div>Username</div>
      </div>
    </div>
  );
}
