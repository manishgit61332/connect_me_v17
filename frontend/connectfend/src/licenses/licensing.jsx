import React from "react";
import "./licensing.css";
import iso9001 from "../assets/iso_9001.webp";
import iso14001 from "../assets/iso_14001.webp";
import iso45001 from "../assets/iso_45001.webp";
import madeInUAE from "../assets/made_in_uae.webp";

export default function Licensing() {
  const certifications = [
    { img: iso9001, label: "ISO 9001:2015" },
    { img: iso14001, label: "ISO 14001:2015" },
    { img: iso45001, label: "ISO 45001:2018" },
    { img: madeInUAE, label: "Made in UAE" }
  ];

  return (
    <div className="license-section">
      <h1 className="license-title">Licensing & Certifications</h1>

      <div className="license-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="license-card">
            <img src={cert.img} alt={cert.label} />
            <p className="cert-label">{cert.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
