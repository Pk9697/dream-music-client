import music from '../assets/music.png'

const SongList = ({ songs = [], currentSongId = 1 }) => (
	<div className='bg-primary-red-200'>
		<div className='flex justify-between items-center px-4 md:px-12'>
			<h2 className='text-2xl font-semibold mb-4'>Popular</h2>
			<a href='#' className='text-lg font-semibold text-light-gray'>
				See all
			</a>
		</div>
		<table className='w-full'>
			<thead>
				<tr className='text-left text-light-gray'>
					<th className='p-2 pl-4 md:pl-12'>#</th>
					<th className='p-2'>Title</th>
					<th className='p-2'>Playing</th>
					<th className='p-2'>Time</th>
					<th className='p-2 pr-4 md:pr-12'>Album</th>
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
					>
						<td className='p-2 pl-4 md:pl-12'>
							{currentSongId === song.id ? (
								<div className='size-4'>
									<img src={music} alt='music' className='object-left' />
								</div>
							) : (
								index + 1
							)}
						</td>
						<td className='p-2'>{song.title}</td>
						<td className='p-2'>{song.playing}</td>
						<td className='p-2'>{song.time}</td>
						<td className='p-2 pr-4 md:pr-12'>{song.album}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
)

export default SongList
