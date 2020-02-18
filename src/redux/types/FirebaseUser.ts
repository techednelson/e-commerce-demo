import firebase from '../../firebase/firebase.utils';

export interface FirebaseUser {
    currentUser: Nullable<firebase.User>
}
