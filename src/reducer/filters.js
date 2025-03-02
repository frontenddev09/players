// import { createReducer } from "@reduxjs/toolkit";
// import {
//   activeFilterChanged,
//   filtersFetched,
//   filtersFetching,
//   filtersFetchingError,
// } from "../actions";

// const initialState = {
//   filters: [],
//   filtersLoadingStatus: "success",
//   activeFilter: "All",
//   filteredPlayers: [],
// };

// const filters = (state = initialState, action) => {
//   switch (action.type) {
//     case "FILTERS_FETCHING":
//       return { ...state, filtersLoadingStatus: "loading" };

//     case "FILTERS_FETCHED":
//       return {
//         ...state,
//         filters: action.payload,
//         filtersLoadingStatus: "success",
//       };

//     case "FILTERS_FETCHING_ERROR":
//       return { ...state, filtersLoadingStatus: "error" };

//     case "PLAYERS_FILTERED":
//       return {
//         ...state,
//         activeFilter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// const filters = createReducer(initialState, (builder) => {
//   builder
//     .addCase(filtersFetching, (state) => {
//       state.filtersLoadingStatus = "loading";
//     })
//     .addCase(filtersFetchingError, (state) => {
//       state.filtersLoadingStatus = "error";
//     })
//     .addCase(filtersFetched, (state, action) => {
//       (state.filters = action.payload),
//         (state.filtersLoadingStatus = "success");
//     })
//     .addCase(activeFilterChanged, (state, action) => {
//       state.activeFilter = action.payload;
//     });
// });

// export default filters;
