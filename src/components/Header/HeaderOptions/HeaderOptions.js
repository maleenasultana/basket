import React from "react";
import "./HeaderOptions.css";

function HeaderOptions({ header, title, email }) {
  return (
    <div className="headerOptions">
      <h4>{header}</h4>
      <h4>{email}</h4>
      <h2>{title}</h2>
    </div>
  );
}

export default HeaderOptions;