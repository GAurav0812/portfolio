import "./nav.scss";
import React, { useState } from "react";
import Button from "../nav-button/nav-button";

function Nav(props) {
  const handleNav = (btnData, index) => {
    // props.data[index] = btnData;
    let sections = [...props.data];
    sections[index] = btnData;
    props.updateSections(sections);
  };
  return (
    <div className="navbar">
      {/*  <div className="nav-title">
        <div>GAurav</div>
      </div> */}
      <div className="nav-content">
        {props.data &&
          props.data.length > 0 &&
          props.data.map((x, index) => {
            return (
              <Button
                key={index}
                index={index}
                inputData={x}
                onSelectNav={handleNav}
              ></Button>
            );
          })}
      </div>
    </div>
  );
}

export default Nav;
