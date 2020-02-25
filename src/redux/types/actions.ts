import {SetCurrentUserAction} from '../user/user.action';
import { AddItem, ToggleCartAction } from '../cart/cart.action';

export type UserActionTypes = SetCurrentUserAction;
export type CartActionTypes = ToggleCartAction | AddItem;

export type AppActions = UserActionTypes | CartActionTypes;
