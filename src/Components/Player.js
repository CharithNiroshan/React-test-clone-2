import React from "react";
import Sidebar from "./User Page/Sidebar/Sidebar";
import Body from "./User Page/Main Parts/Body";
import Footer from "./User Page/Footer/Footer";
import "./Player.css";

function Player() {
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
