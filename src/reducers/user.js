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

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION':
    return { state: action.state };
  default:
    return state;
  }
}

export default userReducer;
