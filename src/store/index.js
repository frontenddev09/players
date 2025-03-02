// import {
//   applyMiddleware,
//   combineReducers,
//   compose,
//   legacy_createStore,
// } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import players from "../slice/players-slice";
import filters from "../slice/filters-slice";

// const enhancer =
//   (createStore) =>
//   (...args) => {
//     const store = createStore(...args);

//     const oldDispatch = store.dispatch;

//     store.dispatch = (action) =>
//       typeof action === "string"
//         ? oldDispatch({ type: action })
//         : oldDispatch(action);

//     return store;
//   };

const stringMiddleware = () => (next) => (action) =>
  typeof action === "string" ? next({ type: action }) : next(action);

const store = configureStore({
  reducer: { players, filters },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
});

// const store = legacy_createStore(
//   combineReducers({ players, filters }),
//   compose(
//     applyMiddleware(thunk, stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
