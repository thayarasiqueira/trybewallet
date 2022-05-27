export const NEW_USER = 'NEW_USER';
export const GET_ITEM = 'GET_ITEM';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const newUserAction = (user) => ({
  type: NEW_USER,
  payload: {
    email: user,
  },
});

export const currenciesAction = (currencies) => ({
  type: GET_ITEM,
  currencies,

});

export const addExpenseAction = (expense, currencies) => ({
  type: ADD_EXPENSE,
  payload: {
    ...expense,
    ...currencies,
  },
});

export const saveExpenses = (expense, currencies) => ({
  type: SAVE_EXPENSES,
  expense,
  currencies,
});

export function fetchExpenses(expense) {
  return async (dispatch) => {
    try {
      const result = await fetch('https://economia.awesomeapi.com.br/json/all');
      const currencies = await result.json();
      dispatch(saveExpenses(expense, currencies));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchCurrencies() {
  return async (dispatch) => {
    try {
      const result = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await result.json();
      const currencies = Object.keys(data)
        .filter((sigla) => sigla !== 'USDT');
      dispatch(currenciesAction(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}
