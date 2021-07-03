import React from "react";
import "./Banner.css";

function Banner({ discover_weekly }) {
  return (
    <div className="body_info">
      <img src={discover_weekly?.images[0]?.url} alt="" />
      <div className="body_infotext">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
      </div>
    </div>
  );
}

export default Banner;
