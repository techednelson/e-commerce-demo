import {FirebaseUser} from '../types/FirebaseUser';
import {AppActions, SET_CURRENT_USER} from '../types/actions';

export const setCurrentUser = (user: FirebaseUser): AppActions => ({
    type: SET_CURRENT_USER,
    payload: user
});
