import Card from "react-bootstrap/Card";

const CardReact = ({ title, text, href, img }) => {
  const handleCardClick = () => {
    window.open(href, "_blank");
  };
  return (
    <Card
      id="card"
      onClick={handleCardClick}
      border="light"
      className="card"
      style={{ width: "18rem", color: "purple", backgroundColor: "#f2f2f2" }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title id="cardTitle" style={{ color: "purple" }}>
          {title}
        </Card.Title>

        <Card.Text style={{ textAlign: "center" }}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardReact;
