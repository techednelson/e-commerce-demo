import {FirebaseUser} from '../types/FirebaseUser';
import {SET_CURRENT_USER, UserActionTypes} from '../types/actions';

const initialState: FirebaseUser = {
    currentUser: null
};

const userReducer = (state = initialState, action: UserActionTypes): any => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...state, currentUser: action.payload};
            default:
            return state;
    }
};

export default userReducer;

