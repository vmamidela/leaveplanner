import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

class Header extends Component {
  render() {
    return (
      <div id = "header">
        <header>
          <h2 align="center" fontWeight="0">
            LEAVE PLANNER
          </h2>
        </header>
      </div>
    );
  }
}

export default Header;
