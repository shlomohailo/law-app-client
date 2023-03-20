import "./login.css";
import React from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import GoogleButton from "react-google-button";
import { async } from "@firebase/util";
import { logout, signInUser } from "../../../redux/slices/users/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const { error } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.users);


  const submitHandLogin = () => {
    dispatch(signInUser({ data: { email, password } }));
  };

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };
  const handGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (token) {
      return navigate("/");
    } else return;
  }, [user]);

  return (
    <Container fluid className="login-container">
      <Row>
        <Col
          id="loginSmallScreen"
          className="d-flex flex-column align-items-center"
          sm={6}
          xs={12}
        >
          <div className="d-flex flex-column ps-5 pt-5">
            <img src="./images/logo.jpg" className="w-50 align-self-center" />
          </div>

          <div
            id="loginForm"
            className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4"
          >
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="small mb-1 pb-lg-3 ms-5">
              <h5 style={{ color: "red" }}>{error ? `${error}!` : ""}</h5>
            </p>
            <Button
              className="mb-4 px-5 mx-5 w-100"
              variant="dark"
              size="lg"
              onClick={submitHandLogin}
            >
              Login
            </Button>
       
            <p className="small mb-5 pb-lg-3 ms-5">
            
              <p>
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handGoogleSignIn}
                />
              </p>
            </p>
            <p className="ms-5">
              Don't have an account?{" "}
              <Link to={"/signup"} class="link-info">
                Register here
              </Link>
            </p>
          </div>
        </Col>
        <Col
          sm={6}
          className="d-flex flex-column justify-content-center align-items-center px-0"
        >
          <Image
            id="loginImgId"
            src="./images/loginpic.jpg"
            className="p-2 mt-2"
            style={{ width: "65%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
