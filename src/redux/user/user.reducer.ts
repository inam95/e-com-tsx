import { UserAuthModel } from "../../models/Auth";

import { ActionTypes, SetCurrentUserAction } from "./user.types";

export interface InitState {
  currentUser?: UserAuthModel | null;
}

export const userReducer = (
  state: InitState = {},
  action: SetCurrentUserAction
) => {
  switch (action.type) {
    case ActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
