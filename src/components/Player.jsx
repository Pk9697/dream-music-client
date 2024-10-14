import { useMemo, useRef, useState } from 'react'
import ReactHowler from 'react-howler'
// import audio from '../assets/audio.mp3'
import albumCover from '../assets/albumCover.png'
import song1 from '../assets/songs/song1.mp3'
import song2 from '../assets/songs/song2.mp3'
import song3 from '../assets/songs/song3.mp3'
import song4 from '../assets/songs/song3.mp3'
import song5 from '../assets/songs/song3.mp3'
import {
	PauseIcon,
	PlayIcon,
	RepeatIcon,
	ShuffleIcon,
	SkipBackIcon,
	SkipForwardIcon,
} from 'lucide-react'

const songsList = [song1, song2, song3, song4, song5]

const Player = ({ currentSong }) => {
	const [isPlaying, setIsPlaying] = useState(true) // Default to play when song starts
	const [seek, setSeek] = useState(0)
	const playerRef = useRef(null)
	const songSrc = useMemo(
		() => songsList[currentSong.id - 1],
		[currentSong]
	)

	const handlePlayPause = () => {
		setIsPlaying((prev) => !prev)
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
				<span className='text-sm font-medium'>1:57</span>
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

			<ReactHowler
				ref={playerRef}
				src={songSrc}
				playing={isPlaying}
				onEnd={() => setIsPlaying(false)}
				onLoad={() => console.log('Song loaded')}
				onSeek={() => console.log('Song seeked')}
			/>

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
