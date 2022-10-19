import { useMutation } from "@tanstack/react-query";
import instance from "./instance";

const login = (data) => {
  return instance.post("auth/login", data);
};

export const useLogin = () => {
  return useMutation(login);
};
