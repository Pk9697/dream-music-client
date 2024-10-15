import SongItem from './SongItem'

const SongList = ({
	songs = [],
	currentSongId = 1,
	onSongSelect,
	moveSong,
}) => (
	<div className=''>
		<div className='flex justify-between items-center px-4 md:px-12'>
			<h2 className='text-2xl font-semibold mb-4'>Popular</h2>
			<a href='#' className='text-lg font-semibold text-light-gray'>
				See all
			</a>
		</div>
		<table className='w-full'>
			<thead>
				<tr className='text-left text-light-gray'>
					<th className='p-3 pl-4 md:pl-12'>#</th>
					<th className='p-3'>Title</th>
					<th className='p-3 hidden sm:table-cell'>Playing</th>
					<th className='p-3 hidden sm:table-cell'>Time</th>
					<th className='p-3 pr-4 md:pr-12 hidden sm:table-cell'>Album</th>
				</tr>
			</thead>
			<tbody>
				{songs.map((song, index) => (
					<SongItem
						key={song.id}
						index={index}
						song={song}
						onSongSelect={onSongSelect}
						currentSongId={currentSongId}
						moveSong={moveSong}
					/>
				))}
			</tbody>
		</table>
	</div>
)

export default SongList
