import React from "react";

export const authContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(localStorage.getItem("token"));

  const setLoginToken = (tkn) => {
    localStorage.setItem("token", tkn);
    setToken(tkn);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken();
  };

  return (
    <authContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        setToken: setLoginToken,
        logout: logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
