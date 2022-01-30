import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjUqE0sR8d27nnvN5xCu1dkiKT_DCTFgY",
    authDomain: "clone-60bce.firebaseapp.com",
    projectId: "clone-60bce",
    storageBucket: "clone-60bce.appspot.com",
    messagingSenderId: "531678036613",
    appId: "1:531678036613:web:0f89e958766180e80d5fec",
    measurementId: "G-0HJWK3SJWS"
});

 // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// comment
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
//   authDomain: "todo-app-e3cf0.firebaseapp.com",
//   projectId: "todo-app-e3cf0",
//   storageBucket: "todo-app-e3cf0.appspot.com",
//   messagingSenderId: "940016886081",
//   appId: "1:940016886081:web:91686613f16b1b1f8001c0",
//   measurementId: "G-JHPC7TP12K"
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };