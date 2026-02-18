import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import bgVideo from "../assets/hero-video.mp4"; // change path
import Products from "../products1/products1";
import Testimonials from "../testimonials/testimonial";
import WhyTrust from "../whytrust/whytrust";
import Licensing from "../licenses/licensing";
import LatestNews from "../newsdata/latestNews";

import SEO from "../components/SEO";

export default function LandingPage() {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  return (
    <div>
      <SEO
        title="ConnectME - Smart Metering & Industrial IoT Solutions"
        description="ConnectME delivers end-to-end smart metering, utility billing, and industrial IoT solutions across the GCC. Trusted by 120+ customers."
      />
      <div className="landing-container">
        <div className="hero-content-wrapper">

          {/* Left Column: Text Content */}
          <div className="hero-text-section">
            <h1 className="hero-title">
              Meters. Billing. <br />
              <span className="highlight-text">Connectivity.</span>
            </h1>
            <p className="hero-subtitle">
              A complete ecosystem for reliability. We engineer precision hardware and automated software solutions to connect your business needs with real value.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact" className="cta-button primary">Get Started</Link>
              <Link to="/products" className="cta-button secondary">View Products</Link>
            </div>
          </div>

          {/* Right Column: Windowed Video */}
          <div className="hero-window">
            {/* LOADER OVERLAY */}
            {!isVideoLoaded && (
              <div className="video-loader">
                <div className="spinner"></div>
              </div>
            )}

            <video
              className={`landing-video ${isVideoLoaded ? "loaded" : ""}`}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
      <Products />
      <Testimonials />
      <WhyTrust />
      <Licensing />
      <LatestNews />
    </div>

  );
}
