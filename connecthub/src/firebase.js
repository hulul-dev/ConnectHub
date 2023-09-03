import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
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

  const signInWithGooglePopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful sign-in
      const user = result.user;
      console.log(`User signed in: ${user.displayName}`);
      return user.displayName; // Return user data
    } catch (error) {
      // Handle errors
      console.error(`Sign-in error: ${error.message}`);
      throw error; // Throw the error for handling in the calling function
    }
  };
  
  export { auth, provider, storage, db, signInWithGooglePopup };// Export all Firebase services
