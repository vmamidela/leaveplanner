import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
class Header extends Component {
  render() {
    const MenuMarginStyle = {
      margin: "auto"
    };
    return (
      <div>
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
                  class="nav-link"
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
                    ADD/EDIT
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/applyleave">
                  Leave
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Aboutus
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
