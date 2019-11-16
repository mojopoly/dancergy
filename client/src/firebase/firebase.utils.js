import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCvBtrhIffGtqvRTojDlcD_mdYx910cvkk",
  authDomain: "dancergy-db.firebaseapp.com",
  databaseURL: "https://dancergy-db.firebaseio.com",
  projectId: "dancergy-db",
  storageBucket: "dancergy-db.appspot.com",
  messagingSenderId: "216137126122",
  appId: "1:216137126122:web:021a4ca5c2eaa0f27c0793",
  measurementId: "G-Q0ESV821Y2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);



export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //documentRef
  const snapshot = await userRef.get(); 
  if(!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log(error.message);
    }
  }
  return userRef;
}

export default firebase; 