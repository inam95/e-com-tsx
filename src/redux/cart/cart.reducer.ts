import { ToggleCartHiddenAction, ActionTypes } from "./cart.types";

export interface initStateCart {
  hidden: boolean;
}

const INITIAL_STATE: initStateCart = {
  hidden: true
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: ToggleCartHiddenAction
) => {
  switch (action.type) {
    case ActionTypes.toggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
