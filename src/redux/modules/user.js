import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//actions
const LOG_OUT = "LOG_OUT";

//action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//initialState
const initialState = {};

//middleware actions

export default handleActions(
  {
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logOut,
};

export { actionCreators };
