import { createAction } from '@reduxjs/toolkit'
import {
	filtersFetched,
	filtersFetching,
	filtersFetchingError,
} from '../slice/filters-slice'
import {
	playersFetched,
	playersFetching,
	playersFetchingError,
} from '../slice/players-slice'

export const fetchPlayer = request => dispatch => {
	dispatch(playersFetching())

	request('http://localhost:3000/players')
		.then(data => {
			dispatch(playersFetched(data))
		})
		.catch(() => dispatch(playersFetchingError()))
}

export const fetchFilters = request => dispatch => {
	dispatch(filtersFetching())

	request('http://localhost:3000/filters')
		.then(data => dispatch(filtersFetched(data)))
		.catch(() => dispatch(filtersFetchingError()))
}

export const playersFetching = createAction('PLAYERS_FETCHING')
export const playersFetched = createAction('PLAYERS_FETCHED')
export const playersFetchingError = createAction('PLAYERS_FETCHING_ERROR')
export const createPlayer = createAction('PLAYER_CREATED')
export const deletePlayer = createAction('PLAYER_DELETED')

export const filtersFetching = createAction('FILTERS_FETCHING')
export const filtersFetched = createAction('FILTERS_FETCHED')
export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR')
export const activeFilterChanged = createAction('PLAYERS_FILTERED')
