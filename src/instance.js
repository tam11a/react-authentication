import axios from "axios";

const baseURL = "http://api.rayosbd.com/api";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
