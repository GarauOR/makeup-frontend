import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Delete from "./Delete";
import ModalUpdate from "./ModalUpdate";

function CardComp(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem" }} key={props.key}>
        <Card.Img variant="top" src={props.item.imageUrl} />
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.brand}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Update
          </Button>
          <Button variant="primary" onClick={() => Delete(props)}>
            Delete
          </Button>
        </Card.Body>
      </Card>

      <ModalUpdate
        item={props.item}
        show={show}
        handleClose={handleClose}
        setProdList={props.setProdList}
      />
    </div>
  );
}

export default CardComp;
