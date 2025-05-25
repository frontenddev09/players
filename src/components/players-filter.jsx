import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './spinner'
import { activeFilterChanged, filtersFetch } from '../slices/filters-slice'

const PlayersFilter = () => {
	const dispatch = useDispatch()
	const { filters, filtersLoadingStatus } = useSelector(state => state.filters)

	useEffect(() => {
		dispatch(filtersFetch())
	}, [])

	if (filtersLoadingStatus === 'loading') {
		return <Spinner classNames={'w-8 h-8 text-white mx-auto my-4'} />
	} else if (filtersLoadingStatus === 'error') {
		return <span className='text-red-500'>Something went wrong</span>
	}

	const renderFilters = () => {
		if (!filters.length) {
			return <span className='text-red-500 font-bold'>Filters not found</span>
		}
		return filters.map(filter => (
			<button
				key={filter.id}
				className={`mt-2 py-2 px-4 text-white hover:opacity-90 transition-all ${filter.classes}`}
				onClick={() => dispatch(activeFilterChanged(filter.label))}
			>
				{filter.label}
			</button>
		))
	}

	return (
		<div className='px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-b from-cyan-500 to-transparent bg-opacity-10 mt-4'>
			<h1 className='text-xl font-bold'>Filter players by continent</h1>
			<div className='flex mt-2'>{renderFilters()}</div>
		</div>
	)
}

export default PlayersFilter
