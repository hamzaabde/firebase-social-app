import { useState, useEffect } from 'react'

export default () => {
	const [height, setHeight] = useState(innerHeight)

	useEffect(() => {
		const handler = () => {
			setHeight(innerHeight)
		}

		window.addEventListener('resize', handler)

		return () => window.removeEventListener('resize', handler)
	}, [])

	return height
}
