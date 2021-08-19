import { db } from '@firebase/config'

export const addToFriends = (user, friend) => {
	const userFriends = db()
		.collection('users')
		.doc(user.uid)
		.collection('friends')
		.doc(friend.uid)
	return new Promise((resolve, reject) => {
		if (user.uid !== friend.uid)
			userFriends
				.set({
					username: friend.username,
					profileImage: friend.profileImage,
				})
				.then(resolve)
				.catch(reject)
		else reject(new Error('same user'))
	})
}

export const getAllFriends = user => {
	const userFriends = db().collection('users').doc(user.uid).collection('friends')

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
}
