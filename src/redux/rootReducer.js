import { combineReducers } from "redux";
import peka from "./reducers/peka";

const appReducer = combineReducers({
  peka,
});

// reset the state of a redux store
const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STATE") {
    state = undefined;
    localStorage.clear();
  }
  return appReducer(state, action);
};

export default rootReducer;
