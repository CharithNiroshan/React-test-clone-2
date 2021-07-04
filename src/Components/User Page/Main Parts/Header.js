import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../../Datalayer Files/datalayer";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="Header">
      {/* <div className="Header_left">
        <Search />
        <input placeholder="Search for Artist, Songs or Podcasts" type="text" />
      </div> */}
      <div className="Header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h1>{user?.display_name}</h1>
      </div>
    </div>
  );
}

export default Header;
