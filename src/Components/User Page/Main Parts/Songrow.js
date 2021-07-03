import React from "react";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";
import "./Songrow.css";

function Songrow({ track }) {
  const [{}, dispatch] = useDataLayerValue();

  const handleClick = () => {
    dispatch({
      type: "SET_CURRENTLYPLAYING",
      current_track: track,
    });
  };

  return (
    <div className="songrow" onClick={() => handleClick()}>
      <img className="songrow_image" src={track.album.images[0].url} alt="" />
      <div className="songrow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}-{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default Songrow;
