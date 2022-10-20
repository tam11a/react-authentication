import axios from "axios";

const baseURL = "http://api.rayosbd.com/api";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const updateInstanceAuthorization = () => {
  instance.interceptors.request.use((req) => {
    req.headers["Authorization"] = localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "";
    return req;
  });
};

export default instance;
