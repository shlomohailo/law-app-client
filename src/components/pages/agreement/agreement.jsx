import Cookies from "js-cookie";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { postOrders } from "../../../redux/slices/orders/orders";
import AgreementDetails from "../../featurs/agreement-details/agreement-details";
import AgreementForm from "../../featurs/agreement-form/agreement-form";
import HandleLawyerProfile from "../../featurs/handle-lawyer-profile/handle-lawyer-profile";
import "./agreement.css";

const Agreement = () => {
 

  const { services, loading } = useSelector((state) => state.services);
  const { subService, handleLawyerId } = useParams()
  const userId = Cookies.get("userId")
  const subServicesArray = services.data?.map(item => item?.subService)
  let subServiceToFound = subServicesArray?.map(item => item?.find(item => item._id == subService))
  subServiceToFound = subServiceToFound?.filter(item => item != undefined)[0]
 
  const [agreementForm, setAgreementForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    moreInfo: "",
  })

  const [agreement, setAgreement] = useState(
    {

      client: userId,
      handleLawyer: handleLawyerId,
      agreements: subServiceToFound._id,
      orderNumber: "00231",
      totalPrice: ""
    })

    const data = {...agreement,agreementForm};
   ;

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  const handleClientForm = (value) => {
    setAgreementForm(value)
  }
  const handleClientDetails = (value) => {
    setAgreement(value)
  }
  const handelSubmitOrderDetails = () => {
  
    dispatch(
      postOrders({
        data: {...agreement,agreementForm },
      })
    );
  };
  
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={4}>
          <Col><HandleLawyerProfile subService={subServiceToFound} /></Col>
          <Col><AgreementDetails orderReady={handelSubmitOrderDetails} onchangeForm={handleClientDetails} subService={subServiceToFound} /></Col>
        </Col>
        <Col sm={8}>
          <AgreementForm onchangeClientForm={handleClientForm} subService={subServiceToFound} />
        </Col>
      </Row>
    </Container>
  );
};

export default Agreement;
