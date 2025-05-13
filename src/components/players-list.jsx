import { useCallback } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { deletePlayer, fetchPlayers } from '../slice/players-slice'
import useHttp from '../hooks/use-http'
import Empty from './empty'
import Error from './error'
import PlayersListItem from './players-list-item'
import Spinner from './spinner'

const PlayersList = () => {
	//
	const filteredPlayersSelector = createSelector(
		state => state.filters.activeFilter,
		state => state.players.players,
		(filter, players) => {
			if (filter === 'All') {
				return players
			} else {
				return players.filter(player => player.continent === filter)
			}
		}
	)

	const filteredPlayers = useSelector(filteredPlayersSelector)

	const playerLoadingStatus = useSelector(
		state => state.players.playerLoadingStatus
	)

	const { request } = useHttp()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPlayers())
	}, [])

	const onDelete = useCallback(
		id => {
			request(`http://localhost:3000/players/${id}`, 'DELETE')
				.then(res => console.log(res, 'Deleted successfully'))
				.then(dispatch(deletePlayer(id)))
				.catch(e => console.log(e))
		},
		[request]
	)

	if (playerLoadingStatus === 'loading') {
		return <Spinner classNames={'text-white w-8 h-8 mx-auto'} />
	} else if (playerLoadingStatus === 'error') {
		return <Error />
	}

	const renderPlayers = () => {
		if (filteredPlayers.length === 0) {
			return <Empty />
		}
		return filteredPlayers.map(({ id, ...props }) => (
			<PlayersListItem key={id} {...props} onDelete={() => onDelete(id)} />
		))
	}

	return (
		<div className='space-y-5 p-4 h-[80%] overflow-scroll'>
			{renderPlayers()}
		</div>
	)
}

export default PlayersList
