import { useState, useEffect } from 'react'

import { db, auth } from '@firebase/config'

export default () => {
	const [user, setUser] = useState()
	const [error, setError] = useState(null)

	useEffect(() => {
		const unsubscribe = auth().onAuthStateChanged(user => {
			if (user) {
				setError(null)
				db()
					.collection('users')
					.doc(user.uid)
					.get()
					.then(doc => {
						if (doc.exists) {
							const userData = doc.data()
							setUser({
								...user,
								...userData,
							})
						}
					})
					.catch(error => {
						setError(error.message)
					})
			} else {
				setUser(null)
			}
		})

		return unsubscribe
	}, [])

	return { user, error }
}
