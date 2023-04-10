import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import burgermenu from "../Img/burgermenu.png";
import BurgerMenu from "./BurgerMenu";

function Header(props) {
  const { isAuthenticated } = useAuth0();
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const visible = () => {
    setIsVisible(true);
  };

  const invisible = () => {
    setIsVisible(false);
  };

  const handleVisibility = () => {

    if (!isVisible) {
      visible();
    }
    else {
      invisible();
    } 
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let tempArray = [];
    props.searchList.map((item) => {
      if (item.name.toLowerCase().search(searchInput.toLowerCase()) > -1) {
        tempArray.push(item);
      }
      return item;
    });
    props.setProdList(tempArray);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" id="logo">MUP</Navbar.Brand>
          <picture style={{position:"relative"}}>
          <img src={burgermenu} alt="burgermenu" id="burgermenu" onClick={handleVisibility}>
          </img>
          {isVisible && <BurgerMenu invisible={invisible} setFilterValue={props.setFilterValue} />}
          </picture>
          <Nav className="me-auto">
            <Nav.Link href="/" className="hide linkNav">Products</Nav.Link>
            {isAuthenticated && <Nav.Link href="/favourites" className="hide linkNav">My Favs</Nav.Link>}
            <Nav.Link href="/about" className="hide linkNav">About</Nav.Link>
          </Nav>
          <Form className="d-flex" id="search" onSubmit={submitHandler}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <Button type="submit" variant="outline-light" className="card-button" id="search-btn">
              Search
            </Button>
          </Form>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Filter"
            style={{ color: "white", margin: "0px 1% 0px 3%" }}
            className="hide nav-filter-hover"
          >
            <NavDropdown.Item
              onClick={() => {
                props.setFilterValue("lipstick");
              }}
            >
              Lipstick
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                props.setFilterValue("foundation");
              }}
            >
              Foundation
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                props.setFilterValue("eyeliner");
              }}
            >
              Eyeliner
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                props.setFilterValue("eyeshadow");
              }}
            >
              Eyeshadow
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                props.setFilterValue("");
              }}
            >
              Clear
            </NavDropdown.Item>
          </NavDropdown>

          <section className="hide nav-log">
            <Login />
            <Logout />
          </section>

          
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
