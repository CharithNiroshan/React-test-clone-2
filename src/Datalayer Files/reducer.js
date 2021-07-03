export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  discover_weekly: null,
  current_track: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVERWEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENTLYPLAYING":
      return {
        ...state,
        current_track: action.current_track,
      };
    default:
      return state;
  }
};

export default reducer;
