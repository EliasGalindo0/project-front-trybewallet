// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { UPDATE_CURRENCY_LIST, GET_EXPENSES, DELETE_EXPENSES } from '../actions';
import updateField from '../services/updateField';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  totalFields: 0,
};

export default function walletReducer(state = INICIAL_STATE, action) {
  const { type, payload } = action;
  let newTotalFields;
  if (type === GET_EXPENSES) {
    const newExpenses = [...state.expenses, payload];
    payload.id = state.expenses.length;
    newTotalFields = updateField(newExpenses);
  }
  if (type === DELETE_EXPENSES) {
    newTotalFields = updateField(payload);
  }
  switch (type) {
  case UPDATE_CURRENCY_LIST:
    return {
      ...state,
      currencies: payload,
    };
  case GET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, payload],
      totalFields: newTotalFields,
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: payload,
      totalFields: newTotalFields,
    };
  default:
    return state;
  }
}
