import firebase from 'firebase'

// こちらは、ご自身のFirebaseアプリの「ウェブアプリに Firebase を追加」の中の設定をコピーしてください

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAffdVdL1ULzGsIHb8fIQS9CrIqhZi28nY",
    authDomain: "fir-auth-9fe24.firebaseapp.com",
    databaseURL: "https://fir-auth-9fe24.firebaseio.com",
    projectId: "fir-auth-9fe24",
    storageBucket: "fir-auth-9fe24.appspot.com",
    messagingSenderId: "1097808199224"
  })
}

export default firebase