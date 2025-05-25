// import { createReducer } from '@reduxjs/toolkit'
// import {
// 	playerCreated,
// 	playerDeleted,
// 	playersFetched,
// 	playersFetching,
// 	playersFetchingError,
// } from '../actions'

// const initialState = {
// 	players: [],
// 	playersLoadingStatus: 'success',
// }

// const players = createReducer(initialState, builder => {
// 	builder
// 		.addCase(playersFetching, state => {
// 			state.playersLoadingStatus = 'loading'
// 		})
// 		.addCase(playersFetched, (state, action) => {
// 			;(state.players = action.payload),
// 				(state.playersLoadingStatus = 'success')
// 		})
// 		.addCase(playersFetchingError, state => {
// 			state.playersLoadingStatus = 'error'
// 		})
// 		.addCase(playerCreated, (state, action) => {
// 			state.players.push(action.payload)
// 		})
// 		.addCase(playerDeleted, (state, action) => {
// 			state.players = state.players.filter(
// 				player => player.id !== action.payload
// 			)
// 		})
// 		.addDefaultCase(() => {})
// })

// // const players = (state = initialState, action) => {
// // 	switch (action.type) {
// // 		case 'PLAYERS_FETCHING':
// // 			return { ...state, playersLoadingStatus: 'loading' }
// // 		case 'PLAYERS_FETCHED':
// // 			return {
// // 				...state,
// // 				playersLoadingStatus: 'success',
// // 				players: action.payload,
// // 			}
// // 		case 'PLAYERS_FETCHING_ERROR':
// // 			return { ...state, playersLoadingStatus: 'error' }

// // 		case 'PLAYER_CREATED':
// // 			const newPlayer = [...state.players, action.payload]
// // 			return {
// // 				...state,
// // 				players: newPlayer,
// // 			}
// // 		case 'PLAYER_DELETED':
// // 			const deletedPlayers = state.players.filter(
// // 				player => player.id !== action.payload
// // 			)
// // 			return {
// // 				...state,
// // 				players: deletedPlayers,
// // 			}

// // 		default:
// // 			return state
// // 	}
// // }

// export default players
