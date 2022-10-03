import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    // Function to insert active NavLink
    const navStyle = ({isActive})=>{
        return {
            color: isActive ? "yellow" : "white",
            margin: isActive ? "30px" : "30px",
            textDecoration: isActive ? "none" : "none",
            fontWeight: isActive ? "bold" : ""
        }
    }


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary navbar-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Alabian
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
            <i class="fa fa-bars" aria-hidden="true" style= {{color: "white !important"}}></i
          >
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to="/"
                  class="nav-NavLink active"
                  aria-current="page"
                  href="#"
                  style={navStyle}
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/about" class="nav-NavLink" href="#"  style={navStyle}>
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/services" class="nav-NavLink" href="#"  style={navStyle}>
                  Services
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/contact" class="nav-NavLink" href="#"  style={navStyle}>
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/movie" class="nav-NavLink" href="#"  style={navStyle}>
                  Movies
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/blog" class="nav-NavLink" href="#"  style={navStyle}>
                  Blog
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/material" class="nav-NavLink" href="#"  style={navStyle}>
                  Material
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
