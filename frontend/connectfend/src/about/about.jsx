import React from "react";
import "./about.css";
import dubai from "../assets/dubai.webp";

import founder from "../assets/founder.webp";
import founder2 from "../assets/founder2.webp";
import prasanna from "../assets/Prasana_headshot.jpg.jpeg";
import mohamedNasim from "../mohamed_nasim.jpeg";
import ganesan from "../Ganesan.jpeg";
import gopal from "../gopal.jpeg";
import mahesh from "../mahesh.jpeg";
import jogi from "../Jogi.jpeg";
import muthu from "../assets/Muthu.jpeg";

import iso9001 from "../assets/iso_9001.webp";
import iso14001 from "../assets/iso_14001.webp";
import iso45001 from "../assets/iso_45001.webp";
import teamGroup from "../assets/team_group.webp";
import SEO from "../components/SEO";

export default function AboutPage() {
    return (

        <div className="about-wrapper">
            <SEO
                title="About Us - ConnectME Manufacturing"
                description="Learn about ConnectME, a UAE-based Industrial IoT manufacturer delivering cyber-secure, scalable, and sustainable metering solutions."
            />

            {/* HERO SECTION */}
            <div className="about-hero">
                <img src={dubai} alt="About ConnectME" className="about-hero-img" />

                <div className="about-hero-overlay">
                    <h1>Smart Metering. Secure IoT. Made for Scale.</h1>
                    <p>End-to-end metering, billing, and Industrial IoT ecosystems—engineered, manufactured, and deployed with reliability and cybersecurity at the core.</p>
                </div>
            </div>
            <div className="about-section">

                {/* TOP TWO-COLUMN SECTION */}
                <div className="about-top">

                    {/* LEFT IMAGE */}
                    <div className="about-image-box">
                        <img
                            src={teamGroup}
                            alt="ConnectME Team"
                            className="about-image"
                        />
                        <div className="about-image-footer">
                            Head Office - DUBAI
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="about-text">
                        <p>
                            ConnectME Manufacturing LLC is a UAE-based Industrial IoT technology and manufacturing company, delivering cyber-secure, scalable, and sustainable IoT solutions since 2016. We design and manufacture end-to-end smart metering and utility management solutions, including Utility Metering & Billing (UBILL), Energy Management (UENERGY), IoT platforms, cloud connectivity, and customized software solutions.
                        </p>

                        <p>
                            Our solutions are trusted across 800+ buildings, connecting 500,000+ meters for 120+ customers across the GCC.
                        </p>

                        <p>
                            With a strong focus on high-quality manufacturing, we produce advanced IoT hardware such as TECHKNAVE smart valves, clamp-on meters, UFLO ultrasonic BTU & water meters, GasKonnect AMR & relay controllers, UCONNECT M-Bus devices, edge gateways, protocol converters, and water leak detectors—engineered for reliability, accuracy, and cybersecurity.
                        </p>
                    </div>
                </div>

                {/* SECOND PARAGRAPH BLOCK */}
                <p className="about-full-text">
                    ConnectME enables organizations to automate, monitor, and optimize operations remotely through secure, end-to-end IoT ecosystems. We bring deep expertise in LPWAN technologies, particularly LoRaWAN, and have deployed 150+ private LoRa networks across residential, commercial, and retail environments throughout the GCC.
                </p>

                <p className="about-full-text">
                    Our operations follow international quality, environmental, and occupational safety standards, ensuring consistent performance, regulatory compliance, and long-term sustainability. Through customer-centric innovation, secure system design, and continuous improvement, ConnectME is committed to shaping smarter cities, resilient utilities, and responsible digital infrastructure across the region and beyond.
                </p>

            </div>
            {/* VISION | MISSION | QUALITY */}
            <div className="about-cards-section">

                <div className="about-card">
                    <h2 className="about-card-title">Our Vision</h2>
                    <p>
                        To become a globally recognized Industrial IoT technology and manufacturing brand, leading the GCC market in Utility billing solutions, Smart valves and Meter manufacturing, and secure connected infrastructure.
                    </p>
                </div>

                <div className="about-card">
                    <h2 className="about-card-title">Our Mission</h2>
                    <p>
                        To design, manufacture, and deliver cyber-secure, innovative metering and billing solutions and sustainable Industrial IoT solutions across the GCC and beyond.
                    </p>
                    <p className="about-card-small">
                        We leverage IoT, AI, and data analytics to deliver end-to-end smart metering ecosystems, including meters, smart valves, gateways, network connectivity, AMR and Billing platforms.
                    </p>
                </div>

                <div className="about-card">
                    <h2 className="about-card-title">Quality Standards</h2>
                    <p>
                        At ConnectME Manufacturing LLC, quality is embedded across our design, manufacturing, and delivery processes. We adhere to international quality, environmental, occupational health & safety, and cybersecurity best practices, and our operations are certified to ISO 9001 / 14001 / 45001 standards.
                    </p>
                </div>

            </div>
            {/* ISO CERTIFICATIONS SECTION */}
            <div className="iso-section">

                <div className="iso-card">
                    <img src={iso9001} alt="ISO 9001:2015" className="iso-img" />
                    <p className="iso-label">ISO 9001:2015</p>
                </div>

                <div className="iso-card">
                    <img src={iso14001} alt="ISO 14001:2015" className="iso-img" />
                    <p className="iso-label">ISO 14001:2015</p>
                </div>

                <div className="iso-card">
                    <img src={iso45001} alt="ISO 45001:2018" className="iso-img" />
                    <p className="iso-label">ISO 45001:2018</p>
                </div>

            </div>
            {/* ABOUT THE FOUNDER SECTION */}
            <div className="founder-section">

                <h2 className="founder-title">About the Founder</h2>

                {/* FOUNDER 1 — IMAGE LEFT, TEXT RIGHT */}
                <div className="founder-row">
                    <img src={founder} alt="Mr. Kothandapani" className="founder-img" />

                    <div className="founder-info">
                        <h3 className="founder-name">Mr. Kothandapani</h3>
                        <p className="founder-role">Sales Director</p>

                        <ul className="founder-list">
                            <li>He has 22 years of experience in Industrial automation with last 7 years in IoT technology.</li>
                            <li>During his last tenure as Head of Operations, he saw the strong potential of IoT trends.</li>
                            <li>His expertise in Automation projects and Control Centers shaped his role in the industry.</li>
                            <li>This inspired him to begin the process of launching a tech startup in IoT.</li>
                            <li>Expertise: Corporate management, Project Management, Technical architect & LoRaWAN expert.</li>
                        </ul>
                    </div>
                </div>

                {/* FOUNDER 2 — IMAGE RIGHT, TEXT LEFT */}
                <div className="founder-row">

                    <div className="founder-info">
                        <h3 className="founder-name">Mr. Esakimuthu</h3>
                        <p className="founder-role">Technical Director</p>

                        <ul className="founder-list">
                            <li>18+ years experience in metering, software development, and IoT hardware.</li>
                            <li>Expert in billing software (IBM), AMR solutions, and smart valve technology.</li>
                            <li>Founder of TECHKNAVE and co-founded CONNECTME in 2022.</li>
                            <li>Specializes in metering & BMS protocols for new smart metering verticals.</li>
                            <li>Expertise: Innovation technologies, Metering & Billing, Embedded systems.</li>
                        </ul>
                    </div>

                    <img src={muthu} alt="Mr. Esakimuthu" className="founder-img" />
                </div>

                {/* 1. GANESAN RM - LEFT */}
                <div className="founder-row">
                    <img src={ganesan} alt="GANESAN RM" className="founder-img" />
                    <div className="founder-info">
                        <h3 className="founder-name">Ganesan RM</h3>
                        <p className="founder-role">DIRECTOR - REVENUE & GROWTH</p>
                        <ul className="founder-list">
                            <li>25 years of experience in industrial products (Process Instrumentation, Smart Water Meters, Automation) across the Middle East.</li>
                            <li>Achieved significant Regional Sales milestones, including multi-million Euro turnovers in previous roles.</li>
                            <li>Specializes in International Sales Leadership, Strategy Development, and New Channel Development.</li>
                            <li>Proven track record with major clients like DEWA, FEWA, ADWEA, and district cooling entities.</li>
                            <li>Expertise: Sales & Marketing Management, Product Analysis, and Cross-Cultural Leadership.</li>
                        </ul>
                    </div>
                </div>

                {/* 2. S.GOPALAKRISHNAN - RIGHT */}
                <div className="founder-row">
                    <div className="founder-info">
                        <h3 className="founder-name">S. Gopalakrishnan</h3>
                        <p className="founder-role">HEAD OF PROJECT & OPERATIONS</p>
                        <ul className="founder-list">
                            <li>Leads project execution and engineering teams for Middle East implementations.</li>
                            <li>Manages project scheduling, cost reduction strategies, and time/output control.</li>
                            <li>Primary interface for clients and consultants regarding project approvals and execution.</li>
                            <li>Provides technical support to the marketing team and oversees project resource allocation.</li>
                            <li>Ensures successful project delivery by managing team performance and adhering to strict timelines.</li>
                        </ul>
                    </div>
                    <img src={gopal} alt="S.GOPALAKRISHNAN" className="founder-img" />
                </div>

                {/* 3. MOHAMED NASIM V.M - LEFT */}
                <div className="founder-row">
                    <img src={mohamedNasim} alt="MOHAMED NASIM V.M" className="founder-img founder-img-top" />
                    <div className="founder-info">
                        <h3 className="founder-name">Mohamed Nasim V.M</h3>
                        <p className="founder-role">SALES DIRECTOR- KSA</p>
                        <ul className="founder-list">
                            <li>10+ years of experience in BMS, HVAC automation, and industrial control systems across the GCC.</li>
                            <li>Led high-value BMS and energy management projects exceeding QAR 25 million, managing end-to-end execution.</li>
                            <li>Expertise in HVAC automation, energy metering, and multi-protocol integrations (BACnet, Modbus, SCADA).</li>
                            <li>Drives regional growth, bridging engineering and commercial strategy for scalable automation solutions.</li>
                        </ul>
                    </div>
                </div>

                {/* 4. PRASANNA - RIGHT */}
                <div className="founder-row">
                    <div className="founder-info">
                        <h3 className="founder-name">Prasanna</h3>
                        <p className="founder-role">SALES HEAD - QATAR</p>
                        <ul className="founder-list">
                            <li> Leads revenue-generating initiatives through strategic promotion of smart metering & automation solutions.</li>
                            <li> Manages client relationships with consultants, contractors, integrators, and end-users in Qatar.</li>
                            <li> Organizes roadshows, technical events, and secures product approvals from local authorities.</li>
                            <li> Identifies new market segments and coordinates installation, testing, and commissioning services.</li>
                            <li> Key Sites: Lusail projects under multiple integrators and various Doha-based sites.</li>
                        </ul>
                    </div>
                    <img src={prasanna} alt="PRASANNA" className="founder-img founder-img-top" />
                </div>

                {/* 5. MAHESH STEPHEN - LEFT */}
                <div className="founder-row">
                    <img src={mahesh} alt="MAHESH STEPHEN" className="founder-img" />
                    <div className="founder-info">
                        <h3 className="founder-name">Mahesh Stephen</h3>
                        <p className="founder-role">SENIOR SALES MANAGER</p>
                        <ul className="founder-list">
                            <li> Proactively hunts for channel partners and develops customer relationships across the Middle East.</li>
                            <li> Develops new channel partners outside UAE to expand market reach.</li>
                            <li> Successfully secured approvals and closed new deals in Kuwait and Saudi Arabia.</li>
                            <li> Conducts frequent partner meetings within and outside UAE to support market growth.</li>
                            <li> Liaises with clients, consultants, and contractors to secure necessary project approvals.</li>
                        </ul>
                    </div>
                </div>

                {/* 6. JOGI JOSE - RIGHT */}
                <div className="founder-row">
                    <div className="founder-info">
                        <h3 className="founder-name">Jogi Jose</h3>
                        <p className="founder-role">METERING AND BILLING MANAGER</p>
                        <ul className="founder-list">
                            <li> Manages the full project lifecycle from initiation to closure, ensuring timely delivery of milestones.</li>
                            <li> Defines project scope, goals, and deliverables in collaboration with stakeholders.</li>
                            <li> Leads project meetings, tracks progress, and resolves issues to ensure smooth execution.</li>
                            <li> Coordinates with internal teams and vendors, and implements risk mitigation strategies.</li>
                            <li> Develops system connections to remote ERP billing servers and integrates IoT cloud automated data collection.</li>
                        </ul>
                    </div>
                    <img src={jogi} alt="JOGI JOSE" className="founder-img" />
                </div>

            </div>
            {/* TECHNOLOGY HERO SECTION */}
            <div className="tech-hero">
                <div className="tech-overlay">
                    <h1 className="tech-title">
                        Connecting People & <br /> Business With Technology
                    </h1>

                    <p className="tech-sub">
                        We make the best use of technology to serve your <br />
                        organizational goals
                    </p>

                    <p className="tech-sub">
                        We provide unrivalled technical support to ensure the <br />
                        successful delivery of your project.
                    </p>

                    <p className="tech-sub">
                        We consistently spend over Research & Development, <br />
                        Quality Improvement & innovative technologies.
                    </p>
                </div>
            </div>


        </div>
    );
}
