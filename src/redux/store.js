import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import api from "../api";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ api }))
);
