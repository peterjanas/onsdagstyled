import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout({}) {
  return (
    <div>
      <div className="top-bar">

        <h1>TRUCK TRUCK</h1>
      </div>
      <div className="breadcrumb">Home &gt; Section &gt; Page</div>
      <div className="layout">
        <div className="left-grid">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/registerdriver">RegisterDriver</NavLink>
            </li>
            <li>
              <NavLink to="/trucks">Trucks</NavLink>
            </li>
            <li>
              <NavLink to="/drivers">Drivers</NavLink>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
