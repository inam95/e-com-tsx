import { combineReducers } from "redux";
import { userReducer, InitStateUser } from "./user/user.reducer";
import { initStateCart, cartReducer } from "./cart/cart.reducer";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface StoreState {
  user: InitStateUser;
  cart: initStateCart;
}

const persistConfig: PersistConfig<StoreState> = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const reducers = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, reducers);
