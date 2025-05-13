const initialState = {
  players: [],
  playerLoadingStatus: "success",
  filters: [],
  filtersLoadingStatus: "success",
  activeFilter: "All",
  filteredPlayers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // PLAYERS
    case "PLAYERS_FETCHING":
      return { ...state, playerLoadingStatus: "loading" };

    case "PLAYERS_FETCHED":
      return {
        ...state,
        players: action.payload,

        playerLoadingStatus: "success",
      };

    case "PLAYERS_FETCHING_ERROR":
      return { ...state, playerLoadingStatus: "error" };

    case "PLAYER_CREATED":
      const newPlayer = [...state.players, action.payload];
      return {
        ...state,
        players: newPlayer,
      };

    case "PLAYER_DELETED":
      const deletedPlayer = state.players.filter(
        (player) => player.id !== action.payload
      );
      return {
        ...state,
        players: deletedPlayer,
      };

    // FILTERS
    case "FILTERS_FETCHING":
      return { ...state, filtersLoadingStatus: "loading" };

    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "success",
      };

    case "FILTERS_FETCHING_ERROR":
      return { ...state, filtersLoadingStatus: "error" };

    case "PLAYERS_FILTERED":
      return {
        ...state,
        activeFilter: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
