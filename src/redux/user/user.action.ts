import {FirebaseUser} from '../types/FirebaseUser';
import { UserActionTypes } from '../types/actions';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER;
    payload: FirebaseUser
}

export const setCurrentUser = (user: FirebaseUser): UserActionTypes => ({
    type: SET_CURRENT_USER,
    payload: user
});
