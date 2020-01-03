import { ItemModel } from "../../models/ShopPage";

export enum ActionTypes {
  toggleCartHidden = "TOGGLE_CART_HIDDEN",
  addItem = "ADD_ITEM",
  clearItemFromCart = "CLEAR_ITEM_FROM_CART",
  removeItem = "REMOVE_ITEM"
}

export interface ToggleCartHiddenAction {
  type: ActionTypes.toggleCartHidden;
}

export interface AddItemAction {
  type: ActionTypes.addItem;
  payload: ItemModel;
}

export interface ClearItemFromCartAction {
  type: ActionTypes.clearItemFromCart;
  paylod: number;
}

export interface RemoveItemAction {
  type: ActionTypes.removeItem;
  payload: ItemModel;
}

export type Action =
  | ToggleCartHiddenAction
  | AddItemAction
  | ClearItemFromCartAction
  | RemoveItemAction;
