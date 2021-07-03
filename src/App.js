import { useEffect, useState } from "react";
import Spotify from "spotify-web-api-js";
import Login from "./Components/Login Page/Login";
import { getTokenFromResponse } from "./Spotify/spotify";
import Player from "./Components/User Page/Player";
import { useDataLayerValue } from "./Datalayer Files/datalayer";

const spotify = new Spotify();

function App() {
  const [accesstoken, setAccessToken] = useState(null);

  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      setAccessToken(token);

      spotify.setAccessToken(token);

      dispatch({
        type: "SET_TOKEN",
        token: token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlists,
        });
      });
      //9c378d06a98b4100ba04ddde9e2d7637

      spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) => {
        dispatch({
          type: "SET_DISCOVERWEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [window.location]);

  return <div className="app">{accesstoken ? <Player /> : <Login />}</div>;
}

export default App;
