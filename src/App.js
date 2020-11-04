import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Components/Login";
import { getTokenFromResponse } from "./Datalayer Files/spotify";
import Player from "./Components/Player";
import { useDataLayerValue } from "./Datalayer Files/datalayer";

// clientid 8765545b25344f0095aa282cbadd8093
// qazi ="BQDyMUQIBvGcTK5azSH4W09fGczUz0Gnz6GD_7y-1fcXy03LsX_Ndy4tQll7pB_z1XzI_vnkjXyKjgQXodwgIQWB4YYTxdszqJRA";
// token_type = "Bearer";
// expires_in = "3600";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState("");
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    if (hash !== null) {
      setToken(hash.access_token);
      spotify.setAccessToken(hash.access_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);
  console.log(user);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
