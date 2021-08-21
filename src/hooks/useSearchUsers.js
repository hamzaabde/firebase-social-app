import { useState, useEffect } from 'react'

// firebase
import { getAllUsers } from '@firebase/users'

// hooks
import useCurrentUser from '@hooks/useCurrentUser'

// helpers
import matchSearch from '@helpers/matchSearch'

// router
import { useLocation } from 'react-router-dom'

export default () => {
	const [users, setUsers] = useState()
	const [error, setError] = useState(null)

	const { search } = useLocation()

	const searchTerm = search.match(/(?<=\?search\=).+/)[0].replaceAll('+', ' ')

	console.log(searchTerm)

	useEffect(() => {
		getAllUsers()
			.then(users => {
				const matchedUsers = users.filter(({ username }) =>
					matchSearch(username, searchTerm)
				)

				// console.log(users)

				setUsers(matchedUsers)
			})
			.catch(setError)
	}, [])

	return { users, error }
}
