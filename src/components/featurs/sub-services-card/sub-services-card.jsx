import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sub-services-card.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllSubServices } from "../../../redux/slices/subServices/sucServices";

const SubServicesCard = ({ agreementName, agreementDescription, lawyersId }) => {

  return (
    <Card className="SubServicesCard mt-3 mb-2">
      <div className="SubServicesCard-img">
        <i id="iconStyle" class="bi bi-house-heart-fill"></i>
        <h1>{agreementName}</h1>
      </div>
      <div className="SubServicesCard-body">
        <p className="pText">{agreementDescription}</p>
        <div>
          <Link className="SubServicesCard-btn" to={`/lawyers/${lawyersId._id}`}>
            Lawyers
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default SubServicesCard;
