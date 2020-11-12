import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";

function Footer(props) {
  const [{ playing }, dispatch] = useDataLayerValue();

  return (
    <div className="footer">
      <div className="footer_left">
        <img className="albumicon" src="" />
        <div classname="albumdetails">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <ul className="footer_center">
        <li>
          <ShuffleIcon className="shuffleicon footer_green" />
        </li>
        <li>
          <SkipPreviousIcon className="skipprevicon" />
        </li>
        <li>
          <PlayCircleOutlineIcon className="palyicon" />
        </li>
        <li>
          <SkipNextIcon className="skipnexticon" />
        </li>
        <li>
          <RepeatIcon className="repeaticon footer_green" />
        </li>
      </ul>
      <div className="footer_right">
        <PlaylistPlayIcon />
        <VolumeDownIcon />
        <Slider className="slider" />
      </div>
    </div>
  );
}

export default Footer;
