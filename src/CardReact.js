import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import phonebook from "./images/phonebook.png";

const CardReact = ({ title, text, href }) => {
  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={phonebook} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          href="href"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take me there
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardReact;
