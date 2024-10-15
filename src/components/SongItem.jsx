import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import music from '../assets/music.png'
const ItemType = 'SONG'
const SongItem = ({ song, index, currentSongId, onSongSelect, moveSong }) => {
	const ref = useRef(null)
	// Hook for handling drag
	const [, drag] = useDrag({
		type: ItemType,
		item: { index },
	})

	// Hook for handling drop
	const [, drop] = useDrop({
		accept: ItemType,
		hover: (draggedItem) => {
			if (draggedItem.index !== index) {
				moveSong(draggedItem.index, index)
				draggedItem.index = index // Update dragged item index
			}
		},
	})

	// Combine drag and drop refs
	drag(drop(ref))

	return (
		<tr
			ref={ref}
			key={song.id}
			className={`hover:bg-highlight-red cursor-pointer ${
				currentSongId === song.id
					? 'bg-highlight-red border-l-4 border-border-highlight-red'
					: ''
			}`}
			onClick={() => onSongSelect(song.id)}
		>
			<td className='p-3 pl-4 md:pl-12'>
				{currentSongId === song.id ? (
					<div className='size-4'>
						<img src={music} alt='music' className='object-left' />
					</div>
				) : (
					index + 1
				)}
			</td>
			<td className='p-3'>{song.title}</td>
			<td className='p-3 hidden sm:table-cell'>{song.playing}</td>
			<td className='p-3 hidden sm:table-cell'>{song.time}</td>
			<td className='p-3 pr-4 md:pr-12 hidden sm:table-cell'>{song.album}</td>
		</tr>
	)
}

export default SongItem
