import React from "react";
import "./Sidebar.css";
import Sidebaroption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
        className="sidebar_logo"
      />
      <Sidebaroption title="Home" icon={HomeIcon} />
      <Sidebaroption title="Search" icon={SearchIcon} />
      <Sidebaroption title="Your Library" icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {playlists?.map((playlist) => {
        return <Sidebaroption title={playlist.name} />;
      })}
    </div>
  );
}

export default Sidebar;
