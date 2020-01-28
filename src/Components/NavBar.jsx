import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./NavItem/MenuItem";

class NavBar extends Component {
  render() {
    const MenuMarginStyle = {
      margin: "auto"
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={MenuMarginStyle}>
            <MenuItem to="/" label="Home" />
            <MenuItem to="/leaves" label="My Leaves" />
            <MenuItem to="/approvals" label="My Approvals" />

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Employee Details
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/view">
                  View/Edit/Delete
                </Link>
                <Link className="dropdown-item" to="/add">
                  Add
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
