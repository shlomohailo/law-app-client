import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./payment.css";
import { getOrders } from "../../../redux/slices/orders/orders";
import { useSelector, useDispatch } from "react-redux";

const Payment = () => {

  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);



  return (
    <Container className="mb-5">
      <h2>Checkout</h2>
      <Row>
        <Col sm={5}>
          <div className="borderDiv mt-3 mb-3"></div>
          <Col>
            <div className="d-flex justify-content-between mb-3">
              <h6>Shipping</h6>
              <button className="paymentBtn" style={{ color: "#299976" }}>
                Edit
              </button>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column mb-4">
                <span>Rowena Benivedez</span>
                <span>29181 West River Drive, Sacarmento,CA 95833</span>
              </div>
              <span>Standard Shipping:Free</span>
              <h6>Arrive Thursday,October 31st</h6>
            </div>
          </Col>
          <div className="borderDiv mt-3 mb-3"></div>
          <Col>
            <h6>Payment Method</h6>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-center mb-2">
                {/* <div ref={paypal}></div> */}
                <PayPalScriptProvider options={{
                  "client-id":
                    "AYgX45wDdeR1m60kqC9mnp4EbvIgQiKbZ4wQzsjtr3kN3EOWxC3VzrfDmkFVgwLRZNWwu-KwhRCu9ML4"
                }}>
                  <PayPalButtons createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: "0.1",
                          },
                        },
                      ],
                    });
                  }}
                    onApprove={async (data, actions) => {
                      const details = await actions.order.capture();
                      const name = details.payer.name.given_name;
                      alert("Transaction completed by " + name);
                    }} />
                </PayPalScriptProvider>
              </div>

              <div className="terms align-self-center">
                <span>By clicking Place Order you agree to the</span>
                <span style={{ color: "#299976" }}>Terms & Condictions.</span>
              </div>
            </div>
          </Col>
        </Col>
        <Col sm={1} className="mt-4 mb-2"></Col>
        <Col sm={5} className="section3col">
          <div className="d-flex justify-content-between mt-3">
            <h6>Shipping Cart</h6>
            <button className="paymentBtn" style={{ color: "#299976" }}>
              Edit
            </button>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>$100</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping Free</span>
              <span>Free</span>
            </div>
          </div>
          <div className="borderDiv mt-3 mb-3"></div>
          <table className="mt-3 mb-5 d-flex flex-column">
            <thead className="d-flex justify-content-between">
              <th>ITEM</th>
              <th>QTY</th>
              <th>PRICE</th>
            </thead>
            <tbody>
              <tr className="d-flex justify-content-between">
                <td>Kind Of Item</td>
                <td>1</td>
                <td>$100</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;