import React from "react";
import "./whytrust.css";
import trustImg from "../assets/Homepage_cme.png"; // your image path

export default function whyTrust() {
  return (
    <div className="trust-section">
      <div className="trust-left">
        <h1 className="trust-title">Why Trust ConnectME?</h1>

        <p className="trust-text">
          ConnectME has established itself as a trusted partner in the Industrial IoT sector, delivering cyber-secure and scalable solutions across the MENA region. Our ISO-certified manufacturing facility in Dubai ensures the highest quality standards, producing state-of-the-art ultrasonic meters and IoT gateways.
          <br /><br />
          With a dedicated team of engineers and local support across Dubai, Saudi Arabia, Qatar, and India, we provide rapid response and deep technical expertise. We don't just sell products; we deliver complete, integrated solutions that optimize efficiency and sustainability for our clients.
        </p>
      </div>

      <div className="trust-right">
        <img src={trustImg} alt="trust" />
      </div>
    </div>
  );
}
