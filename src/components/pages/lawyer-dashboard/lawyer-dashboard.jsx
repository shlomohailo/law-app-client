import { Container, Row, Col } from "react-bootstrap";
import EditProfile from "../../featurs/edit-profile/edit-profile";
import DashboardMenu from "../../featurs/lawyer-dashboard-menu/dashboard-menu";
import "./lawyer-dashboard.css";

const LawyerDashboard = () => {
  return (
    <div className="containerDashboard">
      <Row>
        <Col sm={3}>
          <DashboardMenu />
        </Col>
        <Col sm={1}></Col>
        <Col sm={6}>
            <div>
                <EditProfile/>
            </div>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </div>
  );
};

export default LawyerDashboard;
