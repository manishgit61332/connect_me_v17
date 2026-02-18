// src/servicespage/DevelopmentServices.jsx
import React from "react";
import "./services.css";
import dev from "../assets/development.webp";
import SEO from "../components/SEO";

export default function DevelopmentServices() {
    return (
        <div className="services-page">
            <SEO
                title="Development & Services - ConnectME"
                description="Custom application development services including web, mobile, desktop apps, software maintenance, and IT infrastructure support."
            />

            <section className="dev-wrapper">
                <h2 className="dev-title">Development & Services</h2>

                <div className="dev-row">
                    <div className="dev-text">
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
                            infrastructure's most pressing vulnerabilities, allowing us to
                            integrate the encryptions, security services and access protocols you
                            require. Our implementation specialists will work with your IT team
                            to establish detailed software deployment objectives and timelines,
                            covering configuration, testing, project governance, troubleshooting
                            and more. We provide holistic IT Infrastructure support, including
                            help desk management, custom messaging and collaboration, network
                            management and system administration services.
                        </p>
                    </div>

                    <img src={dev} alt="Development Services" className="dev-img" />
                </div>
            </section>
        </div>
    );
}
