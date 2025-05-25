import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useHttp } from '../hooks/use-http'

const initialState = {
	filters: [],
	filtersLoadingStatus: 'success',
	activeFilter: 'All',
}

export const filtersFetch = createAsyncThunk(
	'filters/filters-fetch',
	async () => {
		const { request } = useHttp()
		return request('http://localhost:8080/filters')
	}
)

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		activeFilterChanged: (state, action) => {
			state.activeFilter = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(filtersFetch.pending, state => {
				state.filtersLoadingStatus = 'loading'
			})
			.addCase(filtersFetch.fulfilled, (state, action) => {
				;(state.filtersLoadingStatus = 'success'),
					(state.filters = action.payload)
			})
			.addCase(filtersFetch.rejected, state => {
				state.filtersLoadingStatus = 'error'
			})
	},
})

const filters = filtersSlice.reducer

export const { activeFilterChanged } = filtersSlice.actions

export default filters
