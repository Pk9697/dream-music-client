import search from '../assets/search.png'

const Navbar = () => {
	return (
		<div className='flex flex-col-reverse sm:flex-row gap-4 items-center justify-between'>
			<ul className='flex gap-4 w-full justify-center sm:justify-start'>
				<li>Music</li>
				<li>Podcast</li>
				<li>Live</li>
				<li>Radio</li>
			</ul>
			<div className='relative w-full'>
				<input type='search' className='bg-input-red px-4 py-2 pr-8 rounded-full w-full' />
				<div className='size-5 absolute top-2 right-2'>
					<img src={search} alt='search' />
				</div>
			</div>
		</div>
	)
}

export default Navbar
