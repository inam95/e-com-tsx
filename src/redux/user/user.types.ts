import { UserAuthModel } from "../../models/Auth";

export enum ActionTypes {
  setCurrentUser = "SET_CURRENT_USER"
}

export interface SetCurrentUserAction {
  type: ActionTypes.setCurrentUser;
  payload: UserAuthModel | null;
}
