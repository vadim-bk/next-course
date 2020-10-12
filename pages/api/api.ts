import axios from "axios";

export default {
  getPosts: () => axios.get(`${process.env.API_URL}/posts`),
};
