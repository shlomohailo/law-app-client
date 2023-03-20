import "./user-navbar-connection.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const UserNavbarConnection = () => {
  const { user, userLoading } = useSelector((state) => state.users);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
     setFullName(Cookies.get("userName"));
  }, [user]);
  return (
    <Dropdown className="d-flex align-items-center justify-content-end mt-2">
      <Dropdown.Toggle
        variant="white"
        id="dropdown-basic-button"
        className="dropdownStyle m-2"
      >
        {user ? (
          <span user={user} setFullName={setFullName}>
            {fullName}
          </span>
        ) : (
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "white" }}
            user={user}
            setFullName={setFullName}
          >
            Login
          </Link>
        )}
      </Dropdown.Toggle>
      <Image
        src={user.profileImg ? user.profileImg : "./images/lawyerprofile.jpg"}
        className="profileNavPic m-2"
      />
      <Dropdown.Menu>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
        <Dropdown.Item>
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Profile
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserNavbarConnection;
