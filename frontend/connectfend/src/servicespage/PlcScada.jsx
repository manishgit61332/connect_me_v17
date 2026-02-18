// src/servicespage/PlcScada.jsx
import React from "react";
import "./services.css";
import plc from "../assets/plc.webp";
import SEO from "../components/SEO";

export default function PlcScada() {
    return (
        <div className="services-page">
            <SEO
                title="PLC & SCADA Services - ConnectME"
                description="Industrial automation services including PLC, SCADA, HMI modifications, plant upgrades, retrofits, and maintenance contracts."
            />

            <section className="plc-wrapper">
                <h2 className="plc-title">PLC & SCADA Services</h2>

                <div className="plc-row">
                    <img src={plc} alt="PLC & SCADA" className="plc-img" />

                    <div className="plc-text">
                        <p>
                            Usage of control systems, such as computers or robots, and information
                            technologies for handling different processes and machineries in an
                            industry to replace a human being. It is the second step beyond
                            mechanization in the scope of industrialization.
                        </p>

                        <p><strong>We offer:</strong></p>

                        <ul className="plc-list">
                            <li>Plant / machine upgrade – retrofits</li>
                            <li>PLC / SCADA / HMI – modifications</li>
                            <li>Maintenance contracts – AMC / SLA</li>
                            <li>Engineering Services</li>
                            <li>Manpower deployment – Engineers / Project Manager</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
