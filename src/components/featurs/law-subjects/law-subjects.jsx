import "./law-subject.css";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../redux/slices/services/services";

const LawSubjects = () => {
  const { services, loading } = useSelector((state) => state.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  return (
    <Container className="mt-3 lawSubjects">
      <Row className="lawSubjectsRow">
        {services.data?.map((service) => (
          <Col key={service._id} sm={3}>
            <div class="dropdown">
              <h6 class="dropbtn">{service.serviceName}</h6>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LawSubjects;
