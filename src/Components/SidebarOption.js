import React from "react";
import "./Sidebaroption.css";

function SidebarOption(props) {
  return (
    <div className="sidebaroptions">
      {props.icon && <props.icon className="sidebaroption_icon" />}
      {props.icon ? <h4>{props.title}</h4> : <p>{props.title}</p>}
    </div>
  );
}

export default SidebarOption;
