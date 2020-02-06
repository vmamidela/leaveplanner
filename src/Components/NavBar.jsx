import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { MenuItem } from "./NavItem/MenuItem";
import MenuBar from "../TestData/menubar";

class NavBar extends Component {
  render() {
    const MenuMarginStyle = {
      margin: "auto"
    };
    // const dropitemlist = [
    //   { name: "View/Edit/Delete", link: "view" },
    //   { name: "Add", link: "add" }
    // ];

    return (
      //<div id = "navbar"
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={MenuMarginStyle}>
            {MenuBar.map(menuitem => (
              <MenuItem 
                key={Object.keys(menuitem)[0]}
                id={Object.keys(menuitem)[0]}
                label={menuitem[Object.keys(menuitem)[0]]["label"]}
                type={menuitem[Object.keys(menuitem)[0]]["type"]}
                to={menuitem[Object.keys(menuitem)[0]]["to"]}
                role={menuitem[Object.keys(menuitem)[0]]["role"]}
                data_toggle={menuitem[Object.keys(menuitem)[0]]["data_toggle"]}
                aria_haspopup={
                  menuitem[Object.keys(menuitem)[0]]["aria_haspopup"]
                }
                aria_expanded={
                  menuitem[Object.keys(menuitem)[0]]["aria_expanded"]
                }
                dropitemlist={
                  menuitem[Object.keys(menuitem)[0]]["dropitemlist"]
                }
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
      //</div>
    );
  }
  
}

export default NavBar;
