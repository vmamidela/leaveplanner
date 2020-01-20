import React, { Component } from "react";
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
              <a class="nav-link" href="home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Employee Details
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  View
                </a>
                <a class="dropdown-item" href="#">
                  Add
                </a>
                <a class="dropdown-item" href="#">
                  Edit
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/applyleave">
                My Leaves
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Aboutus">
                My Approvals
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
