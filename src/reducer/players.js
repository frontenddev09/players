// import { createReducer } from "@reduxjs/toolkit";
// import {
//   createPlayer,
//   deletePlayer,
//   playersFetched,
//   playersFetching,
//   playersFetchingError,
// } from "../actions";

// const initialState = {
//   players: [],
//   playerLoadingStatus: "success",
// };

// const players = createReducer(initialState, (builder) => {
//   builder
//     .addCase(playersFetching, (state) => {
//       state.playerLoadingStatus = "loading";
//     })
//     .addCase(playersFetched, (state, action) => {
//       state.players = action.payload;
//     })
//     .addCase(
//       playersFetchingError,
//       (state) => (state.playerLoadingStatus = "error")
//     )
//     .addCase(
//       (createPlayer) => (state, action) => state.players.push(action.payload)
//     )
//     .addCase(deletePlayer, (state, action) =>
//       state.players.filter((player) => player.id !== action.payload)
//     );
// });

// const players = (state = initialState, action) => {
//   switch (action.type) {
//     case "PLAYERS_FETCHING":
//       return { ...state, playerLoadingStatus: "loading" };

//     case "PLAYERS_FETCHED":
//       return {
//         ...state,
//         players: action.payload,

//         playerLoadingStatus: "success",
//       };

//     case "PLAYERS_FETCHING_ERROR":
//       return { ...state, playerLoadingStatus: "error" };

//     case "PLAYER_CREATED":
//       const newPlayer = [...state.players, action.payload];
//       return {
//         ...state,
//         players: newPlayer,
//       };

//     case "PLAYER_DELETED":
//       const deletedPlayer = state.players.filter(
//         (player) => player.id !== action.payload
//       );
//       return {
//         ...state,
//         players: deletedPlayer,
//       };

//     default:
//       return state;
//   }
// };

// export default players;
