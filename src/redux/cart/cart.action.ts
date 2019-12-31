import {
  ActionTypes,
  ToggleCartHiddenAction,
  AddItemAction
} from "./cart.types";
import { ItemModel } from "../../models/ShopPage";

export const toggleCartHidden = (): ToggleCartHiddenAction => ({
  type: ActionTypes.toggleCartHidden
});

export const addItem = (item: ItemModel): AddItemAction => ({
  type: ActionTypes.addItem,
  payload: item
});
