import React from "react";
import { Item } from "./Items";

const CreateClass = type => {
  let menuClass;
  if (type === "dropdown") {
    menuClass = "nav-link  dropdown-toggle";
  } else if (type === "dropdown-item") {
    menuClass = "dropdown-item";
  } else {
    menuClass = "nav-link ";
  }
  return menuClass;
};

const DropItem = (type, dropitemlist) => {
  let DropItemType;
  if (type === "dropdown") {
    return (
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {dropitemlist.map(item => (
          <Item
            className="nav-link dropdown-item"
            to="/view"
            label={item.name}
            id={item.link}
          />
        ))}
      </div>
    );
  } else {
    return;
  }
};

export const MenuItem = ({
  type,
  data_toggle,
  aria_haspopup,
  aria_expanded,
  label,
  to,
  id,
  dropitemlist
}) => {
  return (
    <li className="nav-item dropdown">
      <Item
        className={CreateClass(type)}
        data_toggle={data_toggle}
        aria_haspopup={aria_haspopup}
        aria_expanded={aria_expanded}
        to={to}
        label={label}
        type={type}
        id={id}
      />
      {DropItem(type, dropitemlist)}
    </li>
  );
};

//  export const DropItem = ({ label, to }) => {
//    return <Item className="dropdown-item" to={to} label={label} />;
//  };
