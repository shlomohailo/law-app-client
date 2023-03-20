import { Container, Row, Col, Image } from "react-bootstrap";
import "./list-review.css";

const ListReview = () => {
  return (
    <Container className="mb-5 listReview">
      {/* <Row className="mt-4">
        <h1>How to hire on Gold Low</h1>
        <h5 className="text-muted">
          Find go-to talent for everything from quick turnarounds to long-term
          engagements.
        </h5>
      </Row> */}
      <Row className="rowListReview">
        <Col sm={3}>
          <Image className="listReviewImg mt-5" src="./images/law.png" />
          <h4 className="mt-3">Agreements</h4>
          <span className="mt-2 text-muted">
            Tell us what you need. Provide as many details as possible, but
            don’t worry about getting it perfect.
          </span>
        </Col>
        <Col sm={3}>
          <Image className="listReviewImg mt-5" src="./images/agreement.png" />
          <h4 className="mt-3">Contracts</h4>
          <span className="mt-2 text-muted">
            Get qualified proposals within 24 hours, and meet the candidates
            you’re excited about.
          </span>
        </Col>
        <Col sm={3}>
          <Image className="listReviewImg mt-5" src="./images/justice.png" />
          <h4 className="mt-3">Fast service</h4>
          <span className="mt-2 text-muted">
            Receive invoices and make payments through Upwork. Only pay for work
            you authorize.
          </span>
        </Col>
        <Col sm={3}>
          <Image className="listReviewImg mt-5" src="./images/lawyer.png" />
          <h4 className="mt-3">Lawyers</h4>
          <span className="mt-2 text-muted">
            Use Upwork to chat or video call, share files, and track project
            progress right from the app.
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default ListReview;
