import {SetCurrentUserAction} from '../user/user.action';
import {ToggleCartAction} from '../cart/cart.action';

export type UserActionTypes = SetCurrentUserAction;
export type CartActionTypes = ToggleCartAction;

export type AppActions = UserActionTypes | CartActionTypes;
