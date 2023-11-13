import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { supabase } from "../client.js";
export default function Topbar() {
  const [user, setUser] = useState(null);

  /**
   * hack way of handling retrieving current user's information
   * - handle sessions later..
   * current implementation: just grab "my user"
   * Break off server side and client side
   */
  useEffect(() => {
    async function fetchUser() {
      try {
        const { data, error } = await supabase.from("users").select();
        setUser(data[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchUser();
  }, []);

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

      {user ? (
        <div className="topbar-btn">
          <img src={user.pfp} className="topbar-icon"></img>
          <div>{user.name}</div>
        </div>
      ) : (
        <div className="topbar-btn">
          <img className="topbar-icon"></img>
          <div>Username</div>
        </div>
      )}
    </div>
  );
}
