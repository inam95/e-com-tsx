import {
  ActionTypes,
  ToggleCartHiddenAction,
  AddItemAction,
  ClearItemFromCart
} from "./cart.types";
import { ItemModel } from "../../models/ShopPage";

export const toggleCartHidden = (): ToggleCartHiddenAction => ({
  type: ActionTypes.toggleCartHidden
});

export const addItem = (item: ItemModel): AddItemAction => ({
  type: ActionTypes.addItem,
  payload: item
});

export const clearItemFromCart = (item: ItemModel): ClearItemFromCart => ({
  type: ActionTypes.clearItemFromCart,
  paylod: item.id
});
