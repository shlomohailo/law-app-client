import "./service-card.css";
import Card from "react-bootstrap/Card";

function ServiceCard({ serviceName }) {
  return (
    <Card className="bg-dark text-white serviceCard">
      <Card.Img src="./images/service.webp" alt="Card image" />
      <Card.ImgOverlay className="d-flex align-items-end justify-content-center"></Card.ImgOverlay>
      <Card.Title className="secondTitle">{serviceName}</Card.Title>
    </Card>
  );
}

export default ServiceCard;
