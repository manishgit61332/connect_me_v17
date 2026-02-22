// src/servicespage/servicesPage2.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./services.css";
import capture from "../assets/Utility Meter Maintenance_service_1.png";
import bill from "../assets/Billing Managed Service_1.png";
import amc from "../assets/AMC & Training_1.png";
import consult from "../assets/Technical Consultancy_1.png";
import plc from "../assets/PLC & SCADA Services_1.png";
import dev from "../assets/Development & Services_1.png";

export default function ServicesPage2() {

    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const targetId = hash.substring(1);
        const smoothScroll = () => {
            const el = document.getElementById(targetId);
            if (el) {
                // Account for fixed header (70px) + some buffer
                const headerOffset = 90;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            } else {
                setTimeout(smoothScroll, 100);
            }
        };

        setTimeout(smoothScroll, 0);
    }, [hash]);


    return (
        <div className="services-page">

            {/* ======================================================
                1. Utility Meter Maintenance (Text Left, Image Right)
            ====================================================== */}
            <section id="utility-maintenance" className="service-section">
                <div className="service-container">
                    <h2 className="service-title">Utility Meter Maintenance</h2>
                    <div className="service-row">
                        <div className="service-text">
                            <p>
                                A tenant metering provides the overview and insights needed
                                for accurate billing of water and energy consumption in
                                residential and/or commercial buildings. Highly accurate and
                                reliable meters combined with intuitive meter reading, correct
                                billing platform and proper validation of Meter data.
                            </p>
                            <p>
                                ConnectME offers meter maintenance service, to ensure meters stay
                                healthy, critical for correct billing. Our services cover AI enabled
                                AMR application, which validates the meter data on each meter polling
                                and automated meter error reports. We do maintenance service on faulty
                                meters replacements.
                            </p>
                        </div>
                        <img src={capture} alt="Utility Meter Maintenance" className="service-img" />
                    </div>
                </div>
            </section>

            {/* ======================================================
                2. Billing Managed Service (Image Left, Text Right)
            ====================================================== */}
            <section id="billing" className="service-section">
                <div className="service-container">
                    <h2 className="service-title">Billing Managed Service</h2>
                    <div className="service-row reverse">
                        <div className="service-text">
                            <p>
                                Our payment portal allows residents to download bills and check their
                                account from the comfort of their own home or anywhere in the world
                                over the internet. Billing system is a combination of software and
                                hardware that receives service usage information, groups this
                                information for specific accounts or customers, produces invoices,
                                creates reports for management, and records (posts) payments made to
                                customer accounts.
                            </p>
                            <div className="onew">
                                <p className="one">
                                    After an invoice is generated and dispatched to the customer, ideally,
                                    all customers will receive their bills and pay promptly. However, there
                                    may be some customers, who do not pay their bills and there may be an
                                    unacceptable delay in paying the bill and hence the service providers
                                    must take some action needed to remedy the situation and collect the
                                    outstanding balance due.
                                </p>
                                <p className="one">
                                    Collection is the process of chasing past due receivables on customer
                                    account. This usually involves sending notifications to the customer
                                    and taking appropriate actions in absence of due payments after the
                                    due date.
                                </p>
                            </div>
                        </div>
                        <img src={bill} alt="Billing Service" className="service-img" />
                    </div>
                </div>
            </section>

            {/* ======================================================
                3. AMC & Training (Text Left, Image Right)
            ====================================================== */}
            <section id="amc" className="service-section">
                <div className="service-container">
                    <h2 className="service-title">AMC & Training</h2>
                    <div className="service-row">
                        <div className="service-text">
                            <p>
                                ConnectME provides comprehensive Annual Maintenance Contract (AMC) and professional training services for metering, billing, PLC, SCADA, and automation systems supplied and implemented by us. Our AMC services ensure continuous system performance through preventive maintenance, regular inspections, software updates, and rapid fault resolution. We support both hardware and software platforms to maximize system reliability and operational uptime.
                            </p>
                            <p>
                                In addition, ConnectME delivers structured technical training programs for operators, engineers, and maintenance teams, enabling effective system operation and troubleshooting. Our hands-on training covers system configuration, monitoring, reporting, and best practices. With dedicated support teams and domain expertise, we help clients achieve long-term efficiency, compliance, and return on investment from their automation and monitoring solutions.
                            </p>
                        </div>
                        <img src={amc} alt="AMC Training" className="service-img" />
                    </div>
                </div>
            </section>

            {/* ======================================================
                4. Technical Consultancy (Image Left, Text Right)
            ====================================================== */}
            <section id="consultancy" className="service-section">
                <div className="service-container">
                    <h2 className="service-title">Technical Consultancy</h2>
                    <div className="service-row reverse">
                        <div className="service-text">
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
                        <img src={consult} alt="Technical Consultancy" className="service-img" />
                    </div>
                </div>
            </section>

            {/* ======================================================
                5. PLC & SCADA Services (Text Left, Image Right)
            ====================================================== */}
            <section id="plc" className="service-section">
                <div className="service-container">
                    <h2 className="service-title">PLC & SCADA Services</h2>
                    <div className="service-row">
                        <div className="service-text">
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
                        <img src={plc} alt="PLC & SCADA" className="service-img" />
                    </div>
                </div>
            </section>

            {/* ======================================================
                6. Development & Services (Image Left, Text Right)
            ====================================================== */}
            <section id="development" className="service-section">
                <div className="service-container">
                    <h2 className="service-title">Development & Services</h2>
                    <div className="service-row reverse">
                        <div className="service-text">
                            <p>
                                Application development services allow you to build consumer-facing
                                apps for a range of digital platforms like mobile App, web, desktop.
                                Web development services imply designing, building, integrating,
                                scaling and maintaining dynamic software solutions that work via
                                intranet or internet.
                            </p>
                            <p>
                                We rely on our technological expertise and specialized industry
                                experience to develop any type of web, mobile App, desktop, and
                                hybrid app per your business requirements. Our application
                                maintenance and modernization services are designed to ensure the
                                scalability, performance, and sustainability of your entire software
                                infrastructure as your business grows.
                            </p>
                            <p>
                                Our thorough threat audits help us identify your software
                                infrastructure’s most pressing vulnerabilities, allowing us to
                                integrate the encryptions, security services and access protocols you
                                require. Our implementation specialists will work with your IT team
                                to establish detailed software deployment objectives and timelines,
                                covering configuration, testing, project governance, troubleshooting
                                and more. We provide holistic IT Infrastructure support, including
                                help desk management, custom messaging and collaboration, network
                                management and system administration services.
                            </p>
                        </div>
                        <img src={dev} alt="Development Services" className="service-img" />
                    </div>
                </div>
            </section>

        </div>
    );
}
