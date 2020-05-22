import axios from "Axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
