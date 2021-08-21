import { db } from '@firebase/config'
import { getCurrentUser } from '@firebase/auth'

export const addToFriends = friend => {
	const currentUserID = getCurrentUser().uid

	if (currentUserID) {
		const userFriends = db()
			.collection('users')
			.doc(currentUserID)
			.collection('friends')
			.doc(friend.uid)

		return new Promise((resolve, reject) => {
			userFriends
				.set(
					{
						username: friend.username,
						profileImage: friend.profileImage,
					},
					{ merge: true }
				)
				.then(resolve)
				.catch(reject)
		})
	}

	return new Error('please sign in first')
}

export const getAllFriends = () => {
	const currentUserID = getCurrentUser().uid

	if (currentUserID) {
		// current user friends ref
		const userFriends = db()
			.collection('users')
			.doc(currentUserID)
			.collection('friends')

		// get currents users friends collection
		return new Promise((resolve, reject) => {
			userFriends
				.get()
				.then(docs => {
					const friends = []
					docs.forEach(doc => {
						friends.push({
							...doc.data(),
							uid: doc.id,
						})
					})
					resolve(friends)
				})
				.catch(reject)
		})
	} else {
		return Promise.reject('please signin')
	}
}
