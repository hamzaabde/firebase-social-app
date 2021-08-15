export const getSrcFromFile = file => {
	const objectURL = window.URL.createObjectURL(file)
	return objectURL
}
