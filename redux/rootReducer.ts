import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import userReducer from "./user/user.reducer";

const combinedReducer = combineReducers({
  [userReducer.name]: userReducer.reducer,
});

const rootReducer: (
  state: any,
  action: any
) => ReturnType<typeof combinedReducer> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      user: action.payload.user,
    };

    return nextState;
  }

  return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof combineReducers>;

export default rootReducer;
