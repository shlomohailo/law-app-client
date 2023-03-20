import { Container, Row, Col, Image } from "react-bootstrap";
import "./top-lawyer-card.css";

const TopLawyerCard = ({image,userName,title,description}) => {
  return (
    <div className="topLawyerCard">
      <Col className="d-flex mb-3 align-items-center">
        <Image src={image} className="profileImgCard" />
        <Col className=" d-flex flex-column justify-content-end mx-2">
          <h5>{userName}</h5>
          <h6>{title}</h6>
        </Col>
      </Col>
      <Col>
        <h5 className="text-muted text-card">
          {description}
        </h5>
      </Col>
    </div>
  );
};

export default TopLawyerCard;
