import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = (props) => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <a href="#" onClick={() => logout({ returnTo: window.location.origin })} className={props.className}>
        Log Out
      </a>
    )
  );
};

export default Logout;
