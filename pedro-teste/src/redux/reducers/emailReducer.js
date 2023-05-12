import { USER_EMAIL } from "../actions/actionTypes";

const INITIAL_STATE = {
  username: {
    email: '',
  }
};

const emailReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case USER_EMAIL:
    return {
      ...state,
      username: { email: action.payload }
    }
   default:
    return state;
 }
}

export default emailReducer;