import React from "react";
import "./Songrow.css";

function Songrow(props) {
  return (
    <div className="songrow">
      <img
        className="songrow_image"
        src={props.track.album.images[0].url}
        alt=""
      />
      <div className="songrow_info">
        <h1>{props.track.name}</h1>
        <p>
          {props.track.artists.map((artist) => artist.name).join(", ")}-{" "}
          {props.track.album.name}
        </p>
      </div>
    </div>
  );
}

export default Songrow;
