import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

function Admin() {
  return (
    <>
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />
        <Navbar />
      </ul>
      <Topbar />
    </div>
    
    </>
  );
}

export default Admin;
