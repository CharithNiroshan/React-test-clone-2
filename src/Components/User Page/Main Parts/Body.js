import React from "react";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";
import "./Body.css";
import Header from "./Header";
import Songrow from "./Songrow";
import Banner from "./Banner";
import Playarea from "./Playarea";
import Songtabletoprow from "./Songtabletoprow";

function Body() {
  const [{ active_playlist }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />
      <Banner active_playlist={active_playlist} />
      <div className="body_songs">
        <Playarea />
        <div className="songs">
          <Songtabletoprow />
          {active_playlist?.tracks?.items?.map((item, index) => {
            return (
              <Songrow
                track={item?.track}
                key={item?.track?.id}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
