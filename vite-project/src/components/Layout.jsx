import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import React from "react";
export default function Layout() {
  return (
    <body>
      <Topbar></Topbar>
      <main>
        <div className="content">
          <Sidebar></Sidebar>
          <Outlet />
          <div className="right"></div>
        </div>
      </main>
    </body>
  );
}
