import { useState, useEffect } from 'react'

import { db, auth } from '@firebase/config'

export default () => {
	const [user, setUser] = useState()
	const [error, setError] = useState(null)

	useEffect(() => {
		const unsubscribe = auth().onAuthStateChanged(user => {
			if (user) {
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
						console.log(error)
					})
			} else {
				setUser(null)
			}
		})

		return unsubscribe
	}, [])

	return user
}
