import { v4 as uuidv4 } from 'uuid'
import request from '../hooks/use-http'
import { useDispatch, useSelector } from 'react-redux'
import { playerCreated } from '../slices/players-slice'

const PlayersAddForm = () => {
	const dispatch = useDispatch()
	const { filters } = useSelector(state => state.filters)
	const handleSubmit = e => {
		e.preventDefault()
		const name = e.target.name.value
		const country = e.target.country.value
		const continent = e.target.continent.value

		const data = {
			id: uuidv4(),
			name,
			country,
			continent,
		}

		request('http://localhost:8080/players', 'POST', JSON.stringify(data))
			.then(dispatch(playerCreated(data)))
			.catch(e => console.log(e))
	}

	const renderFilters = () => {
		return filters.map(filter => {
			if (filter.id === 'all') return
			return (
				<option key={filter.id} value={filter.label}>
					{filter.label}
				</option>
			)
		})
	}
	return (
		<div className='px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10'>
			<form onSubmit={e => handleSubmit(e)}>
				<div className='flex flex-col space-y-3'>
					<div>
						<label htmlFor='name' className='text-2xl'>
							New football player
						</label>
						<input
							type='text'
							className='block w-full py-2 px-4 rounded-md mt-1'
							placeholder='Mohammad Salah'
							name='name'
							required
						/>
					</div>

					<div>
						<label htmlFor='country' className='text-2xl'>
							Country
						</label>
						<input
							type='text'
							className='block w-full py-2 px-4 rounded-md mt-1'
							placeholder='Egypt'
							name='country'
							required
						/>
					</div>

					<div>
						<label htmlFor='continent' className='text-2xl'>
							Select player continent
						</label>
						<select
							className='block w-full py-2 px-4 rounded-md mt-1'
							name='continent'
							required
						>
							{renderFilters()}
						</select>
					</div>

					<button
						type='submit'
						className='py-2 px-4 w-fit rounded-md ml-auto bg-gradient-to-r from-blue-500 to-blue-950 text-white hover:scale-105 transition-all font-medium'
					>
						Add player
					</button>
				</div>
			</form>
		</div>
	)
}

export default PlayersAddForm
