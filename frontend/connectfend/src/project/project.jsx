import React from "react";
import "./project.css";
import projectData from "../data/ongoingProjects";

import projects from "../data/projectsData";
import KeyCustomersImg from "../assets/Key Customers_1.jpeg";
import EndUsersImg from "../assets/Ends Users_1.jpeg";
import IntegratorsImg from "../assets/Integrators_1.jpeg";

import SEO from "../components/SEO";

export default function OngoingProjects() {

    // Show only top 4 projects for existing "Our Projects"
    const topProjects = projects.slice(0, 4);

    return (
        <div className="projects-container">
            <SEO
                title="Our Work & Projects - ConnectME"
                description="Explore our portfolio of successful smart metering and IoT deployments across the GCC. See our ongoing and completed projects."
            />

            {/* TABS NAVIGATION */}
            <div className="work-tabs">
                <button className="work-tab" onClick={() => document.getElementById('our-projects').scrollIntoView({ behavior: 'smooth' })}>
                    Our Projects
                </button>
                <button className="work-tab" onClick={() => document.getElementById('our-clients').scrollIntoView({ behavior: 'smooth' })}>
                    Our Clients
                </button>

                <button className="work-tab" onClick={() => document.getElementById('ongoing-projects').scrollIntoView({ behavior: 'smooth' })}>
                    Ongoing Projects
                </button>
            </div>

            {/* 1. OUR PROJECTS (Top 4) */}
            <div id="our-projects" className="projects-section">
                <h2 className="projects-title">Our Projects</h2>

                <div className="projects-grid">
                    {topProjects.map((proj) => (
                        <div className="project-card" key={proj.id}>
                            <img src={proj.image} className="project-img" alt={proj.title} />

                            <div className="project-info">
                                <span className="project-line1">
                                    <h3 className="project-title1">{proj.title}</h3>
                                    <p className="project-location1">{proj.location}</p></span>
                                <p className="project-desc1">{proj.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 2. OUR CLIENTS */}
            <div id="our-clients" className="clients-section">
                <h2 className="clients-title">Our Clients</h2>

                <div className="client-category">
                    <h3 className="category-title">Key Customers</h3>
                    <div className="category-content">
                        <img
                            src={KeyCustomersImg}
                            alt="Key Customers"
                            className="client-category-image"
                        />
                    </div>
                </div>

                <div className="client-category">
                    <h3 className="category-title">Key End Users</h3>
                    <div className="category-content">
                        <img
                            src={EndUsersImg}
                            alt="Key End Users"
                            className="client-category-image"
                        />
                    </div>
                </div>

                <div className="client-category">
                    <h3 className="category-title">Integrators</h3>
                    <div className="category-content">
                        <img
                            src={IntegratorsImg}
                            alt="Integrators"
                            className="client-category-image"
                        />
                    </div>
                </div>
            </div>

            {/* 3. ONGOING PROJECTS */}
            <div id="ongoing-projects" className="projects-section">
                <h2 className="projects-title">Ongoing Projects</h2>

                <div className="projects-grid">
                    {projectData.map((proj) => (
                        <div className="project-card" key={proj.id}>
                            <img src={proj.image} className="project-img" alt={proj.title} />

                            <div className="project-info">
                                <span className="project-line">
                                    <h3 className="project-name">{proj.title}</h3>
                                    <p className="project-location">{proj.location}</p>
                                </span>
                                <p className="project-desc">{proj.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
