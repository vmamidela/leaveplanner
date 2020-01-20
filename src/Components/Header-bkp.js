import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

//import { Dropdown } from "bootstrap/dist/js/bootstrap.bundle";
import { NavBar, Nav, NavDropdown, NavItem } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div>
        <h1 align="center">Leave Planner</h1>
        <nav class="navbar navbar-expand-lg navbar-light nav-right ">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ">
              <li class="nav-item active">
                <a class="nav-link nav-center" href="home">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <NavDropdown
                onMouseEnter={this.handleOpen}
                onMouseLeave={this.handleClose}
                open={this.state.isOpen}
                noCaret
                id="language-switcher-container"
              >
                <div class="dropdown" aria-labelledby="navDropdown"></div>
                <navdropdown-Item>first Item</navdropdown-Item>
                <navdropdown-Item>second Item</navdropdown-Item>
              </NavDropdown>
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
