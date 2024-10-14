import logo from '../assets/logo.png'
import home from '../assets/home.png'
import trends from '../assets/trends.png'
import library from '../assets/library.png'
import discover from '../assets/discover.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'

const Sidebar = () => (
	<div className='bg-dark-red text-light h-screen flex flex-col p-4 md:p-6 gap-12 sticky top-0 left-0'>
		<div className='flex items-center justify-center gap-4'>
			<div className='size-10'>
				<img src={logo} alt='logo' />
			</div>
			<h1 className='text-2xl font-bold hidden md:block'>
				<span className='text-logo-red'>Dream</span>Music
			</h1>
		</div>
		<div className='flex flex-col gap-2 flex-grow'>
			<h6 className='text-sm font-semibold text-light-gray hidden md:block'>MENU</h6>
			<ul className='space-y-4'>
				<li className='flex items-center justify-center md:justify-start gap-4'>
					<div className='size-6'>
						<img src={home} alt='home' />
					</div>
					<h4 className='text-lg font-medium hidden md:block'>Home</h4>
				</li>
				<li className='flex items-center justify-center md:justify-start gap-4'>
					<div className='size-6'>
						<img src={trends} alt='trends' />
					</div>
					<h4 className='text-lg font-medium hidden md:block'>Trends</h4>
				</li>
				<li className='flex items-center justify-center md:justify-start gap-4'>
					<div className='size-6'>
						<img src={library} alt='library' />
					</div>
					<h4 className='text-lg font-medium hidden md:block'>Library</h4>
				</li>
				<li className='flex items-center justify-center md:justify-start gap-4'>
					<div className='size-6'>
						<img src={discover} alt='discover' />
					</div>
					<h4 className='text-lg font-medium hidden md:block'>Discover</h4>
				</li>
			</ul>
		</div>
		<div className='flex flex-col gap-2'>
			<h6 className='text-sm font-semibold text-light-gray hidden md:block'>GENERAL</h6>
			<ul className='space-y-4'>
				<li className='flex items-center justify-center md:justify-start gap-4'>
					<div className='size-6'>
						<img src={settings} alt='settings' />
					</div>
					<h4 className='text-lg font-medium hidden md:block'>Settings</h4>
				</li>
				<li className='flex items-center justify-center md:justify-start gap-4'>
					<div className='size-6'>
						<img src={logout} alt='logout' />
					</div>
					<h4 className='text-lg font-medium hidden md:block'>Log Out</h4>
				</li>
			</ul>
		</div>
	</div>
)

export default Sidebar
