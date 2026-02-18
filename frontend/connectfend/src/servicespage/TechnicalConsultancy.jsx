// src/servicespage/TechnicalConsultancy.jsx
import React from "react";
import "./services.css";
import consult from "../assets/consultancy.webp";
import SEO from "../components/SEO";

export default function TechnicalConsultancy() {
    return (
        <div className="services-page">
            <SEO
                title="Technical Consultancy - ConnectME"
                description="Specialized IoT and automation technical consultancy services including plant optimization, networking, security audits, and IoT enablement."
            />

            <section className="tc-wrapper">
                <h2 className="tc-title">Technical Consultancy</h2>

                <div className="tc-row">
                    <div className="tc-text">
                        <p>
                            Specialized focusing on everything from market research and strategy
                            consulting to hardware and software specialists to help navigate the
                            minefield of IoT protocols and other technical hurdles to jump through.
                        </p>

                        <p>
                            We offer: Plant Optimization Networking & security Audit trails –
                            Plant / SCADA networks IoT enablement
                        </p>
                    </div>

                    <img src={consult} alt="Technical Consultancy" className="tc-img" />
                </div>
            </section>
        </div>
    );
}
