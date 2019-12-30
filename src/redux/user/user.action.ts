import { UserAuthModel } from "../../models/Auth";
import { ActionTypes } from "./user.types";

// export const setCurrentUser = (user: UserAuthModel | null) => {
//   return async (dispatch: Dispatch) => {
//     dispatch<SetCurrentUserAction>({
//       type: ActionTypes.setCurrentUser,
//       payload: user
//     });
//   };
// };

export const setCurrentUser = (user: UserAuthModel | null) => ({
  type: ActionTypes.setCurrentUser,
  payload: user
});
