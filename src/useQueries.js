import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "./instance";

const login = (data) => {
  return instance.post("auth/login", data);
};

export const useLogin = () => {
  return useMutation(login);
};

const validate = () => {
  return instance.get("auth/validate");
};

export const useValidate = (enabled) => {
  return useQuery(["do-validate"], validate, {
    enabled: enabled,
    retry: 0,
    select: (data) => data?.data?.data || undefined,
  });
};
