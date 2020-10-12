import { Dispatch } from "redux";
import api from "../../pages/api/api";

export const getPosts = (setState) => async (dispatch: Dispatch) => {
  const { status, data } = await api.getPosts();
  if (status >= 200 && status < 300) {
    dispatch({ type: "GET_POSTS", payload: data });
    setState(data)
  }
};
