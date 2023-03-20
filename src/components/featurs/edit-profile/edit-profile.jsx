import "./edit-profile.css";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import Cookies from "js-cookie";
import { useState } from "react";
import { updateProfile } from "../../../services/updateProfile";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const { user, userLoading } = useSelector((state) => state.users);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const userId = Cookies.get("userId");
  const userName = Cookies.get("userName");

  const updateUserProfile = () => {

    const userObj = {
      firstName: firstName,
      lastName: lastName,
      role: role,
      city: city,
      street: street,
    };
    updateProfile(userObj);
  };
  return (
    <Container className="mt-2">
      <Row className=" align-items-center">
        <Col sm={3} className="imageAndUpdate d-flex justify-content-end">
          <Image
            className="lawyerProfileEdit"
            src={
              user.profileImg ? user.profileImg : "./images/lawyerprofile.jpg"
            }
          />
        </Col>
        <Col sm={9}>
          <div id="btnUpdate" className="justify-content-start">
            <input type="file" id="file" accept="image/*" />
            <label id="labelFile" for="file">
              <i class="bi bi-card-image"></i>Update Profile Picture
            </label>
          </div>
        </Col>
      </Row>
      <Row className="mt-2 mb-2">
        <Col>
          <MDBInput
            className="inputSize"
            wrapperClass="mb-1"
            label="Change First Name"
            id="firstName"
            type="text"
            size="lg"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Col>
        <Col>
          <MDBInput
            wrapperClass="mb-1"
            label="Change Last Name"
            id="lastName"
            type="text"
            size="lg"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col>
          <MDBInput
            wrapperClass="mb-1"
            label="Change Email address"
            id="emailId"
            type="email"
            size="lg"
          />
        </Col>
        <Col>
          <MDBInput
            wrapperClass="mb-1"
            label="Change Password"
            id="passwordId"
            type="password"
            size="lg"
          />
        </Col>
      </Row>

      <label for="position" className="mb-1">
        Change your position:
      </label>
      <Form.Select
        id="position"
        className="form-outline form-control form-control-lg mb-2"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        <option value="1">Client</option>
        <option value="2">Lawyer</option>
      </Form.Select>
      <Row className="mt-3">
        <label for="" className="mb-1">
          Update Address:
        </label>
        <Col>
          <MDBInput
            wrapperClass="mb-1"
            label="City"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Col>
        <Col>
          <MDBInput
            wrapperClass="mb-1"
            label="Street"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Col className="d-flex justify-content-center mt-3">
        <button onClick={updateUserProfile} className="editProfileSave">
          Save Changes
        </button>
      </Col>
    </Container>
  );
};

export default EditProfile;


