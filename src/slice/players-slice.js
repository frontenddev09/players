import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../hooks/use-http";

const initialState = {
  players: [],
  playerLoadingStatus: "success",
};

export const fetchPlayers = createAsyncThunk(
  "players/fetchPlayers",
  async () => {
    const { request } = useHttp();
    return await request("http://localhost:3000/players");
  }
);

const players = createSlice({
  name: "players",
  initialState,
  reducers: {
    // playersFetching: (state) => {
    //   state.playerLoadingStatus = "loading";
    // },
    // playersFetchingError: (state) => {
    //   state.playerLoadingStatus = "error";
    // },
    // playersFetched: (state, action) => {
    //   (state.playerLoadingStatus = "success"), (state.players = action.payload);
    // },
    createPlayer: (state, action) => {
      state.players.push(action.payload);
    },
    deletePlayer: (state, action) => {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.playerLoadingStatus = "loading";
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.playerLoadingStatus = "success",
          state.players = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state) => {
        state.playerLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = players;
export default reducer;
export const {
  createPlayer,
  deletePlayer,
  playersFetched,
  playersFetching,
  playersFetchingError,
} = actions;
