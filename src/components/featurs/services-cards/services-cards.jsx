import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../service-card/service-card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../redux/slices/services/services";
import "./services-cards.css";
import { Link } from "react-router-dom";

const ServicesCards = () => {
  const { services, subServices, loading } = useSelector((state) => state.services);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, []);
  
  const findById = (id) => {
    const found =  services?.data?.find(item=>item._id == id)
    return found
  }
  return (
    <Container className="servicesCards">
      <h1 className="text-center mt-5 mb-4">Our Services</h1>
      <Row>
        {services.data?.slice(0, 4).map((item) => {
          return (
            <Col className="createCard mb-3" sm={3} key={item._id}>
              <Link onClick={()=>findById(item._id)} className="createCard" to={`/subservices/${item._id}`}>
                <ServiceCard serviceName={item.serviceName}/>
              </Link>
            </Col>
          );
        })}
      </Row>
      <Row>
        {services.data?.slice(4, 8).map((item) => {
          return (
            <Col className="createCard mb-3" sm={3} key={item._id}>
              <Link onClick={()=>findById(item._id)} className="createCard" to={`/subservices/${item._id}`}>
                <ServiceCard serviceName={item.serviceName} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ServicesCards;
