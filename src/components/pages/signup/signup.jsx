import "./signup.css";
import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { signUpUser } from "../../../redux/slices/users/userSlice";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  const submitHand = () => {
    dispatch(
      signUpUser({
        data: { firstName, lastName, email, password, confirmPassword, role },
      })
    );
  };
  useEffect(() => {
   
    if (user.massage == "success") {
      return navigate("/login");
    } else return user.massage;
  }, [user]);

  return (
    <Container className="signup-container">
      <Row>
        <h1>Head Line</h1>
        <div className="imgClass">
          <Image
            src="./images/lawlogonobg.png"
            className="d-flex justify-content-center"
            style={{ width: "35%" }}
          />
          <Col className="d-flex justify-content-lg-center formClass">
            <div cla70ssName="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <label for="fullName" className="mb-1 mx-5 w-100">
                Full Name:
              </label>
              <Row>
                <Col>
                  <MDBInput
                    wrapperClass="mb-1 mx-5 w-75"
                    label="First Name"
                    id="First Name"
                    type="text"
                    size="lg"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <MDBInput
                    wrapperClass="mb-1 w-75"
                    label="Last Name"
                    id="fullName"
                    type="text"
                    size="lg"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <label for="emailId" className="mb-1 mx-5 w-100">
                Email Address:
              </label>
              <MDBInput
                wrapperClass="mb-1 mx-5 w-75"
                label="Email address"
                id="emailId"
                type="email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="passwordId" className="mb-1 mx-5 w-100">
                Password:
              </label>
              <MDBInput
                wrapperClass="mb-1 mx-5 w-75"
                label="Password"
                id="passwordId"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-1 mx-5 w-75"
                label="Confirm Password"
                id="passwordId"
                type="password"
                size="lg"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label for="profileImage" className="mb-1 mx-5 w-100">
                Add Profile Image:
              </label>
              <MDBInput
                wrapperClass="mb-1 mx-5 w-75"
                label="Profile Image"
                id="profileImage"
                type="text"
                size="lg"
              />
              <label for="position" className="mb-1 mx-5 w-100">
                Select your position:
              </label>
              <Form.Select
                id="position"
                className="form-outline form-control form-control-lg mb-2 mx-5 w-75"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="1">Client</option>
                <option value="2">Lawyer</option>
              </Form.Select>
              <Row>
                <label for="" className="mb-1 mx-5 w-100">
                  Address:
                </label>
                <Col>
                  <MDBInput
                    wrapperClass="mb-1 mx-5 w-75"
                    label="City"
                    id="formControlLg"
                    type="text"
                    size="lg"
                  />
                </Col>
                <Col>
                  <MDBInput
                    wrapperClass="mb-1 w-75"
                    label="Street"
                    id="formControlLg"
                    type="text"
                    size="lg"
                  />
                </Col>
              </Row>
              <Button
                id="btnSignUp"
                className="mb-1 mt-2 px-5 mx-5 w-75"
                variant="dark"
                size="s"
                onClick={submitHand}
              >
                Sign up
              </Button>
              <p className="small mb-1 pb-lg-3 ms-5">
                <a class="text-muted" href="#!">
                  {user?.message?.map((item) => item?.message)}
                 
                </a>
              </p>
              <p className="ms-2">
                Do you have an account{" "}
                <Link to={"/login"} class="link-info">
                  Sign in here
                </Link>
              </p>
            </div>
          </Col>
        </div>

 
      </Row>
    </Container>
  );
};

export default SignUp;
