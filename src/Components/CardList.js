import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddFav from "./AddFav";
import { useAuth0 } from "@auth0/auth0-react";

function CardList(props) {
    const { isAuthenticated, user } = useAuth0();


  return (
    <div>
      <Card style={{ width: "18rem", height: "36rem"}} key={"j" + props.key} className="card-shadow">
        <Card.Img variant="top" src={props.item.api_featured_image} />
        <Card.Body className="card-spacing">
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.brand}</Card.Text>
          <div className="fav-button-spacer">
          {isAuthenticated && <Button variant="outline-dark" className="card-button" onClick={() => AddFav(props, user)}>
            Add to Favourites
          </Button>}
          {isAuthenticated && <Button variant="outline-dark" className="card-button" href={props.item.product_link} target="_blank" rel="noreferrer noopener">
            Shop
          </Button>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;
