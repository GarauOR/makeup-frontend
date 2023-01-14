import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <a href="#" onClick={() => loginWithRedirect()} style={{color:"grey", margin:"auto 20px"}}>Log In</a>
    )
  );
};

export default Login;
