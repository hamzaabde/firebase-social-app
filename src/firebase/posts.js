import { db } from '@firebase/config'
import { bucket } from '@firebase/config'

export const uploadPost = (postBody, postImage, author) => {
	// doc ref
	const docRef = db().collection('posts').doc()

	// img ref
	const imageRef = bucket().ref().child('posts').child(docRef.id)

	// img bucket ref
	const uploadTask = imageRef.put(postImage)

	// upload post image
	return new Promise((resolve, reject) => {
		uploadTask.on(
			'state_changed',
			snapshot => {
				console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
			},
			reject,
			() => {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
					// add to db
					resolve(
						docRef.set({
							author: author.uid,
							authorName: author.username,
							authorImage: author.profileImage,
							body: postBody,
							image: downloadURL,
						})
					)
				})
			}
		)
	})
}

export const getAllPosts = () => {
	const collectionsRef = db().collection('posts')

	return new Promise((resolve, reject) => {
		collectionsRef
			.get()
			.then(docs => {
				const posts = []
				docs.forEach(doc => {
					posts.push({ ...doc.data(), postID: doc.id })
				})

				resolve(posts)
			})
			.catch(reject)
	})
}
