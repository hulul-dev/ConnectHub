const firebase = require('./firebase');
require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');


const firebaseConfig = {
    apiKey: "AIzaSyDJAL_OFtypz1HNPnHVj6HOKRovO3rIgXI",
    authDomain: "connecthub-dbfcf.firebaseapp.com",
    projectId: "connecthub-dbfcf",
    storageBucket: "connecthub-dbfcf.appspot.com",
    messagingSenderId: "103927295916",
    appId: "1:103927295916:web:45cf2f29bf577118631409"
  };


  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


//   const firebaseapp = firebase.initializeApp(firebaseConfig);

// // Initialize Firestore, Auth, and Storage
// const db = firebaseapp.firestore();
// const auth = firebaseapp.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebaseapp.storage();
  
  // export {auth, provider};
  module.exports = { auth, provider, storage };
  export default db;

