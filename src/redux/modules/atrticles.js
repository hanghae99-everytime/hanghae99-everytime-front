import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//actions
const TOTAL_ARTICLES_COUNT = "TOTAL_ARTICLES_COUNT";

//action creators
const totalArticlesCount = createAction(TOTAL_ARTICLES_COUNT, (totalArticlesCount) => (totalArticlesCount));

//initialState
const initialState = {
  totalArticlesCount: 0
};

//middleware actions

const getTotalArticles = ()=>{
  return function (dispatch, getState, { history }) {
    axios
      .get()
  }
}

export default handleActions(
  {
    [TOTAL_ARTICLES_COUNT]: (state, action) => produce(state, (draft) => {
      draft.totalArticlesCount = action.payload.totalArticlesCount
    }),
  },
  initialState
);

//action creator export
const actionCreators = {
  TOTAL_ARTICLES_COUNT,
};

export { actionCreators };
