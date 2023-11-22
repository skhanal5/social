import React from "react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export default function Topbar({ setQuery, user}) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

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
            onChange={handleSearch}
          ></input>
        </div>
        <Link
          to={`/post`}
          state={{
            user
          }}
        >
          <div className="topbar-btn">
            <PlusCircleIcon className="topbar-icon"></PlusCircleIcon>
            <span>Post</span>
          </div>
        </Link>
      </div>

      <div className="topbar-btn">
        <img src={user.pfp} className="topbar-icon"></img>
        <div>{user.name}</div>
      </div>
    </div>
  );
}
