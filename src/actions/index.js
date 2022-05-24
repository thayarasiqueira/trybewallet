export const NEW_USER = 'NEW_USER';
export const NEW_ITEM = 'NEW_ITEM';

export const actionNewUser = (user) => ({
  type: NEW_USER,
  payload: {
    email: user,
  },
});

export const actionNewItem = () => ({
  type: NEW_ITEM,
  payload: {},
});
