import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './spinner'
import Error from './error'
import Empty from './empty'
import PlayersListItem from './players-list-item'
import { createSelector } from 'reselect'
import { fetchPlayers, playersDeleted } from '../slices/players-slice'

const PlayersList = () => {
	const dispatch = useDispatch()
	const filteredPlayersSelector = createSelector(
		state => state.players.players,
		state => state.filters.activeFilter,
		(players, filter) => {
			if (filter === 'All') {
				return players
			} else {
				return players.filter(player => player.continent === filter)
			}
		}
	)
	const filteredPlayers = useSelector(filteredPlayersSelector)

	const generateScrollClass = () => {
		if (filteredPlayers.length <= 4) {
			return 'overflow-y-hidden'
		} else {
			return 'overflow-y-scroll'
		}
	}
	const classes = generateScrollClass()

	const playersLoadingStatus = useSelector(
		state => state.players.playersLoadingStatus
	)

	useEffect(() => {
		dispatch(fetchPlayers())
	}, [])

	const onDelete = useCallback(id => {
		dispatch(playersDeleted(id))
	}, [])

	if (playersLoadingStatus === 'loading') {
		return <Spinner classNames={'w-8 h-8 text-white mx-auto '} />
	} else if (playersLoadingStatus === 'error') {
		return <Error />
	}

	const render = () => {
		if (!filteredPlayers.length) {
			return <Empty />
		}
		return filteredPlayers.map(({ id, ...props }) => (
			<PlayersListItem key={id} {...props} onDelete={() => onDelete(id)} />
		))
	}

	return (
		<div
			className={`${classes} flex flex-col space-y-7 overflow-x-hidden h-[80vh] p-6 max-md:my-6`}
		>
			{render()}
		</div>
	)
}

export default PlayersList
