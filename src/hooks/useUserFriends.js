import { useState, useEffect } from 'react'

// firebase
import { getAllFriends } from '@firebase/friends'

// hooks
import useCurrentUser from '@hooks/useCurrentUser'

export default () => {
	const { user } = useCurrentUser()
	const [friends, setFriends] = useState()
	const [error, setError] = useState(null)

	useEffect(() => {
		if (user) getAllFriends(user).then(setFriends).catch(setError)
		else setError('no user found')
	}, [])

	return { friends, error }
}
