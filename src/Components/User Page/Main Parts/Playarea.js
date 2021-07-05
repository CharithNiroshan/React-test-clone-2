import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Playarea.css";

function Playarea(props) {
  return (
    <div className="Icons">
      <PlayCircleFilledIcon className="body_play" />
      <MoreHorizIcon className="More" />
    </div>
  );
}

export default Playarea;
