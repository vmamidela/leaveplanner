import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

//import BackgroundImage from "./images/offimg.jpg";

class Header extends Component {
  render() {
    const box = { backgroundColor: "green", marginLeft: 10, marginRight: 10 };
    return (
      <div>
        <header>
          <h2 align="center" font-weight="0">
            LEAVE PLANNER
          </h2>
        </header>
      </div>
    );
  }
}

export default Header;
