import { ItemModel } from "../../models/ShopPage";

export enum ActionTypes {
  toggleCartHidden = "TOGGLE_CART_HIDDEN",
  addItem = "ADD_ITEM"
}

export interface ToggleCartHiddenAction {
  type: ActionTypes.toggleCartHidden;
  // paylaod: boolean;
}

export interface AddItemAction {
  type: ActionTypes.addItem;
  payload: ItemModel;
}

export type Action = ToggleCartHiddenAction | AddItemAction;
