import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../hooks/use-http";

const initialState = {
  filters: [],
  filtersLoadingStatus: "success",
  activeFilter: "All",
  filteredPlayers: [],
};

export const fetchFilter = createAsyncThunk("fetchFilter", async () => {
  const { request } = useHttp();
  return await request("http://localhost:3000/filters");
});

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // filtersFetching: (state) => {
    //   state.filtersLoadingStatus = "loading";
    // },
    // filtersFetchingError: (state) => {
    //   state.filtersLoadingStatus = "error";
    // },
    // filtersFetched: (state, action) => {
    //   (state.filters = action.payload),
    //     (state.filtersLoadingStatus = "success");
    // },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilter.pending, (state) => {
        state.filtersLoadingStatus = "loading";
      })
      .addCase(fetchFilter.fulfilled, (state, action) => {
        (state.filters = action.payload),
          (state.filtersLoadingStatus = "success");
      })
      .addCase(fetchFilter.rejected, (state) => {
        state.filtersLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer, actions } = filterSlice;
export default reducer;
export const {
  activeFilterChanged,
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
} = actions;
