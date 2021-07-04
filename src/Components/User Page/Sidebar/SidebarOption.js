import React from "react";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";
import "./Sidebaroption.css";

function SidebarOption(props) {
  const [{}, dispatch] = useDataLayerValue();

  const handleClick = () => {
    dispatch({
      type: "SET_ACTIVEPLAYLIST",
      playlist: props.list,
    });
  };

  return (
    <div className="sidebaroptions">
      {props.icon && <props.icon className="sidebaroption_icon" />}
      {props.icon ? (
        <h4>{props.title}</h4>
      ) : (
        <h4
          onClick={() => {
            handleClick();
          }}
        >
          {props.list.name}
        </h4>
      )}
    </div>
  );
}

export default SidebarOption;
