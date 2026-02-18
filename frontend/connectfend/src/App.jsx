// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Header from "./header/header";
import Footer from "./footer/footer";

import "./App.css";

// Lazy Load Pages
const LandingPage = lazy(() => import("./landingpage/landingpage"));
const ListingPage = lazy(() => import("./productsPage/ListingPage"));
const Blogs = lazy(() => import("./blogs1/blogs1"));
const BlogPage = lazy(() => import("./blogpage/blogpage"));
const AboutPage = lazy(() => import("./about/about"));
const Contact = lazy(() => import("./contact/contact"));
const Project = lazy(() => import("./project/project"));
const ProductDetails = lazy(() => import("./productDetails/productDetails"));
const ServicesPage1 = lazy(() => import("./servicespage/servicesPage1"));
const ServicesPage2 = lazy(() => import("./servicespage/servicesPage2"));
const ServiceDetail = lazy(() => import("./servicespage/ServiceDetail"));
const BillingService = lazy(() => import("./servicespage/BillingService"));
const AmcTraining = lazy(() => import("./servicespage/AmcTraining"));
const TechnicalConsultancy = lazy(() => import("./servicespage/TechnicalConsultancy"));
const PlcScada = lazy(() => import("./servicespage/PlcScada"));
const DevelopmentServices = lazy(() => import("./servicespage/DevelopmentServices"));

// Loading Fallback
const LoadingFallback = () => (
  <div style={{
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--color-bg)"
  }}>
    <div className="spinner" style={{
      width: "50px",
      height: "50px",
      border: "5px solid #f3f3f3",
      borderTop: "5px solid var(--color-primary)",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* NEW ROUTE - Unified Listing Page */}
          <Route path="/products" element={<ListingPage />} />

          {/* NEW PRODUCT ARCHITECTURE ROUTES */}
          <Route path="/products/:category" element={<ListingPage />} />
          <Route path="/products/:category/:subcategory" element={<ListingPage />} />
          <Route path="/products/:category/:subcategory/:productId" element={<ProductDetails />} />
          <Route path="/products/:category/:subcategory/:productId/:variantId" element={<ProductDetails />} />


          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Project />} />

          <Route path="/services/:category/:serviceId" element={<ServiceDetail />} />

          {/* Individual Service Pages */}
          <Route path="/services/billing" element={<BillingService />} />
          <Route path="/services/amc-training" element={<AmcTraining />} />
          <Route path="/services/consultancy" element={<TechnicalConsultancy />} />
          <Route path="/services/plc-scada" element={<PlcScada />} />
          <Route path="/services/development" element={<DevelopmentServices />} />

          {/* Unified Services Page */}
          <Route path="/services" element={<ServicesPage2 />} />

          {/* Services Pages (Keeping old ones for backup if needed, but menu now points to new) */}
          <Route path="/services1" element={<ServicesPage1 />} />
          <Route path="/services2" element={<ServicesPage2 />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
