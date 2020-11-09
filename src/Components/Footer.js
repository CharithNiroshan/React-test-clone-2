import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="albumicon" src="https://upload.wikimedia.org/wiki" />
        <div classname="albumdetails">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <ul className="footer_center">
        <li>
          <ShuffleIcon className="shuffleicon" />
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
          <RepeatIcon className="repeaticon" />
        </li>
      </ul>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
