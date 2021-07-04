import { useEffect, useState } from "react";
import Spotify from "spotify-web-api-js";
import Login from "./Components/Login Page/Login";
import { getTokenFromResponse } from "./Spotify/spotify";
import Player from "./Components/User Page/Player";
import { useDataLayerValue } from "./Datalayer Files/datalayer";

const spotify = new Spotify();

function App() {
  const [accesstoken, setAccessToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

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

        spotify.getUserPlaylists().then((playlists) => {
          playlists.items.map(async (playlist) => {
            const songs = await spotify.getPlaylist(playlist.id);
            playlist.tracks = songs.tracks;
          });
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

        spotify.getPlaylist(user.id).then((playlist) => {
          dispatch({
            type: "SET_ACTIVEPLAYLIST",
            playlist: playlist,
          });
        });
      });
    }
  }, [window.location]);

  return <div className="app">{accesstoken ? <Player /> : <Login />}</div>;
}

export default App;
