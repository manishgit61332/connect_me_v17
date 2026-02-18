import React from "react";
import "./services.css";
import servicesData from "../data/servicesData";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services-section">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">

            {/* IMAGE */}
            <img src={service.image} alt="service" className="service-image" />

            {/* TEXT */}
            <p className="service-text">{service.text}</p>

            {/* BUTTON */}
            <Link to={service.link}><button className="service-btn">Read More</button></Link>

          </div>
        ))}
      </div>
    </div>
  );
}
