import { IAction } from "../../interfaces/actions";

const initialState = {
  loading: false,
  posts: null,
};

export const postReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, loading: false, posts: action.payload };

    default:
      return state;
  }
};
