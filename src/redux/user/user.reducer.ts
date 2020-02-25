import {FirebaseUser} from '../types/FirebaseUser';
import {UserActionTypes} from '../types/actions';
import {SET_CURRENT_USER} from './user.action';
import {AppState} from '../root-reducer';

const initialState: FirebaseUser = {
    currentUser: null
};

const userReducer = (state = initialState, action: UserActionTypes): AppState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...state, currentUser: action.payload};
        default:
            return state;
    }
};

export default userReducer;

