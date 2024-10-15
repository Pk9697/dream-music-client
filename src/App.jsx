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
			album: 'Give in to me',
			url: 'song1.mp3',
			albumCover: 'https://s3.amazonaws.com/freecodecamp/album1.jpg',
		},
		{
			id: 2,
			title: 'Michael Jackson - Gone too soon',
			artist: 'Michael Jackson',
			playing: '20.410.084',
			album: 'Gone too soon',
			url: 'song2.mp3',
		},
		{
			id: 3,
			title: 'Michael Jackson - Another Part Of Me',
			artist: 'Michael Jackson',
			playing: '152.147.084',
			album: 'Another Part Of Me',
			url: 'song3.mp3',
		},
		{
			id: 4,
			title: 'Michael Jackson - Billie Jean',
			artist: 'Michael Jackson',
			playing: '354.151.149',
			album: 'Billie Jean',
			url: 'song4.mp3',
		},
		{
			id: 5,
			title: 'Michael Jackson - The way you make me feel',
			artist: 'Michael Jackson',
			playing: '351.753.196',
			album: 'The way you make me feel',
			url: 'song5.mp3',
		},
	]

	const [currentSongId, setCurrentSongId] = useState(null)

	const handleNextSong = () => {
		const currentSongIndex = songs.findIndex(
			(song) => song.id === currentSongId
		)
		if (currentSongIndex === songs.length - 1) {
			setCurrentSongId(songs[0].id)
		} else {
			setCurrentSongId(songs[currentSongIndex + 1].id)
		}
	}

	const handlePreviousSong = () => {
		const currentSongIndex = songs.findIndex(
			(song) => song.id === currentSongId
		)
		if (currentSongIndex === 0) {
			setCurrentSongId(songs[songs.length - 1].id)
		} else {
			setCurrentSongId(songs[currentSongIndex - 1].id)
		}
	}

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
						handleNextSong={handleNextSong}
						handlePreviousSong={handlePreviousSong}
					/>
				)}
			</div>
		</div>
	)
}

export default App
