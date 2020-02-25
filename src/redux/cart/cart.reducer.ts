import {CartActionTypes} from '../types/actions';
import {Cart} from '../types/Cart';
import {TOGGLE_CART_HIDDEN} from './cart.action';
import {AppState} from '../root-reducer';

const initialState: Cart = {
    hidden: true
};

const cartReducer = (state = initialState, action: CartActionTypes): AppState => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {...state, hidden: !state.hidden };
        default:
            return state;
    }
};

export default cartReducer;
