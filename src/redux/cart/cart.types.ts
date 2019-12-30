export enum ActionTypes {
  toggleCartHidden = "TOGGLE_CART_HIDDEN"
}

export interface ToggleCartHiddenAction {
  type: ActionTypes.toggleCartHidden;
  // paylaod: boolean;
}
