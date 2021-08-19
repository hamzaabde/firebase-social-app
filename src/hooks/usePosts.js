import { useState, useEffect } from 'react'

// firebase
import { getAllPosts } from '@firebase/posts'

export default () => {
	const [posts, setPosts] = useState()
	const [error, setError] = useState(null)

	useEffect(() => {
		getAllPosts().then(setPosts).catch(setError)
	}, [])

	return { posts, error }
}
