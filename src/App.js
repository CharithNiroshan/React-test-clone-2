import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Components/Login Page/Login";
import { getTokenFromResponse } from "./Datalayer Files/spotify";
import Player from "./Components/User Page/Player";
import { useDataLayerValue } from "./Datalayer Files/datalayer";

const spotify = new SpotifyWebApi();

function App() {
  //Setting a State for the users Login status which is initially flase
  const [login, setloginstatus] = useState(false);

  //Getting the values from datalayer
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    //Getting the url parameters from the url
    const hash = getTokenFromResponse();

    //Setting back the url to normal after getting token
    window.location.hash = "";

    const token = hash.access_token;

    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token: token,
      });

      spotify.setAccessToken(token);

      //Changing login status to true
      setloginstatus(true);

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

      spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) => {
        dispatch({
          type: "SET_DISCOVERWEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, window.location);

  return <div className="App">{login ? <Login /> : <Player />}</div>;
}

export default App;
