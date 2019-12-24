import { combineReducers } from "redux";
import { userReducer, InitState } from "./user/user.reducer";

export interface StoreState {
  user: InitState;
}

export const reducers = combineReducers<StoreState>({
  user: userReducer
});
