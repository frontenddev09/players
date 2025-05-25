// // 
// import {
// 	filtersFetched,
// 	filtersFetching,
// 	filtersFetchingError,
// } from '../slices/filters-slice'

// export const filtersFetch = request => dispatch => {
// 	dispatch(filtersFetching())

// 	request('http://localhost:8080/filters')
// 		.then(data => dispatch(filtersFetched(data)))
// 		.catch(() => dispatch(filtersFetchingError()))
// }

// // export const playersFetching = createAction('PLAYERS_FETCHING')
// // export const playersFetchingError = createAction('PLAYERS_FETCHING_ERROR')
// // export const playersFetched = createAction('PLAYERS_FETCHED')
// // export const playerCreated = createAction('PLAYER_CREATED')
// // export const playerDeleted = createAction('PLAYER_DELETED')

// // export const filtersFetching = createAction('FILTERS_FETCHING')
// // export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR')
// // export const filtersFetched = createAction('FILTERS_FETCHED')
// // export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED')
