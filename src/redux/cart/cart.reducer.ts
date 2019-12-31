import { ActionTypes, Action } from "./cart.types";
import { ItemModel } from "../../models/ShopPage";

export interface initStateCart {
  hidden: boolean;
  cartItems: ItemModel[];
}

const INITIAL_STATE: initStateCart = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.toggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ActionTypes.addItem:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};
