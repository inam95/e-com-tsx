import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDwongXK0oWFij0tt4me2LYs4uJdFHwpf0",
  authDomain: "e-com-tsx.firebaseapp.com",
  databaseURL: "https://e-com-tsx.firebaseio.com",
  projectId: "e-com-tsx",
  storageBucket: "e-com-tsx.appspot.com",
  messagingSenderId: "721929786144",
  appId: "1:721929786144:web:6338bce852da5dad4ffd45",
  measurementId: "G-FQERT964E1"
};

export const createUserPropfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
