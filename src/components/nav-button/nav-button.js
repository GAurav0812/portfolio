import "./nav-button.scss";
import React, { useState } from "react";

function NavButton(props) {
  let [toggled, toggleUpdate] = useState(props.inputData.show);
  const handleNavChange = () => {
    toggleUpdate(!toggled);
    let obj = Object.assign(props.inputData);
    obj.show = !toggled;
    props.onSelectNav(obj, props.index);
  };
  return (
    <button
      className={`nav-btn ${toggled ? "active" : "inactive"}`}
      onClick={handleNavChange}
    >
      {props.inputData.title}
    </button>
  );
}

export default NavButton;
