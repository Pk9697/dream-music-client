import { useState } from 'react'
import Artist from './components/Artist'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SongList from './components/SongList'

function App() {
	const songs = [
		{
			id: 1,
			title: 'Michael Jackson - Beat it',
			playing: '1.040.811.084',
			time: '3:45',
			album: 'Beat it',
		},
		{
			id: 2,
			title: 'Michael Jackson - I wish you were here',
			playing: '20.410.084',
			time: '4:40',
			album: 'I wish you were here',
		},
		{
			id: 3,
			title: 'Michael Jackson - Rock with you',
			playing: '152.147.084',
			time: '2:45',
			album: 'Rock with you',
		},
		{
			id: 4,
			title: 'Michael Jackson - Billie Jean',
			playing: '354.151.149',
			time: '2:59',
			album: 'Billie Jean',
		},
		{
			id: 5,
			title: 'Michael Jackson - The way you make me feel',
			playing: '351.753.196',
			time: '4:30',
			album: 'The way you make me feel',
		},
	]

	const [currentSongId, setCurrentSongId] = useState(1)
	return (
		<div className='flex'>
			<Sidebar />
			<div className='w-full flex'>
				<div className='flex-grow bg-primary-red flex flex-col gap-8'>
					<Navbar />
					<Artist />
					<SongList
						songs={songs}
						currentSongId={currentSongId}
						onSongSelect={(songId) => setCurrentSongId(songId)}
					/>
				</div>
				<div className='hidden lg:block bg-dark-red min-w-60'>hello</div>
			</div>
		</div>
	)
}

export default App
