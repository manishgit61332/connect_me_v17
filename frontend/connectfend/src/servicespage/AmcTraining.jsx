// src/servicespage/AmcTraining.jsx
import React from "react";
import "./services.css";
import amc from "../assets/amc.webp";
import SEO from "../components/SEO";

export default function AmcTraining() {
    return (
        <div className="services-page">
            <SEO
                title="AMC & Training - ConnectME"
                description="Annual Maintenance Contract and professional training services for metering, billing, PLC, SCADA, and automation systems."
            />

            <section className="amc-wrapper">
                <h2 className="amc-title">AMC & Training</h2>

                <div className="amc-row">
                    <img src={amc} alt="AMC Training" className="amc-img" />

                    <div className="amc-text">
                        <p>
                            ConnectME provides comprehensive Annual Maintenance Contract (AMC) and professional training services for metering, billing, PLC, SCADA, and automation systems supplied and implemented by us. Our AMC services ensure continuous system performance through preventive maintenance, regular inspections, software updates, and rapid fault resolution. We support both hardware and software platforms to maximize system reliability and operational uptime.
                        </p>

                        <p>
                            In addition, ConnectME delivers structured technical training programs for operators, engineers, and maintenance teams, enabling effective system operation and troubleshooting. Our hands-on training covers system configuration, monitoring, reporting, and best practices. With dedicated support teams and domain expertise, we help clients achieve long-term efficiency, compliance, and return on investment from their automation and monitoring solutions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
