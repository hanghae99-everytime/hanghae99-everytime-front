import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//actions
const LOGIN = 'user/LOGIN' as const;
const LOGOUT = 'user/LOGOUT' as const;

//action creators
const logIn = createAction(LOGIN,(email:string, pw:string) => email);
const logOut = createAction(LOGOUT);

//actions type
type CounterState = {
  user: {[key:string]: string};
  is_login: boolean;
};

//initialState
const initialState: CounterState = {
  user: {
    email: "",
    pw: ""
  },
  is_login: false
};


//reducer
export default handleActions(
  {
    [LOGIN]:(state, action) =>produce(state,(draft)=>{
      draft.user = action.payload.user;
      draft.is_login = true;
      console.log("리듀서~", draft.user)
    })
  },
  initialState
);

const actionCreators = {
  logIn
};

export { actionCreators };