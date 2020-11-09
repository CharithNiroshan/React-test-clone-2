import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Components/Login";
import { getTokenFromResponse } from "./Datalayer Files/spotify";
import Player from "./Components/Player";
import { useDataLayerValue } from "./Datalayer Files/datalayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists.then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">{token ? <Player user={user} /> : <Login />}</div>
  );
}

export default App;
