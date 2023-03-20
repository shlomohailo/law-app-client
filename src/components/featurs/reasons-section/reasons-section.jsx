import "./reasons-section.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ReasonsSection = () => {
  return (
    <Container className="d-flex mt-5 main-container">
      <Col sm={6} className="mt-4">
        <h1>Why clients</h1><h1>turn to LAW MARKET</h1>
        <Row className="mt-4">
          <Col>
            <Row className="align-items-baseline">
              <Col sm={1}>
                <i class="bi bi-check-circle-fill text-dark"></i>
              </Col>
              <Col sm={11}>
                <h3>Proof of quality</h3>
                <h5 className="text-muted">
                  Check any pro’s work samples, client reviews, and identity
                  verification.
                </h5>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="align-items-baseline">
              <Col sm={1}>
                <i class="bi bi-currency-exchange text-success"></i>
              </Col>
              <Col sm={11}>
                <h3>Affordable prices</h3>
                <h5 className="text-muted">
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Row className="align-items-baseline">
              <Col sm={1}>
                <i class="bi bi-shield-lock-fill text-primary"></i>
              </Col>
              <Col sm={11}>
                <h3>Safe and secure</h3>
                <h5 className="text-muted">
                  Focus on your work knowing we help protect your data and
                  privacy. We’re here with 24/7 support if you need it.
                </h5>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="align-items-baseline">
              <Col sm={1}>
                <i class="bi bi-star-fill text-warning"></i>
              </Col>
              <Col sm={11}>
                <h3>Professional lawyers</h3>
                <h5 className="text-muted">
                  Find the best Professional lawyers or talk to a recruiter to get a
                  shortlist of pre-vetted lawyer within 2 days.*
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col sm={6} className="d-flex justify-content-end mt-4">
        <Image
          src="./images/reason-section.jpg"
          className="reasonSectionImg mb-5"
        />
        <Card className="reasonSectionCard">
          <Card.Body>
            <Card.Title>
              <i id="cardStarColor" class="bi bi-star-fill"></i>
              <i id="cardStarColor" class="bi bi-star-fill"></i>
              <i id="cardStarColor" class="bi bi-star-fill"></i>
              <i id="cardStarColor" class="bi bi-star-fill"></i>
              <i id="cardStarColor" class="bi bi-star-half"></i>
            </Card.Title>
            <Card.Title className="mb-2">8.8/10</Card.Title>
            <Card.Title className="mb-5">
              Clients rate pros on LAW MARKET
            </Card.Title>
            <Card.Text className="mt-5">
              Awards winner G2’s 2023 Best Software Awards
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default ReasonsSection;
