import "./sub-services.css";
import { Container, Row, Col } from "react-bootstrap";
import SubServicesCard from "../../featurs/sub-services-card/sub-services-card";
import TopLawyerCard from "../../featurs/top-lawyer-card/top-lawyer-card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../redux/slices/services/services";
import { useParams } from "react-router";

const SubServices = ({ servicesData }) => {
  const { id } = useParams()
  const { services, subServices, loading } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, []);
  const cardArray = [1, 2, 3]
  const serviceToFound = services.data.find(item => item._id == id)
  const arrayTopLaw = [{
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Shira Bezos",
    title: "Lawyer",
    description: "Shira Bezos is an American entrepreneur, media proprietor, investor, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon.    "
  }, {
    image: "https://www.bethesdaheadshots.com/wp-content/uploads/2022/05/black-male-executive-portrait-bethesda-md.jpg",
    userName: "Yaso Melako",
    title: "Lawyer",
    description: "Yaso Melako amazing lawer, media proprietor, investor, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon.    "
  },{
    image: "https://www.bethesdaheadshots.com/wp-content/uploads/2015/09/Orion_4109Fsm640.jpg",
    userName: "Yonatan Yitzhak",
    title: "Lawyer",
    description: "Yonatan Yitzhak is an American entrepreneur, media proprietor, investor, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon.    "
  }]
  return (
    <Container>
      {/* {console.log(serviceToFound)} */}
      <h1 className="h1MainHeadLine">Sub Services</h1>
      <Row className='mb-5 mt-5'>
        {
          serviceToFound.subService?.map(item =>
            <Col className="rowSubServices" key={item._id} sm={4}>
              <SubServicesCard agreementName={item.agreementName} agreementDescription={item.agreementDescription} lawyersId={item} />
            </Col>
          )

        }
        
      </Row>
      <h1 className="h1MainHeadLine">Top Lawyers</h1>
      <Row>
        {arrayTopLaw.map(item => {
          return <Col key={item} sm={4}>
            <TopLawyerCard image={item.image} userName={item.userName} title={item.title} description={item.description}/>
          </Col>
        })}
      </Row>
    </Container>
  );
};

export default SubServices;
