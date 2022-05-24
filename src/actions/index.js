export const NEW_USER = 'NEW_USER';
export const GET_ITEM = 'GET_ITEM';

export const actionNewUser = (user) => ({
  type: NEW_USER,
  payload: {
    email: user,
  },
});

export const actionCurrencies = (currencies) => ({
  type: GET_ITEM,
  payload: {
    currencies: Object.keys(currencies).filter((e) => e !== 'USDT'),
  },
});

export const fetchCurrencies = () => (
  async (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(actionCurrencies(currencies)))
  )
);
