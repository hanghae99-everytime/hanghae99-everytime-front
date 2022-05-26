import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = "LOG_OUT";

//action creators
const logIn = createAction(LOG_IN, (user)=>({user}));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//initialState
const initialState = {
  user: {},
  is_login: false
};

//middleware actions
const logInDB = (email, pw) =>{
  return function (dispatch, getState, { history }){
    console.log('리덕스',email,pw)
    axios
    .post("/user/login", { email: email, pwd: pw })
    .then((res)=>{
      alert(res.data.msg);
      dispatch(logIn(email));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export default handleActions(
  {
    [LOG_IN] : (state, action) => produce(state, (draft)=>{
      draft.user = action.payload.user;
      draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logInDB,
  logOut,
};

export { actionCreators };
