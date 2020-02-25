import {AppActions} from '../types/actions';

export interface ToggleCartAction {
   type: typeof TOGGLE_CART_HIDDEN;
}

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

export const toggleCartHidden = (): AppActions => ({
   type: TOGGLE_CART_HIDDEN
});
