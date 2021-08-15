import { useState, useEffect } from 'react'

import { db, auth } from '@firebase/config'

export default () => {
	const [user, setUser] = useState()

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
						} else {
							const userData = {
								username: 'anonymous user',
							}
						}
					})
					.catch(error => {
						console.log('Error getting document:', error)
					})
			} else {
				setUser(null)
			}
		})

		return unsubscribe
	}, [])

	return user
}
