import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import reducers from "./root-reducer";

const middlewares = [logger];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
