export const UPDATE_TODOS = "UPDATE_TODOS";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const updateTodos = (payload) => ({
  type: UPDATE_TODOS,
  payload,
});

export const loaDing = () => ({
  type: LOADING,
});

export const erRor = (payload) => ({
  type: ERROR,
  payload,
});
