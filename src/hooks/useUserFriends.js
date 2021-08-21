import { useState, useEffect } from 'react'

// firebase
import { getAllFriends } from '@firebase/friends'

// hooks
import useCurrentUser from '@hooks/useCurrentUser'

export default () => {
	const [friends, setFriends] = useState()
	const [error, setError] = useState(null)

	useEffect(() => {
		getAllFriends().then(setFriends).catch(setError)
	}, [])

	return { friends, error }
}
