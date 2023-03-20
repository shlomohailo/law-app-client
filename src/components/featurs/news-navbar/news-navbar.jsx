import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./news-navbar.css";
import { useEffect, useState } from "react";
import { fetchDataFromGovUs } from "../../../services/gov";
const NewsNavbar = () => {
  const [contracts, setContracts] = useState([]);
  useEffect(() => {
    fetchDataFromGovUs().then((res) => setContracts(res.data));
  }, []);
  let array = contracts.slice(0, 10);
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  {
    array.map((item) => item.file.map((item) => console.log(item.url)));
  }

  return (
    <Container className="newsNavbarContainer">
      <Row>
        <Slider {...settings}>
          {array.map((item) => (
            <Col sm={2} className="newsCard align-self-center">
              <div>
                <h6 className="headNews">{item.title}</h6>
              </div>
              <div className="d-flex flex-column">
                {item.file?.map((file) => (
                  <a
                    className="linkNews headNews"
                    target="_blank"
                    href={file.url}
                  >
                    Watch contract
                  </a>
                ))}
              </div>
            </Col>
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default NewsNavbar;
