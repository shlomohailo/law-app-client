import "./footer.css";
import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-1">
        <section className="">
          <MDBRow className="justify-content-between align-items-center">
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <Link to={'/'}> <img
                src="/images/logonobackground.png"
                className="p-2 mt-2"
                style={{ width: "60%" }}
              />
              </Link>
            </MDBCol>
            <MDBCol
              className="text-center p-3">
              © 2023 Copyright: LAW MARKET
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <Link to={"/"} id="linkId" className="p-4">
                Home
              </Link>
              <Link to={"/"} id="linkId" className="p-4">
                Home
              </Link>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
