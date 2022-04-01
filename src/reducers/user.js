// Esse reducer será responsável por tratar as informações da pessoa usuária
//  Initial State
// {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: []
//   }
// }

import { GET_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};
// console.log("🚀 ~ file: user.js ~ line 20 ~ INITIAL_STATE", INITIAL_STATE);

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
