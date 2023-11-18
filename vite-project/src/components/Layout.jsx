import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";
import { supabase } from "../client";
export default function Layout() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  /**
   * This should be lifted into App
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
    <>
      {user ? (
        <div>
          <Topbar
            setQuery={setQuery}
            user={user}
          ></Topbar>
          <main>
            <div className="content">
              <Sidebar></Sidebar>
              <Outlet context={[query, user]} />
              <div className="right"></div>
            </div>
          </main>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
