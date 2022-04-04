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
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
