import artist from '../assets/artist.png'
import verified from '../assets/verified.png'

const Artist = () => (
	<div className='p-4 md:p-6 md:px-12'>
		<div className='flex flex-col-reverse items-center sm:flex-row bg-dark-red rounded-3xl mt-8 sm:mt-16 sm:justify-between'>
			<div className='flex flex-col gap-1 p-4 sm:px-8 sm:py-16'>
				<div className='flex gap-2 items-center'>
					<div className='size-6'>
						<img src={verified} alt='verified' />
					</div>
					<h5 className='text-sm font-medium text-light-gray'>
						Verified Artist
					</h5>
				</div>
				<h1 className='text-4xl font-semibold mb-8'>Michael Jackson</h1>
				<p className='text-sm font-medium'>27,852,501 monthly listeners</p>
			</div>
			<div className='-mt-8 min-w-20 h-full sm:-mt-40 max-w-80'>
				<img src={artist} alt='Michael Jackson' />
			</div>
		</div>
	</div>
)

export default Artist
