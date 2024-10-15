const getImageUrl = (name) => {
	return new URL(`../assets/images/${name}`, import.meta.url).href
}
const getSongUrl = (name) => {
	return new URL(`../assets/songs/${name}`, import.meta.url).href
}

export { getImageUrl,getSongUrl }
