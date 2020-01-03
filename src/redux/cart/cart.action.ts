import {
  ActionTypes,
  ToggleCartHiddenAction,
  AddItemAction,
  ClearItemFromCartAction,
  RemoveItemAction
} from "./cart.types";
import { ItemModel } from "../../models/ShopPage";

export const toggleCartHidden = (): ToggleCartHiddenAction => ({
  type: ActionTypes.toggleCartHidden
});

export const addItem = (item: ItemModel): AddItemAction => ({
  type: ActionTypes.addItem,
  payload: item
});

export const clearItemFromCart = (id: number): ClearItemFromCartAction => ({
  type: ActionTypes.clearItemFromCart,
  paylod: id
});

export const removeItem = (item: ItemModel): RemoveItemAction => ({
  type: ActionTypes.removeItem,
  payload: item
});
