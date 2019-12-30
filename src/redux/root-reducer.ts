import { combineReducers } from "redux";
import { userReducer, InitStateUser } from "./user/user.reducer";
import { initStateCart, cartReducer } from "./cart/cart.reducer";

export interface StoreState {
  user: InitStateUser;
  cart: initStateCart;
}

export const reducers = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer
});
