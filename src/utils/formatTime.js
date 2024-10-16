// Utility to format time in mm:ss
const formatTime = (time) => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0')
	return `${minutes}:${seconds}`
}

export { formatTime }
