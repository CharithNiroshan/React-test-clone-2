export const initialState = {
  user: null,
  token: null,
  playlists: null,
  active_playlist: null,
  active_track: null,
  playing: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_ACTIVEPLAYLIST":
      return {
        ...state,
        active_playlist: action.playlist,
      };
    case "SET_CURRENTLYPLAYING":
      return {
        ...state,
        active_track: action.current_track,
      };
    default:
      return state;
  }
};

export default reducer;
