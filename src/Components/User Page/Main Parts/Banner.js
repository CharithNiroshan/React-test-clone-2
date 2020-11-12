import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="body_info">
      <img src={props.discover_weekly != null?.images[0]?.url} alt="" />
      <div className="body_infotext">
        <strong>PLAYLIST</strong>
        <h2>
          Discover <br />
          Weekly
        </h2>
        <p>{props.discover_weekly != null?.description}</p>
      </div>
    </div>
  );
}

export default Banner;
