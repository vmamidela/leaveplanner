import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { MenuItem } from "./NavItem/MenuItem";
import MenuBar from "../TestData/menubar";

class NavBar extends Component {
  render() {
    const MenuMarginStyle = {
      margin: "auto"
    };
    const dropitemlist = [
      { name: "View/Edit/Delete", link: "view" },
      { name: "Add", link: "add" }
    ];

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={MenuMarginStyle}>
            {MenuBar.map(menuitem => (
              <MenuItem
                key={menuitem.label}
                to={menuitem.to}
                label={menuitem.label}
                id={menuitem.label}
              />
            ))}
            {/* <MenuItem to="/" label="Home" id="Home" />
            <MenuItem to="/leaves" label="My Leaves" id="Leaves" />
            <MenuItem to="/approvals" label="My Approvals" id="Approvals" />
            <MenuItem
              type="dropdown"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data_toggle="dropdown"
              aria_haspopup="true"
              aria_expanded="false"
              label="Employee Details"
              dropitemlist={dropitemlist}
            /> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
