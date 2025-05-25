import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import request from '../hooks/use-http'

export const fetchPlayers = createAsyncThunk(
	'players/fetch-players',
	async () => {
		return request('http://localhost:8080/players')
	}
)

const playersSlice = createSlice({
	name: 'players',
	initialState: {
		players: [],
		playersLoadingStatus: 'success',
	},
	reducers: {
		playerCreated: (state, action) => {
			state.players.push(action.payload)
		},
		playerDeleted: (state, action) => {
			state.players = state.players.filter(
				player => player.id !== action.payload
			)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPlayers.pending, state => {
				state.playersLoadingStatus = 'loading'
			})
			.addCase(fetchPlayers.fulfilled, (state, action) => {
				;(state.players = action.payload),
					(state.playersLoadingStatus = 'success')
			})
			.addCase(fetchPlayers.rejected, state => {
				state.playersLoadingStatus = 'error'
			})
	},
})

export const { playerCreated, playerDeleted } = playersSlice.actions

const players = playersSlice.reducer
export default players
