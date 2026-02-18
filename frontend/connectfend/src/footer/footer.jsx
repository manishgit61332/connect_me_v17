import "./footer.css";
import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
const Logo = "/assets/connectMe_correctLogo_lowQual.png"; // Updated logo

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* COLUMN 1: BRAND + CTA */}
                <div className="footer-col footer-brand-col">
                    <div className="footer-logo">
                        <img src={Logo} alt="ConnectME" />
                    </div>
                    <p className="footer-desc">
                        Secure, scalable Industrial IoT and smart metering solutions trusted since 2016.
                    </p>

                    <div className="footer-cta-card">
                        <h3>Get IoT insights & product updates</h3>
                        <p>No spam. Only deployment stories, standards, and product launches.</p>
                        <form className="footer-form">
                            <input type="email" placeholder="work_email@company.com" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div className="social-links" style={{ marginTop: "20px" }}>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaFacebook /></a>
                    </div>
                </div>

                {/* COLUMN 2: NAVIGATE */}
                <div className="footer-col">
                    <h4 className="footer-heading">NAVIGATE</h4>
                    <ul className="footer-nav-list">
                        <li><a href="/products">Products</a></li>
                        <li><a href="/solutions">Solutions</a></li>
                        <li><a href="/case-studies">Case Studies</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

                {/* COLUMN 3: GLOBAL HQ */}
                <div className="footer-col">
                    <h4 className="footer-heading">GLOBAL HQ</h4>

                    <div className="contact-group">
                        <h5 className="sub-heading">UAE OFFICE</h5>
                        <p>
                            Warehouse-7, Al Qaseer Warehouse,<br />
                            Ras Al Khor Industrial Area-2,<br />
                            Dubai, UAE
                        </p>
                        <p>☎ +971 4 234 8480 <br /> / +971 4 234 9525</p>
                        <p>✉ info@connectme.biz</p>
                    </div>


                    <h4 className="footer-heading">REGIONAL OFFICES</h4>

                    <div className="contact-group">
                        <h5 className="sub-heading">INDIA</h5>
                        <p>
                            No: 208, Double Road,<br />
                            BTM Layout 2nd Stage,<br />
                            Bengaluru, Karnataka,<br />
                            India - 560076
                        </p>
                        <p>☎ +971 56 2250600</p>
                        <p>✉ sales@connectme.biz</p>
                    </div>


                </div>

                {/* COLUMN 4: REGIONAL OFFICES */}
                <div className="footer-col">
                    <h4 className="footer-heading">REGIONAL OFFICES</h4>

                    <div className="contact-group">
                        <h5 className="sub-heading">SAUDI ARABIA</h5>
                        <p>
                            Building No: 12, Al Hawari<br />
                            Street, Al Malaz District<br />
                            Riyadh, Saudi Arabia
                        </p>
                        <p>☎ +966 50 916 4160</p>
                        <p>✉ nasim@connectme.biz</p>
                    </div>

                    <div className="contact-group">
                        <h5 className="sub-heading">QATAR</h5>
                        <p>
                            First Floor, Building 98, Street<br />
                            220, B-Ring Road, Doha, Qatar
                        </p>
                        <p>☎ +971 56 2250600</p>
                        <p>✉ sales.qat@connectme.biz</p>
                    </div>

                    <div className="contact-group">
                        <h5 className="sub-heading">INTERNATIONAL SALES INQUIRY</h5>
                        <p>☎ +971 56 2250600</p>
                        <p>✉ sales@connectme.biz</p>
                    </div>
                </div>
            </div>
        </footer >
    );
}
