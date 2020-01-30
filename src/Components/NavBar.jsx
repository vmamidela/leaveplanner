import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { MenuItem } from "./NavItem/MenuItem";

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
            <MenuItem to="/" label="Home" id="Home" />
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
            />
            {/* <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <MenuItem
                  type="dropdown-item"
                  to="/view"
                  label="View/Edit/Delete"
                  id="View"
                />

                <MenuItem type="dropdown-item" to="/add" label="Add" id="Add" />
              </div> */}

            {/* <li className="nav-item dropdown">
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
                <DropItem to="/view" label="View/Edit/Delete" />
                <DropItem to="/add" label="Add" />
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
