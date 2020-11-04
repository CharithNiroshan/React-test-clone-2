export const authEndpoint = "https://accounts.spotify.com/authorize";
const redriectUrl = "http://localhost:3000/";
const clinetId = "8765545b25344f0095aa282cbadd8093";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

const loginurl = `${authEndpoint}?client_id=${clinetId}&redirect_uri=${redriectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export default loginurl;
