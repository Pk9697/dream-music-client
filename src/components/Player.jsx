import { useLayoutEffect, useRef, useState } from 'react'
import ReactHowler from 'react-howler'
import albumCover from '../assets/albumCover.png'

import {
	PauseIcon,
	PlayIcon,
	RepeatIcon,
	ShuffleIcon,
	SkipBackIcon,
	SkipForwardIcon,
} from 'lucide-react'

const Player = ({ currentSong }) => {
	const [isPlaying, setIsPlaying] = useState(true) // Default to play when song starts
	const [seek, setSeek] = useState(0)
	const playerRef = useRef(null)
	const [songFile, setSongFile] = useState(null)

	useLayoutEffect(() => {
		async function importFile() {
			const file = await import(`../assets/songs/${currentSong.url}`)
			setSongFile(file.default)
		}
		importFile()
	}, [currentSong])

	const handlePlayPause = () => {
		setIsPlaying((prev) => !prev)
	}

	console.log(songFile)

	return (
		<div className='bg-player-red p-4 rounded-xl fixed bottom-5 right-5 w-64 aspect-[4/5] flex flex-col items-center justify-between gap-4'>
			<h3 className='text-sm font-semibold '>Now Playing</h3>

			<div>
				<img
					src={albumCover}
					alt={currentSong.title}
					className='aspect-video object-contain w-full'
				/>
			</div>

			<div className='flex flex-col items-center'>
				<h4 className='text-lg font-semibold'>{currentSong.title}</h4>
				<p className='text-xs text-light-gray'>{currentSong.artist}</p>
			</div>

			<div className='w-full flex justify-between items-center gap-3'>
				<span className='text-sm font-medium'>0:00</span>
				<input
					type='range'
					className='w-full accent-light'
					min={0}
					max={100} // Placeholder for now, you can adjust max based on duration
					value={seek}
					onChange={(e) => setSeek(e.target.value)}
				/>
				<span className='text-sm font-medium'>{currentSong.time}</span>
			</div>
			{songFile && (
				<ReactHowler
					ref={playerRef}
					src={songFile}
					playing={isPlaying}
					onEnd={() => setIsPlaying(false)}
					onLoad={() => console.log('Song loaded')}
					onSeek={() => console.log('Song seeked')}
				/>
			)}

			<div className='w-full flex justify-between items-center'>
				<button className='bg-none'>
					<RepeatIcon />
				</button>
				<button className='bg-none'>
					<SkipBackIcon />
				</button>
				<button
					className='bg-dark-red-light p-2 rounded-lg'
					onClick={handlePlayPause}
				>
					{!isPlaying ? <PlayIcon /> : <PauseIcon />}
				</button>
				<button className='bg-none'>
					<SkipForwardIcon />
				</button>
				<button className='bg-none'>
					<ShuffleIcon />
				</button>
			</div>
		</div>
	)
}

export default Player
