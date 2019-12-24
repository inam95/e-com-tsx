import { UserAuthModel } from "../../models/Auth";

export enum ActionTypes {
  setCurrentUser
}

export interface SetCurrentUserAction {
  type: ActionTypes.setCurrentUser;
  payload: UserAuthModel | null;
}
