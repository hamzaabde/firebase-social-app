import { db } from '@firebase/config'

export const getAllUsers = () => {
	return new Promise((resolve, reject) => {
		db()
			.collection('users')
			.get()
			.then(docs => {
				const users = []

				docs.forEach(doc => {
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
