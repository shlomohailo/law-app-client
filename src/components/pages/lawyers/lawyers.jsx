import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LawyerCard from "../../featurs/lawyer-card/lawyer-card";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import "./lawyers.css";
const lawyersImg = [
  "https://images.pexels.com/photos/7841828/pexels-photo-7841828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14634932/pexels-photo-14634932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4183516/pexels-photo-4183516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14634924/pexels-photo-14634924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]


const Lawyers = () => {
  const { lawyersId } = useParams()
  const { services, subServices, loading } = useSelector((state) => state.services);
  const subServiceToFound = services.data?.map(item => item.subService.find(item => item._id == lawyersId));
  const subService = subServiceToFound.filter(item => item != undefined)[0]
  const subServicesLawers = subServiceToFound?.filter(item => item?.lawyers.length > 0)
  const lawyersArray = subServicesLawers[0].lawyers;
  return (
    <Container>
      <h1 className="d-flex justify-content-center mt-5">Lawyers</h1>
      <Row>
        {lawyersArray.map((item,i) => {
          return (
            <Col key={item} sm={3}>
              <Link className="lawyerCard" to={`/lawyerprofile/${item._id}/${subService._id}`}><LawyerCard lawyer={item}  /></Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Lawyers;
