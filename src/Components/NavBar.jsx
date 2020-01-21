import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};

  render() {
    const MenuMarginStyle = {
      margin: "auto"
    };
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" style={MenuMarginStyle}>
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Employee Details
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/view">
                  View/Edit/Delete
                </Link>
                <Link class="dropdown-item" to="/add">
                  Add
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/leaves">
                My Leaves
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/approvals">
                My Approvals
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
