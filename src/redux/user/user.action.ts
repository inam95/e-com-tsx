import { UserAuthModel } from "../../models/Auth";
import { ActionTypes, SetCurrentUserAction } from "./types";
import { Dispatch } from "redux";

export const setCurrentUser = (user: UserAuthModel | null) => {
  return async (dispatch: Dispatch) => {
    dispatch<SetCurrentUserAction>({
      type: ActionTypes.setCurrentUser,
      payload: user
    });
  };
};
