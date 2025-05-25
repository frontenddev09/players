import PlayersAddForm from './players-add-form'
import PlayersFilter from './players-filter'
import PlayersList from './players-list'

const App = () => {
	return (
		<div className='h-screen w-full relative app'>
			<div className='absolute inset-0 bg-black/80 blur-3xl z-10' />

			<div className=' md:grid md:grid-cols-2 flex flex-col-reverse gap-4 container max-w-6xl mx-auto z-50 relative pt-12 max-md:bg-[#13343e]'>
				<PlayersList />
				<div className='max-md:mx-auto max-md:'>
					<PlayersAddForm />
					<PlayersFilter />
				</div>
			</div>
		</div>
	)
}

export default App
