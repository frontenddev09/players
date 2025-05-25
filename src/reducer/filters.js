// import { createReducer } from '@reduxjs/toolkit'
// import {
// activeFilterChanged,
// 	filtersFetched,
// 	filtersFetching,
// 	filtersFetchingError,
// } from '../actions'

// const initialState = {
// 	filters: [],
// 	filtersLoadingStatus: 'success',
// 	activeFilter: 'All',
// 	filteredPlayers: [],
// }

// const filters = createReducer(initialState, builder => {
// 	builder
// 		.addCase(filtersFetching, state => {
// 			state.filtersLoadingStatus = 'loading'
// 		})
// 		.addCase(filtersFetched, (state, action) => {
// 			;(state.filtersLoadingStatus = 'success'),
// 				(state.filters = action.payload)
// 		})
// 		.addCase(filtersFetchingError, state => {
// 			state.filtersLoadingStatus = 'error'
// 		})
// 		.addCase(activeFilterChanged, (state, action) => {
// 			state.activeFilter = action.payload
// 		})
// 		.addDefaultCase(() => {})
// })

// const filters = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'ACTIVE_FILTER_CHANGED':
// 			const fill = action.payload
// 			return {
// 				...state,
// 				activeFilter: fill,
// 			}

// 		case 'FILTERS_FETCHING':
// 			return { ...state, filtersLoadingStatus: 'loading' }
// 		case 'FILTERS_FETCHED':
// 			return {
// 				...state,
// 				filtersLoadingStatus: 'success',
// 				filters: action.payload,
// 			}
// 		case 'FILTERS_FETCHING_ERROR':
// 			return { ...state, filtersLoadingStatus: 'error' }
// 		default:
// 			return state
// 	}
// }

// export default filters
