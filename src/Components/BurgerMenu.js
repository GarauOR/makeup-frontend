import React, { useEffect, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function BurgerMenu(props) {
  const ref = useRef();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        props.invisible();
      }
    };
    document.addEventListener("click", checkIfClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true);
    };
  }, [props.invisible]);

  return (
    <div id="burgerlist" ref={ref}>
      <a href="/" className="burger-item">
        Products
      </a>
      {isAuthenticated && <a href="/favourites" className="burger-item">
        My Favs
      </a>}
      <a href="/about" className="burger-item">
        About
      </a>
      <Login className="burger-item" />
      <Logout className="burger-item" />

      <Dropdown drop="end">
        <Dropdown.Toggle id="burger-filter" variant="outline-light">
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu variant="outline-light">
          <Dropdown.Item
            href="#/action-1"
            onClick={() => {
              props.setFilterValue("lipstick");
            }}
          >
            Lipstick
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => {
              props.setFilterValue("foundation");
            }}
          >
            Foundation
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-3"
            onClick={() => {
              props.setFilterValue("eyeliner");
            }}
          >
            Eyeliner
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-4"
            onClick={() => {
              props.setFilterValue("eyeshadow");
            }}
          >
            Eyeshadow
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-4"
            onClick={() => {
              props.setFilterValue("");
            }}
          >
            Clear
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
