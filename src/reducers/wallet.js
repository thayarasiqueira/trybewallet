import { GET_ITEM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_ITEM:
    return {
      ...state,
      currencies: [...action.payload.currencies],
    };
  default:
    return state;
  }
};

export default walletReducer;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
