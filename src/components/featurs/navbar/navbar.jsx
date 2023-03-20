import React, { useState } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getAllSubServices } from "../../../redux/slices/subServices/sucServices";
import { useDispatch } from "react-redux";
import UserNavbarConnection from "../user-navbar-connection/user-navbar-connection";
const NavbarHeader = () => {
  const { user, userLoading } = useSelector((state) => state.users);
  const { subServices, loading } = useSelector((state) => state.subServices);
  const [fullName, setFullName] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const dispatch = useDispatch();
  let lawyerId;
  const Navigate = useNavigate();
  useEffect(() => {
    const getLawyers = async () => {
      return await fetch("http://localhost:8000/api/users/getAllLawyers")
        .then((res) => res.json())
        .then((res) => setLawyers(res.data))
        .catch((err) => console.log(err));
    };
    getLawyers();
    dispatch(getAllSubServices());
  }, []);
  useEffect(() => {

    setFullName(Cookies.get("userName"));
  }, [user]);
  let d = subServices?.data?.map((item) => item?._id);
  console.log(subServices);
  const navigateTo = () => {
    Navigate(`/lawyerprofile/${lawyerId}/63b5a05f0a0baae428bfbbd9`);
  };



  return (
    <Container className="mb-5">
      <Row className="align-items-center mb-4">
        <Col sm={3} className="d-flex justify-content-start">
          <Link className="logoHomeLink" to={"/"}>
            <Image src="./images/LAWMARKETLOGO.jpg" className="lawmarketLogo" />
          </Link>
        </Col>
        <Col sm={6} className="search">
          <div class="formSearch">
            <i class="fa fa-search" onClick={() => {
              navigateTo();
            }}></i>
            <input
              type="text"
              class="form-control formSearch-input"
              placeholder="Search anything..."
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
          <div id="result">
            {Array.from(lawyers)?.filter((lawyer, i) => {
              let result = lawyer.firstName.toLowerCase();
              if (searchValue.length === 0) {
                return;
              } else if (result?.includes(searchValue.toLowerCase())) {
                lawyerId = lawyer._id;
              }
            })}
          </div>
        </Col>
        <Col sm={3} className="d-flex justify-content-end">
          {user ? (
            <UserNavbarConnection user={user} setFullName={setFullName} />
          ) : (
            <Button className="loginBtn" variant="dark">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/login"}
                user={user}
                setFullName={setFullName}
              >
                Login
              </Link>
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
          };
export default NavbarHeader;
