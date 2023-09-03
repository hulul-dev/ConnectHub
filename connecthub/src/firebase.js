import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDJAL_OFtypz1HNPnHVj6HOKRovO3rIgXI",
    authDomain: "connecthub-dbfcf.firebaseapp.com",
    projectId: "connecthub-dbfcf",
    storageBucket: "connecthub-dbfcf.appspot.com",
    messagingSenderId: "103927295916",
    appId: "1:103927295916:web:45cf2f29bf577118631409"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  
  export { auth, provider, storage, db };// Export all Firebase services
