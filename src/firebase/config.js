import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const config = {
	apiKey: 'AIzaSyATO-Cp1VVmxSzeO2xM6un5-0eD5EFEjNY',
	authDomain: 'test-c9179.firebaseapp.com',
	projectId: 'test-c9179',
	storageBucket: 'test-c9179.appspot.com',
	messagingSenderId: '131377748525',
	appId: '1:131377748525:web:cea95e21e12f922eaf36a4',
}

firebase.initializeApp(config)

export const auth = firebase.auth
export const db = firebase.firestore
export const bucket = firebase.storage
