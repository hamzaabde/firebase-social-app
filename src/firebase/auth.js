import { auth, db, bucket } from './config'

export const login = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password)
}

export const signup = (email, password, username, image) => {
    return new Promise((resolve, reject) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // upload profile
                const profileRef = bucket()
                    .ref()
                    .child(user.uid)
                    .child('profile-picture')
                    .child(image.name)

                let downloadLink = '#'

                const uploadTask = profileRef.put(image)
                uploadTask.on(
                    'state_changed',
                    console.log,
                    e => {
                        const userDoc = db().collection('users').doc(user.uid)
                        userDoc.set({ username, email, profileImage: '#' })
                        reject('could not upload image')
                    },
                    () => {
                        uploadTask.snapshot.ref
                            .getDownloadURL()
                            .then(downloadURL => {
                                // put into database
                                const userDoc = db()
                                    .collection('users')
                                    .doc(user.uid)
                                userDoc.set({
                                    username,
                                    email,
                                    profileImage: downloadURL,
                                })

                                resolve('success')
                            })
                    }
                )
            })
            .catch(reject)
    })
}

export const signout = () => {
    auth().signOut()
}
