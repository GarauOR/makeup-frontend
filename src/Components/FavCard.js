import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Delete from "./Delete";
import ModalUpdate from "./ModalUpdate";

function FavCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem", height: "36rem" }} key={"i" + props.i} className="card-shadow">
        <Card.Img variant="top" src={props.item.api_featured_image} />
        <Card.Body className="card-spacing">
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.brand}</Card.Text>
          <div className="fav-button-spacer">
            <Button
              variant="outline-dark"
              onClick={handleShow}
              className="fav-card-button"
            >
              Update
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => Delete(props)}
              className="fav-card-button"
            >
              Delete
            </Button>
            <Button
              variant="outline-dark"
              className="fav-card-button"
              href={props.item.product_link}
              target="_blank"
              rel="noreferrer noopener"
            >
              Shop
            </Button>
          </div>
        </Card.Body>
      </Card>

      <ModalUpdate
        item={props.item}
        show={show}
        handleClose={handleClose}
        setProdList={props.setProdList}
        username={props.username}
        serverURL={props.serverURL}
      />
    </div>
  );
}

export default FavCard;
