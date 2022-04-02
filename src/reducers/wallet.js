// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_EXPENSES } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  totalField: 0,
};

export default function walletReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case GET_EXPENSES:
    return { ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}
