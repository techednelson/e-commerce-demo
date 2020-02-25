import { CartActionTypes } from '../types/actions';
import { Cart } from '../types/Cart';
import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cart.action';
import { AppState } from '../root-reducer';

const initialState: Cart = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = initialState, action: CartActionTypes): AppState => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {...state, hidden: !state.hidden };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        default:
            return state;
    }
};

export default cartReducer;
