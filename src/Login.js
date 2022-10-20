import React from "react";
import { useForm } from "react-hook-form";
import { authContext } from "./AuthContext";
import { useLogin } from "./useQueries";

const inputStyle = {
  fontSize: "1rem",
  padding: "10px",
};

const Login = () => {
  const authCntxt = React.useContext(authContext);

  const { mutateAsync: postLogin } = useLogin();

  const { register, handleSubmit } = useForm();

  const loginFunc = async (data) => {
    const res = await postLogin(data);
    authCntxt.setToken(res.data?.token);
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
        onSubmit={handleSubmit(loginFunc)}
      >
        <input
          type="text"
          placeholder="Phone"
          {...register("phone")}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Password"
          {...register("password")}
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            ...inputStyle,
            background: "#111",
            color: "#fff",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};;;;

export default Login;
