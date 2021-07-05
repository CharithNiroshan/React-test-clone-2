import React from "react";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";
import "./Songrow.css";
import msToTime from "./Otherfiles/songduration";

function Songrow({ track, current, index }) {
  const [{}, dispatch] = useDataLayerValue();

  const handleClick = () => {
    dispatch({
      type: "SET_CURRENTLYPLAYING",
      current_track: track,
    });
  };

  const song_duration = msToTime(track?.duration_ms);

  return (
    <div
      className={current ? "songrow current" : "songrow noncurrent"}
      onClick={() => handleClick()}
    >
      {current || <h4 className="song_index">{index + 1}</h4>}
      <div
        className={
          current ? "song_detail_container current" : "song_detail_container"
        }
      >
        <img className="songrow_image" src={track.album.images[0].url} alt="" />
        <div className="songrow_info">
          <h1>{track.name}</h1>
          <p>{track.artists.map((artist) => artist.name).join(",")}</p>
        </div>
      </div>
      {current || <h4 className="song_album">{track?.album?.name}</h4>}
      {current || <h4 className="song_duration">{song_duration}</h4>}
    </div>
  );
}

export default Songrow;
