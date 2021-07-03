import React from "react";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";
import "./Body.css";
import Header from "./Header";
import Songrow from "./Songrow";
import Banner from "./Banner";
import Playarea from "./Playarea";

function Body() {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />
      <Banner discover_weekly={discover_weekly} />
      <div className="body_songs">
        <Playarea />
        <div className="songs">
          {discover_weekly?.tracks?.items?.map((item) => {
            return <Songrow track={item.track} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
