import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Update from "./Update";

function ModalUpdate(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const prod = {
      name: e.target.name.value,
      brand: e.target.brand.value,
      imageUrl: e.target.img.value,
    };
    Update(props.item._id, prod, props.setProdList);
    props.handleClose();
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your product:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Make-up Name</Form.Label>
              <Form.Control
                defaultValue={props.item.name}
                type="text"
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="brand">
              <Form.Label>Make-up Brand</Form.Label>
              <Form.Control
                defaultValue={props.item.brand}
                type="text"
                name="brand"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="img">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                defaultValue={props.item.imageUrl}
                type="text"
                name="img"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalUpdate;
