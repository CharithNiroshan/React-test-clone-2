import React from "react";
import "./Banner.css";

function Banner({ active_playlist }) {
  return (
    <div className="body_info">
      <img
        src={active_playlist?.images[0]?.url}
        alt={active_playlist?.name}
        className="playlist_image"
      />
      <div className="body_infotext">
        <strong>PLAYLIST</strong>
        <h2 className="playlist_name">{active_playlist?.name}</h2>
        <p className="playlist_description">{active_playlist?.description}</p>
        <div className="playlist_info">
          <h3 className="playlist_owner">
            {active_playlist?.owner?.display_name}
          </h3>
          <p className="playlist_no_of_songs">
            {active_playlist?.tracks?.total} songs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
