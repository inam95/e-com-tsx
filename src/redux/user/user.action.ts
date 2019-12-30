import { UserAuthModel } from "../../models/Auth";
import { ActionTypes } from "./user.types";

export const setCurrentUser = (user: UserAuthModel | null) => ({
  type: ActionTypes.setCurrentUser,
  payload: user
});
