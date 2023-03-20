import Cookies from "js-cookie";
import { useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./agreement-form.css";

const AgreementForm = ({ subService, onchangeClientForm }) => {

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    onchangeClientForm((prev) => {
      return { ...prev, [name]: value };
    })
    
  }

  return (
    <Container className="formBorder p-0">
      <div className="imgAndText">
        <h3 className="mb-3">{subService.agreementName}</h3>
        <Image
          src="https://cu-media.s3.amazonaws.com/images/law.jpg"
          className="agreementImg"
        />
      </div>
      <div className="m-4">
        <div className="mb-5">
          <span className="">
            {subService.agreementDescription}
          </span>
          <div className="bottomColor mt-2"></div>
        </div>

        <div className="m-3">

          <div className="">
            <h5>Contract details</h5>
            <div>
              <div className="bottomColor mt-2"></div>

              <form className="d-flex flex-column" onSubmit={handleInputChange}>
                <label for="fname">First Name</label>
                <input
                  className="typeStyle"
                  type="text"
                  id="fname"
                  name="firstName"
                  placeholder="Enter First Name"
                  onChange={handleInputChange}
                />
                <label for="lname">Last Name</label>
                <input
                  className="typeStyle"
                  type="text"
                  id="lname"
                  name="lastName"
                  placeholder="Enter Last Name"
                  onChange={handleInputChange}
                />
                <label for="email">Email</label>
                <input
                  className="typeStyle"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleInputChange}
                />
                <label for="date">Birth Date</label>
                <input
                  className="typeStyle"
                  type="date"
                  id="date"
                  name="dateOfBirth"
                  onChange={handleInputChange}
                />
                <label for="gender">Gender</label>
                <div className="d-flex align-items-center w-25 justify-content-evenly">
                  <select id="gender" name="gender" onChange={handleInputChange}>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <label for="moreInfo">Remarks</label>
                <input className="typeStyle"
                  type="text"
                  id="userComennt"
                  name="moreInfo"
                  placeholder="Here you can leave comments"
                  onChange={handleInputChange}
                />
                <button className="formBtn">Save Details</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default AgreementForm;
