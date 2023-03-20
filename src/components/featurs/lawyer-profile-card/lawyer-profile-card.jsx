import './lawyer-profile-card.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const LawyerProfileCard = ({agreementName, agreementDescription}) => {
    return (
        <Card className="lawyerProfileCard mt-1 mb-1">
        <div className="lawyerProfileCard-img">
          <i id="iconStyle" class="bi bi-house-heart-fill"></i>
          <h1>{agreementName}</h1>
        </div>
        <div className="lawyerProfileCard-body">
          <h4>{agreementName}</h4>
          <p className="pText">{agreementDescription}</p>
          <div>
            <Link className="lawyerProfileCard-btn" to={"/lawyers"}>
              Lawyer
            </Link>
          </div>
        </div>
      </Card>
    );
}

export default LawyerProfileCard;
