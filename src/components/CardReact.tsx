import React from "react";
import Card from "react-bootstrap/Card";

interface CardReactProps {
  title: string;
  text: string;
  href: string;
  img: string;
}

const CardReact: React.FC<CardReactProps> = ({ title, text, href, img }) => {
  const handleCardClick = () => {
    window.open(href, "_blank");
  };

  return (
    <Card
      onClick={handleCardClick}
      border="light"
      className="card mx-5 my-6 inline-flex cursor-pointer rounded-xl p-2 text-center shadow-md hover:shadow-2xl"
      style={{ width: "18rem", color: "purple" }}
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
