import {FirebaseUser} from '../types/FirebaseUser';
import {AppActions} from '../types/actions';

export interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER;
    payload: FirebaseUser
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user: FirebaseUser): AppActions => ({
    type: SET_CURRENT_USER,
    payload: user
});
