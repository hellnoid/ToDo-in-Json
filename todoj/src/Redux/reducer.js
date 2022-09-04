import { ERROR, LOADING, UPDATE_TODOS } from "./action";
const instate = {
  loading: false,
  todos: [],
  error: false,
};
export const reducer = (state = instate, action) => {
  switch (action.type) {
    case UPDATE_TODOS:
      return {
        todos: [...action.payload],
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
