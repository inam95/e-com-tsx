import { createSelector } from "reselect";
import { StoreState } from "../root-reducer";

const selectUser = (state: StoreState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
