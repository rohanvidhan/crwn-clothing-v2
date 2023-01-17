import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ZT3PfO8-MxAMQYkezqgvMFwbzrtMfk0",
  authDomain: "crwn-clothing-db-c4b7a.firebaseapp.com",
  projectId: "crwn-clothing-db-c4b7a",
  storageBucket: "crwn-clothing-db-c4b7a.appspot.com",
  messagingSenderId: "305579239001",
  appId: "1:305579239001:web:2d6f1e1f7fa6df76927348",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);  

  const userSnapShot = await getDoc(userDocRef);
  
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt =  new Date();
    try{
        await setDoc(userDocRef,{
            displayName,email,createdAt
        })
    }catch(err){
        console.log("Error creating user", err.message);
    }
  }
  return userDocRef;
};
