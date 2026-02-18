// src/ServicesDropdown/ServicesDropdown.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ServicesDropdown.css";

export default function ServicesDropdown({ closeDropdown }) {

  // closes dropdown when clicking link
  const handleClick = () => {
    if (closeDropdown) closeDropdown();
  };

  return (
    <div className="services-dropdown" onClick={(e) => e.stopPropagation()}>

      {/* LEFT COLUMN — SOLUTIONS */}
      <div className="sd-col">
        <h3 className="sd-title">Solutions</h3>

        <Link to="/services1#smart-metering" onClick={handleClick}>
          Smart Metering & Utility Billing
        </Link>

        <Link to="/services1#remote-connect" onClick={handleClick}>
          Remote Connectivity & VPN
        </Link>

        <Link to="/services1#lorawan" onClick={handleClick}>
          IoT & LoRaWAN
        </Link>

        <Link to="/services1#lorawan-sensors" onClick={handleClick}>
          LoRaWAN Sensors
        </Link>
      </div>

      <div className="sd-divider"></div>

      {/* RIGHT COLUMN — SERVICES */}
      <div className="sd-col">
        <h3 className="sd-title">Services</h3>

        <Link to="/services" onClick={handleClick}>
          Utility Meter Maintenance
        </Link>

        <Link to="/services/billing" onClick={handleClick}>
          Billing Managed Service
        </Link>

        <Link to="/services/amc-training" onClick={handleClick}>
          AMC & Training
        </Link>

        <Link to="/services/consultancy" onClick={handleClick}>
          Technical Consultancy
        </Link>

        <Link to="/services/plc-scada" onClick={handleClick}>
          PLC & SCADA
        </Link>

        <Link to="/services/development" onClick={handleClick}>
          Development & Services
        </Link>
      </div>

    </div>
  );
}
