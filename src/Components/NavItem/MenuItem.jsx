import React, { Component } from "react";
import { Link } from "react-router-dom";

const MenuItem = props => {
  return (
    <li className="nav-item active">
      <Link className="nav-link" to={props.to}>
        {props.label}
      </Link>
    </li>
  );
};

export default MenuItem;
