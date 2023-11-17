import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
export default function Layout() {

  const [query, setQuery] = useState("");

  return (
    <div>
      <Topbar setQuery={setQuery}></Topbar>
      <main>
        <div className="content">
          <Sidebar></Sidebar>
          <Outlet context={[query]}/>
          <div className="right"></div>
        </div>
      </main>
    </div>
  );
}
