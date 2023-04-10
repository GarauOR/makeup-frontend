import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = (props) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <a href="#" onClick={() => loginWithRedirect()} className={props.className}>Log In</a>
    )
  );
};

export default Login;
