import { CartActionTypes } from '../types/actions';
import { Item } from '../../common/interfaces';

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

export interface ToggleCartAction {
   type: typeof TOGGLE_CART_HIDDEN;
}

export const toggleCartHidden = (): CartActionTypes => ({
   type: TOGGLE_CART_HIDDEN
});

export const ADD_ITEM = 'ADD_ITEM';

export interface AddItem {
   type: typeof ADD_ITEM;
   payload: Item;
}

export const addItem = (item: Item): CartActionTypes => ({
   type: ADD_ITEM,
   payload: item
});
