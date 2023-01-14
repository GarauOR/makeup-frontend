import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <a href="#" onClick={() => logout({ returnTo: window.location.origin })} style={{color:"grey", margin:"auto 20px"}}>
        Log Out
      </a>
    )
  );
};

export default Logout;
