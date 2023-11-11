import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import React from "react";
export default function Layout() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
