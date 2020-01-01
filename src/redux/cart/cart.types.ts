import { ItemModel } from "../../models/ShopPage";

export enum ActionTypes {
  toggleCartHidden = "TOGGLE_CART_HIDDEN",
  addItem = "ADD_ITEM",
  clearItemFromCart = "CLEAR_ITEM_FROM_CART"
}

export interface ToggleCartHiddenAction {
  type: ActionTypes.toggleCartHidden;
}

export interface AddItemAction {
  type: ActionTypes.addItem;
  payload: ItemModel;
}

export interface ClearItemFromCart {
  type: ActionTypes.clearItemFromCart;
  paylod: number;
}

export type Action = ToggleCartHiddenAction | AddItemAction | ClearItemFromCart;
