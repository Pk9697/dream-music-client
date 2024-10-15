import { useEffect, useRef, useState } from 'react'
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
import { getSongUrl } from '../utils/getAssetUrl'
import { formatTime } from '../utils/formatTime'

const Player = ({ currentSong,handleNextSong, handlePreviousSong }) => {
	const [isPlaying, setIsPlaying] = useState(true) // Default to play when song starts
	const [progress, setProgress] = useState(0)
	const [duration, setDuration] = useState(0) // Duration of the song
	const playerRef = useRef(null)

	useEffect(() => {
		let interval
		if (isPlaying) {
			interval = setInterval(() => {
				const sound = playerRef.current?.howler // Get Howler instance
				if (sound) {
					setProgress(sound.seek()) // Update the progress (seek value)
				}
			}, 1000) // Update every second
		} else if (!isPlaying && interval) {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isPlaying])

	const handlePlayPause = () => {
		setIsPlaying((prev) => !prev)
	}

	const handleLoad = () => {
		const sound = playerRef.current?.howler
		if (sound) {
			// console.log(sound)
			setDuration(sound.duration()) // Set duration when the song loads
		}
	}

	const handleSeek = (event) => {
		const newTime = (event.target.value / 100) * duration
		const sound = playerRef.current?.howler
		if (sound) {
			sound.seek(newTime) // Seek to the new time based on progress bar
			setProgress(newTime) // Update progress manually after seeking
		}
	}

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
				<span className='text-sm font-medium'>{formatTime(progress)}</span>
				<input
					type='range'
					className='w-full accent-light'
					min={0}
					max={100} // Placeholder for now, you can adjust max based on duration
					value={(progress / duration) * 100 || 0} // Set progress bar value
					onChange={handleSeek}
				/>
				<span className='text-sm font-medium'>{formatTime(duration)}</span>
			</div>
			<ReactHowler
				ref={playerRef}
				src={getSongUrl(currentSong.url)}
				playing={isPlaying}
				onEnd={() => setIsPlaying(false)}
				onLoad={handleLoad} // When audio loads, get the duration
			/>

			<div className='w-full flex justify-between items-center'>
				<button className='bg-none'>
					<RepeatIcon />
				</button>
				<button className='bg-none' onClick={handlePreviousSong}>
					<SkipBackIcon />
				</button>
				<button
					className='bg-dark-red-light p-2 rounded-lg'
					onClick={handlePlayPause}
				>
					{!isPlaying ? <PlayIcon /> : <PauseIcon />}
				</button>
				<button className='bg-none' onClick={handleNextSong}>
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
