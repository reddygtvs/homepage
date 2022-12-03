import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import phonebook from "./images/phonebook.png";

const CardReact = () => {
  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={phonebook} />
      <Card.Body>
        <Card.Title>Phonebook</Card.Title>
        <Card.Text>
          PhoneBook webapp used to store and modify records, using a self
          created api, react and mongoDB.
        </Card.Text>
        <Button
          variant="primary"
          href="https://phonebook.tusharreddy.com"
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
