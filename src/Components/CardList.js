import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddFav from "./AddFav";
import { useAuth0 } from "@auth0/auth0-react";

function CardList(props) {
    const { isAuthenticated, user } = useAuth0();


  return (
    <div>
      <Card style={{ width: "18rem" }} key={props.key}>
        <Card.Img variant="top" src={props.item.image_link} />
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.brand}</Card.Text>
          {isAuthenticated && <Button variant="primary" onClick={() => AddFav(props, user)}>
            Add to Favourites
          </Button>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;
