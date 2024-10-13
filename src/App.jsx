import Artist from './components/Artist'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='flex-grow p-4 md:p-6 md:px-12 bg-primary-red flex flex-col gap-8'>
				<Navbar />
				<Artist />
			</div>
		</div>
	)
}

export default App
