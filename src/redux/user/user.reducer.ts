import { UserAuthModel } from "../../models/Auth";

import { ActionTypes, SetCurrentUserAction } from "./user.types";

export interface InitStateUser {
  currentUser?: UserAuthModel | null;
}

export const userReducer = (
  state: InitStateUser = {},
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
