import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardReact = ({ title, text, href, img }) => {
  return (
    <Card border="secondary" className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          id="button"
          variant="primary"
          href={href}
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
