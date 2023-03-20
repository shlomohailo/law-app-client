import "./hero-section.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container className="mt-4 mb-5 heroSection">
      <Row className="mt-4">
        <Col className="d-flex flex-column">
          <h1 className="mb-3">How Work Should Work</h1>
          <h5 className="mb-5">
            Welcome to lawmarket, A website that provides service and legal
            advice to everyone. You can find contract agreements and lawyers
            from all types of fields on our website, As of 2023, we are
            considered the site with the fastest and best service according to a
            public survey. If you are interested in making contact or providing
            a service, click here on the blue button and start the process.
          </h5>
          <Col>
            <Button variant="outline-info" className="m-1">
              Click Here
            </Button>
            <Button variant="info" className="m-1">
              Click Here
            </Button>
          </Col>
        </Col>
        <Col className="imgDiv">
          <Image src="./images/homepage.jpg" className="heroSectionImg" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
