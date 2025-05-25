import { configureStore } from '@reduxjs/toolkit'
import players from '../slices/players-slice'
import filters from '../slices/filters-slice'

const middleware = () => next => action => {
	if (typeof action === 'string') {
		return next({ type: action })
	}
	return next(action)
}

// const store = legacy_createStore(
// 	combineReducers({ players, filters }),
// 	compose(applyMiddleware(thunk, middleware))
// )

const store = configureStore({
	reducer: {
		players,
		filters,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
	devTools: true,
})

export default store
