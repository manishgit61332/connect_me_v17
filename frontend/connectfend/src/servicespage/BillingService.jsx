// src/servicespage/BillingService.jsx
import React from "react";
import "./services.css";
import bill from "../assets/bill.webp";
import SEO from "../components/SEO";

export default function BillingService() {
    return (
        <div className="services-page">
            <SEO
                title="Billing Managed Service - ConnectME"
                description="Professional billing managed services for utility metering, tenant billing, and payment collection automation."
            />

            <section className="billing-wrapper">
                <h2 className="billing-title">Billing Managed Service</h2>

                <div className="billing-row">
                    <div className="billing-text">
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

                    <img src={bill} alt="Billing Service" className="billing-img" />
                </div>
            </section>
        </div>
    );
}
