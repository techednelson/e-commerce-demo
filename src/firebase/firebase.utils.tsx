import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEDKhM_L3ZD3heQ38o4VGyqnNOprhfVOE", authDomain: "e-commerce-demo-db.firebaseapp.com",
    databaseURL: "https://e-commerce-demo-db.firebaseio.com",
    projectId: "e-commerce-demo-db",
    storageBucket: "e-commerce-demo-db.appspot.com",
    messagingSenderId: "974170869763",
    appId: "1:974170869763:web:4fbaccabda76edae583e36",
    measurementId: "G-H7EQWQKSDP"
};

export const createUserProfileDocument = async (userAuth: firebase.User, additionalData?: any) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
        
        return userRef;
    }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
