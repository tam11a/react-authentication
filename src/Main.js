import React from "react";
import { authContext } from "./AuthContext";
import Login from "./Login";

const Main = () => {
  const authCntxt = React.useContext(authContext);

  return (
    <div>
      {authCntxt.isLoggedIn ? (
        <>
          <p>{authCntxt.userInfo?.userName}</p>
          <button onClick={authCntxt.logout}>Logout</button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Main;
