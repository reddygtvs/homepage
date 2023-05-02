import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardReact = ({ title, text, href, img }) => {
  const handleCardClick = () => {
    window.open(href, "_blank");
  };
  return (
    <Card
      onClick={handleCardClick}
      border="secondary"
      className="card"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardReact;
