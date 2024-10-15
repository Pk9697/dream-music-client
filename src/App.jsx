import { useState } from 'react'
import Artist from './components/Artist'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SongList from './components/SongList'
import Player from './components/Player'

function App() {
	const songs = [
		{
			id: 1,
			title: 'Michael Jackson - Give in to me',
			artist: 'Michael Jackson',
			playing: '1.040.811.084',
			time: '5:29',
			album: 'Give in to me',
			url: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
			albumCover: 'https://s3.amazonaws.com/freecodecamp/album1.jpg',
		},
		{
			id: 2,
			title: 'Michael Jackson - Gone too soon',
			artist: 'Michael Jackson',
			playing: '20.410.084',
			time: '3:38',
			album: 'Gone too soon',
		},
		{
			id: 3,
			title: 'Michael Jackson - Another Part Of Me',
			artist: 'Michael Jackson',
			playing: '152.147.084',
			time: '4:43',
			album: 'Another Part Of Me',
		},
		{
			id: 4,
			title: 'Michael Jackson - Billie Jean',
			artist: 'Michael Jackson',
			playing: '354.151.149',
			time: '4:55',
			album: 'Billie Jean',
		},
		{
			id: 5,
			title: 'Michael Jackson - The way you make me feel',
			artist: 'Michael Jackson',
			playing: '351.753.196',
			time: '6:43',
			album: 'The way you make me feel',
		},
	]

	const [currentSongId, setCurrentSongId] = useState(null)
	return (
		<div className='flex'>
			<Sidebar />
			<div className='w-full flex'>
				<div className='flex-grow bg-primary-red flex flex-col gap-8 main'>
					<Navbar />
					<Artist />
					<SongList
						songs={songs}
						currentSongId={currentSongId}
						onSongSelect={(songId) => setCurrentSongId(songId)}
					/>
				</div>
				{currentSongId && (
					<Player
						currentSong={songs.find((song) => song.id === currentSongId)}
					/>
				)}
			</div>
		</div>
	)
}

export default App
