import { combineReducers } from "redux";
import { userReducer, InitStateUser } from "./user/user.reducer";
import { InitStateCart, cartReducer } from "./cart/cart.reducer";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  directoryReducer,
  InitStateDirectory
} from "./directory/directory.reducer";
import { InitStateShop, shopreducer } from "./shop/shop.reducer";

export interface StoreState {
  user: InitStateUser;
  cart: InitStateCart;
  directory: InitStateDirectory;
  shop: InitStateShop;
}

const persistConfig: PersistConfig<StoreState> = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const reducers = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopreducer
});

export default persistReducer(persistConfig, reducers);
