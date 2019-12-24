import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { reducers } from "./root-reducer";

const middlewares = [logger];

export const store = createStore(reducers, applyMiddleware(...middlewares));
