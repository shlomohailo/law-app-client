import React from "react";
import CookieConsent from "react-cookie-consent";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function CookiesFeaturs() {
  const [debug] = useState(false);
  useEffect(() => {
    if (debug) {
      Cookies.set("debug", debug);

      return;
    } else return;
  }, []);
  return (
    <div>
      <CookieConsent
        debug={debug}
        location="bottom"
        style={{ textAlign: "left" }}
        buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px" }}
        buttonText="accept all cookies"
      >
        We are using cookies to give you the best experience on our website.
      </CookieConsent>
    </div>
  );
}
