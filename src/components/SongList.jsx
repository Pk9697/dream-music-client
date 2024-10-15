import music from '../assets/music.png'

const SongList = ({ songs = [], currentSongId = 1, onSongSelect }) => (
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
					<tr
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
				))}
			</tbody>
		</table>
	</div>
)

export default SongList
