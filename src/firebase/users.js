import { db } from '@fb/config'
import { getCurrentUser } from '@fb/auth'

export const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		db()
			.collection('users')
			.get()
			.then(docs => {
				const users = []

				docs.forEach(doc => {
					const currentUID = getCurrentUser().uid

					if (doc.id !== currentUID)
						users.push({
							...doc.data(),
							uid: doc.id,
						})
				})

				// console.log(users)

				resolve(users)
			})
			.catch(reject)
	})
}
