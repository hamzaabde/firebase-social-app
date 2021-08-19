import { useState, useEffect } from 'react'

// firebase
import { db } from '@firebase/config'

// router
import { useRouteMatch } from 'react-router-dom'

export default () => {
	const [user, setUser] = useState()
	const [error, setError] = useState(null)

	const { params } = useRouteMatch()

	console.log(params.uid)

	useEffect(() => {
		db()
			.collection('users')
			.doc(params.uid)
			.get()
			.then(doc => {
				if (doc.exists) {
					setUser(doc.data())
				} else {
					setUser({ username: 'anonymous user' })
				}
			})
			.catch(error => {
				setError(error.message)
			})
	}, [])

	return { user, error }
}
