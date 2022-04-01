// ---ACTIONS---
// Adicionar, remover e editar um gasto;
// Visualizar uma tabela com seus gastos;
// Visualizar o total de gastos convertidos para uma moeda de escolha;
// chaves "user" e "wallet" no seu estado global

import fetchCurrency from '../services/API';

export const GET_USER = 'GET_USER';
export const UPDATE_CURRENCY_LIST = 'UPDATE_CURRENCY_LIST';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const userReducer = (email) => ({
  type: GET_USER,
  payload: email,
});

export const loginThunk = (email) => (dispatch) => {
  dispatch(userReducer(email));
};

export const newCurrencyList = (currencyList) => ({
  type: UPDATE_CURRENCY_LIST,
  payload: currencyList,
});

export const updateCurrencys = () => async (dispatch) => {
  const currencyList = await fetchCurrency();
  delete currencyList.USDT;
  const currencyListWithoutUSDT = Object.keys(currencyList);
  dispatch(newCurrencyList(currencyListWithoutUSDT));
};

export const getExpensesThunk = (expenses) => async (dispatch) => {
  const currency = await fetchCurrency();
  const {
    fieldValue,
    fieldDescription,
    fieldCurrency,
    paymentMethod,
    fieldCategory } = expenses;
  dispatch({
    type: GET_EXPENSES,
    payload: {
      value: fieldValue,
      description: fieldDescription,
      currency: fieldCurrency,
      method: paymentMethod,
      tag: fieldCategory,
      exchangeRates: { ...currency },
    },
  });
};

export const deleteExpense = (identification, expenses) => (dispatch) => {
  const newExpenses = expenses.filter((item) => item.id !== +identification);
  newExpenses.forEach((item, index) => { item.id = index; });
  dispatch({ type: DELETE_EXPENSES, payload: newExpenses });
};
