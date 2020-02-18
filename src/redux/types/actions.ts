import {FirebaseUser} from './FirebaseUser';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER;
    payload: FirebaseUser
}

export type UserActionTypes = SetCurrentUserAction

export type AppActions = UserActionTypes;
