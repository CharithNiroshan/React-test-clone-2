import React from "react";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";
import "./Body.css";
import Header from "./Header";
import Songrow from "./Songrow";
import Banner from "./Banner";
import Playarea from "./Playarea";
import { ConfirmationNumber } from "@material-ui/icons";

function Body() {
  const [{ active_playlist, playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />
      {active_playlist ? (
        <Banner active_playlist={active_playlist} />
      ) : (
        <Banner active_playlist={playlists?.items[0]} />
      )}
      <div className="body_songs">
        <Playarea />
        <div className="songs">
          {active_playlist
            ? active_playlist?.tracks?.items?.map((item) => {
                return <Songrow track={item.track} />;
              })
            : playlists?.items[0]?.tracks?.items?.map((item) => {
                return <Songrow track={item.track} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Body;
