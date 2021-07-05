import React from "react";
import "./Songtabletoprow.css";

function Songtabletoprow() {
  return (
    <div className="songtabletoprow">
      <h4 className="songtabletoprow_index">#</h4>
      <h1 className="songtabletoprow_title">TITLE</h1>
      <h4 className="song_album">ALBUM</h4>
      <h4 className="song_duration">DURATION</h4>
    </div>
  );
}

export default Songtabletoprow;
