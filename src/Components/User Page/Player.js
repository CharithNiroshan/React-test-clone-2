import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Main Parts/Body";
import Footer from "./Footer/Footer";
import "./Player.css";

function Player(props) {
  return (
    <div className="player">
      <div className="playerbody">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
