import "./agreement-details.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState } from "react";

const AgreementDetails = ({ subService, onchangeForm, orderReady }) => {
  const { services, loading } = useSelector((state) => state.services);
  const { handleLawyerId } = useParams()
  const userId = Cookies.get("userId")
  const subServicesArray = services.data?.map(item => item?.subService)
  let subServiceToFound = subServicesArray?.map(item => item?.find(item => item._id == subService))
  subServiceToFound = subServiceToFound?.filter(item => item != undefined)[0]

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    onchangeForm((prev) => {
      return { ...prev, [name]: value };
    })
  }

  const handelSubmit = () => {
    orderReady()
  }
  
  const basicService = () => {
    return (
      document.getElementById('serviceDetailsId').innerText = `${subService.basicService.service}`
    )
  }
  const standardService = () => {
    return (
      document.getElementById('serviceDetailsId').innerText = `${subService.premiumService.service}`
    )
  }
  const premiumService = () => {
    return (
      document.getElementById('serviceDetailsId').innerText = `${subService.goldService.service}`
    )
  }

  return (
    <Container className="agreementDetails mt-3">
      <Row className="mt-3">
        <Col className="packPay">
          <button
          className="serviceBtnStyle"
            id="basic"
            name="totalPrice"
            value=" 100"
            onClick={(e)=>{handleInputChange(e);basicService();}}
          >Basic service 100$</button>
        </Col>
        <Col id="borderLeftAndRight" className="packPay">
          <button
          className="serviceBtnStyle"
            id="Standard"
            name="totalPrice"
            value="200"
            onClick={(e)=>{handleInputChange(e);standardService();}}
          >Standard service 200$</button>

        </Col>
        <Col className="packPay">
          <button
          className="serviceBtnStyle"
            id="Gold"
            name="totalPrice"
            value="300"
            onClick={(e)=>{handleInputChange(e);premiumService();}}
          >Gold service 300$</button>
        </Col>
      </Row>
      <div className="borderDiv mt-2 mb-4"></div>
      <div className="d-flex justify-content-between">
        <h5>{subService.agreementName}</h5>
        <h6 style={{ color: "#08b9e3" }}>100$</h6>
      </div>
      <span id="serviceDetailsId">
      </span>
      <div className="borderDiv mt-4 mb-4"></div>
      <div className="d-flex flex-column align-items-center mb-2">
        <button type="submit" onClick={handelSubmit} id="btnId" className="cardBtn mb-1"><Link to={'/payment'}>Save Details</Link></button>
        <span style={{ color: "#08b9e3" }}>Compare packages</span>

      </div>
    </Container>
  );
};

export default AgreementDetails;
