import { FaFontAwesomeFlag } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { IoFootball } from 'react-icons/io5'
import player from '../assets/player.png'

function PlayersListItem({ name, country, continent, onDelete }) {
	let bgClasses

	switch (continent) {
		case 'All':
			bgClasses = 'bg-gradient-to-r from-slate-700 to-slate-900 rounded-l-md'
			break
		case 'Europe':
			bgClasses = 'bg-gradient-to-r from-blue-500 to-blue-700'
			break
		case 'Asia':
			bgClasses = 'bg-gradient-to-r from-green-500 to-green-700'
			break
		case 'Africa':
			bgClasses = 'bg-gradient-to-r from-yellow-500 to-yellow-700'
			break
		case 'America':
			bgClasses = 'bg-gradient-to-r from-cyan-500 to-cyan-700'
			break
		default:
			break
	}
	return (
		<div
			className={`${bgClasses} p-4 rounded-md shadow-lg grid grid-cols-2 items-center relative`}
		>
			<div className='flex flex-col space-y-2'>
				<div className='flex items-center gap-1'>
					<IoFootball className='w-6 h-6' />
					<p className='font-bold text-xl'>{name}</p>
				</div>
				<div className='flex items-center gap-1'>
					<FaFontAwesomeFlag className='w-6 h-6' />
					<p className='font-bold text-xl'>{country}</p>
				</div>
			</div>

			<img src={player} alt='player' className='h-24 ml-auto' />

			<span
				className='absolute -right-2 -top-4 bg-slate-300 rounded-full p-1 hover:bg-slate-400 transition-all'
				role='button'
				onClick={onDelete}
			>
				<IoMdClose className='h-5 w-5' />
			</span>
		</div>
	)
}

export default PlayersListItem
