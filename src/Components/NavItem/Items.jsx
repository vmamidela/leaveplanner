import React from "react";
import { Link } from "react-router-dom";

export const Item = ({
  className,
  data_toggle,
  aria_haspopup,
  aria_expanded,
  to,
  label,
  id
}) => {
  return (
    <Link
      className={className}
      to={to}
      data-toggle={data_toggle}
      aria-haspopup={aria_haspopup}
      aria-expanded={aria_expanded}
      id={id}
    >
      {label}
    </Link>
  );
};
