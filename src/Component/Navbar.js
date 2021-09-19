import React from "react";
import "../App.css";

function Navbar() {
  const details = [
    { title: "Interface", components: "Components" },
    { components: "Utilities" },
    { title: "Addons", components: "Pages" },
    { components: "Charts" },
    { components: "Tables" },
  ];
  return (
    <>
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider my-0"></hr>
      {details.map((item, index) => (
        <>
          <div className="sidebar-heading">{item.title}</div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li className="nav-item">
            {item.components === "Components" ? <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>{item.components}</span>
            </a> : (item.components === "Utilities" ? <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-wrench"></i>
              <span>{item.components}</span>
            </a>: (item.components === "Pages" ? <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-folder"></i>
              <span>{item.components}</span>
            </a>: (<a
              className="nav-link collapsed"
              href="#"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              {item.components === "Charts" ? <i class="fas fa-fw fa-chart-area"></i> : <i class="fas fa-fw fa-table"></i>}
              <span>{item.components}</span>
            </a>)))}
          </li>
          {item.components === "Utilities" ? (
            <hr className="sidebar-divider my-0"></hr>
          ) : item.components === "Tables" ? (
            <hr className="sidebar-divider my-0"></hr>
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
}

export default Navbar;
