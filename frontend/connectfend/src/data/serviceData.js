import smartImg from "../assets/smart.webp";
import remote1 from "../assets/remote1.webp";
import remote2 from "../assets/remote2.webp";
import iotl from "../assets/iotLowa.webp";
import items from "../assets/items.webp";
import left1 from "../assets/left1.webp";
import right1 from "../assets/right1.webp";
import utilityImg from "../assets/utility.webp";
import bill from "../assets/bill.webp";
import amc from "../assets/amc.webp";
import consult from "../assets/consultancy.webp";
import plc from "../assets/plc.webp";
import dev from "../assets/development.webp";
import networkSecurityDiagram from "../assets/network_security_diagram.png";
import utilityBillingDiagram from "../assets/utility_billing_diagram.png";
import leakDetectionDiagram from "../assets/leak_detection_diagram.png";
import aqiImage2 from "../assets/AQI_image_2.png";
import ubillLogo from "../assets/Ubill_logo.png";
import tosiboxKey from "../assets/Tosibox_Key.png";
import tosiboxLock from "../assets/Tosibox Lock – Secure Remote Access Endpoint.png";
import tosiboxHub from "../assets/Tosibox HUB – Central Access Gateway.png";
import advancedRemoteMonitoring from "../assets/Advanced Remote Monitoring & Secure Data Communication.jpg";
import tosiboxControl from "../assets/Tosibox Control – Central Management Platform.jpg";

import wiredLeak from "../assets/Wired Leak Detection System.png";
import wirelessLeak from "../assets/Wireless Water Leak Dectector.jpg";
import integratedMonitoring from "../assets/Integrated Monitoring via UCONNECT EDGE Gateway.png";
import utilityMaintenanceImg from "../assets/Utility Meter Maintenance_service_1.png";
import billingManagedServiceImg from "../assets/Billing Managed Service_1.png";
import amcTrainingImg from "../assets/AMC & Training_1.png";
import technicalConsultancyImg from "../assets/Technical Consultancy_1.png";
import plcServicesImg from "../assets/PLC & SCADA Services_1.png";
import developmentServicesImg from "../assets/Development & Services_1.png";

// Dashboard Images
import img77 from "../utilitybillingmetering/img77.jpg";
import img78 from "../utilitybillingmetering/img78.jpg";
import img79 from "../utilitybillingmetering/img79.jpg";
import img80 from "../utilitybillingmetering/img80.jpg";
import img90 from "../utilitybillingmetering/img90.jpg";
import img91 from "../utilitybillingmetering/img91.jpg";
import img92 from "../utilitybillingmetering/img92.jpg";
import img93 from "../utilitybillingmetering/img93.jpg";
import img94 from "../utilitybillingmetering/img94.jpg";

// Component Images
import wiredLeakSensor from "../assets/wired_leak_sensor.png";
import edgeGateway from "../assets/edge_gateway.png";
import streetLightDash1 from "../assets/intelligent Street Lighting Dashboards photos/intelligent Street Lighting Dashboard_1.png";
import streetLightDash2 from "../assets/intelligent Street Lighting Dashboards photos/intelligent Street Lighting Dashboards_2.png";
import streetLightDash3 from "../assets/intelligent Street Lighting Dashboards photos/intelligent Street Lighting Dashboard_3.png";
import hvacDash1 from "../assets/Intelligent HVAC Automated Scheduling Dashboard Images/Intelligent HVAC Automated Scheduling Dashboard Images_1.png";
import hvacDash2 from "../assets/Intelligent HVAC Automated Scheduling Dashboard Images/Intelligent HVAC Automated Scheduling Dashboard Images_2.png";


import intelligentHVACImg from "../assets/Intelligent HVAC Automated Scheduling.png";
import multiLevelAlertImg from "../assets/Multi-Level Alert & Notification System.jpeg";
import locationBasedLeakImg from "../assets/Location-Based Leak Detection (5-Wire Rope Cable).png";
import nonLocationLeakImg from "../assets/Non-Location Leak Detection (2-Wire Rope Cable).png";

const serviceData = [
    {
        category: "Solutions",
        slug: "solutions",
        items: [
            // ... (omitted items)
            {
                id: "utility-billing-metering",
                name: "Utility Billing and Metering",
                description: "Complete end-to-end utility metering and billing ecosystem combining precision hardware (UFLO ultrasonic meters, GIMA electromagnetic meters) with UBILL software platform for automated reading, multi-utility billing, and valve control management.",
                heroImage: utilityBillingDiagram,
                heroImages: [utilityBillingDiagram, ubillLogo],
                content: [
                    "ConnectME delivers a comprehensive utility billing and metering solution trusted across 800+ buildings, connecting 500,000+ meters for 120+ customers across the GCC. Our ecosystem combines precision metering hardware with intelligent software platforms to automate the entire billing cycle.",
                    "The solution integrates UFLO ultrasonic BTU/water meters (U60 Advanced, U50 Compact, U40 series), GIMA electromagnetic flow meters (GIMA-B, GIMA-H, GIMA-IB), and TKN clamp-on meters with our UBILL software suite for complete automation from meter reading to payment collection."
                ],
                subItems: [
                    { title: "Metering Hardware", desc: "UFLO U60/U50/U40 ultrasonic meters (DN15-DN500), GIMA electromagnetic meters (DN6-DN3000), TKN clamp-on meters (DN50-DN3000) with M-Bus, LoRaWAN, NB-IoT, Modbus connectivity." },
                    { title: "UBILL AMR", desc: "Automated Meter Reading system supporting M-Bus, LoRaWAN, NB-IoT, Modbus protocols. Real-time data collection, automatic scheduling, AI-enabled validation, and CSV/API export." },
                    { title: "UBILL IBM", desc: "Integrated Billing Module for multi-utility tariffs (water, electricity, gas, chilled water, hot water), prepaid metering, tenant management, invoice generation, and payment portal." },
                    { title: "UBILL VCM", desc: "Valve Control Management system to remotely operate smart M-Bus/LoRaWAN shutoff valves via cloud dashboard for disconnection/reconnection management." }
                ],
                brochure: "../files/Brochure.pdf",
                offerings: [
                    "UTILITY BILLING – INTEGRATED BILLING MODULE (IBM) - Standalone",
                    "UTILITY BILLING AS MANAGED SERVICE",
                    "CENTRALISED MDMS – METER DATA MANAGEMENT SERVICE",
                    "CONNECTED BUILDINGS – AUTOMATED METER READINGS (AMR)",
                    "PREPAID BILLING SERVICES"
                ],
                solutionsFor: [
                    "PROPERTY MANAGEMENT COMPANIES",
                    "COMMUNITY MANAGEMENT",
                    "OWNERS ASSOCIATION",
                    "DEVELOPERS",
                    "WATER DISTRIBUTION COMPANIES"
                ],

                softwareDashboard: [
                    img77, img78, img79, img80, img90, img91, img92, img93, img94
                ],
                brochure: "../files/Brochure.pdf"
            },
            {
                id: "network-security",
                name: "Network Security & Remote Monitoring Solutions",
                description: "Powered by ConnectME & Tosibox - Secure Infrastructure Access & Network Protection. Integrated Physical & Cyber Security for Smart Infrastructure.",
                heroImage: networkSecurityDiagram,
                content: [
                    "In today’s connected environment, smart buildings, utilities, industrial plants, and remote facilities rely heavily on digital systems and IoT networks. While connectivity improves efficiency, it also increases exposure to cyber threats and unauthorized physical access.",
                    "As a Platinum Distributor of Tosibox solutions, ConnectME delivers advanced Network Security and Remote Monitoring Solutions that integrate Cybersecurity, Secure physical access, Encrypted remote connectivity, and Centralized monitoring.",
                    "By combining Tosibox Locks, Keys, HUB, and Control platform with ConnectME’s system integration expertise, we provide a unified and highly secure infrastructure management solution."
                ],
                subItems: [
                    {
                        title: "Tosibox Lock – Secure Remote Access Endpoint",
                        img: tosiboxLock,
                        desc: "The Tosibox Lock is an industrial-grade secure connectivity device installed at remote sites, control panels, substations, and equipment rooms. It acts as a protected endpoint for encrypted remote access.",
                        technicalHighlights: [
                            "Industrial-grade Design: Rugged, fanless, and built for harsh environments",
                            "Plug & Go™ Connectivity: Automatically establishes secure remote network connections within minutes",
                            "Encrypted VPN Tunnel: End-to-end encrypted connection protecting data integrity",
                            "Firewall & NAT Friendly: Works seamlessly behind firewalls without manual port forwarding",
                            "Scalable Architecture: Manage multiple Locks centrally via TOSI HUB"
                        ],
                        keyBenefits: [
                            "Secure remote access for industrial systems",
                            "Remote maintenance and troubleshooting",
                            "IoT device connectivity",
                            "Multi-site automation monitoring",
                            "SCADA and Building Automation secure links"
                        ]
                    },
                    {
                        title: "Tosibox Key – Secure Authentication Device",
                        img: tosiboxKey,
                        desc: "TOSI Key® is an intelligent USB-based authentication device that enables secure remote access to networks and devices connected behind one or more TOSI Locks. It contains a secure crypto processor that manages encrypted credentials and automatically establishes secure VPN connections.",
                        keyFeatures: [
                            "Physical USB Keys",
                            "Mobile Client Keys (for secure access via smartphones or tablets)",
                            "SoftKeys (software-based digital key for virtual environments)"
                        ],
                        keyBenefits: [
                            "Strong multi-factor authentication",
                            "Centralized control over authorized access rights",
                            "Only devices with a matched Key can establish remote connections",
                            "Supports large distributed infrastructures securely"
                        ]
                    },
                    {
                        title: "Tosibox HUB – Central Access Gateway",
                        img: tosiboxHub,
                        desc: "A centralized platform for managing all Locks, Keys, and access permissions. The HUB allows drag-and-drop configuration of access groups, streamlined onboarding of network nodes, and easy segmentation of devices.",
                        keyFeatures: [
                            "Aggregates multiple Locks",
                            "Manages access groups",
                            "Enables site-to-site connectivity",
                            "Supports scalable deployments",
                            "Simplifies network segmentation"
                        ]
                    },
                    {
                        title: "Tosibox Control – Central Management Platform",
                        img: tosiboxControl,
                        desc: "A cloud-based management layer that provides centralized control, visibility, and auditing of all connected devices and remote access activity across distributed infrastructure.",
                        keyFeatures: [
                            "User and device management",
                            "Access policy configuration",
                            "Real-time monitoring",
                            "Event and audit logging",
                            "Security compliance reporting"
                        ]
                    },
                    {
                        title: "Secure Remote Site Monitoring & Data Collection",
                        img: advancedRemoteMonitoring,
                        desc: "ConnectME utilizes Tosibox Locks and Keys to enable secure monitoring and data collection from distributed and unmanned sites. Each site is securely connected to headquarters through encrypted VPN tunnels.",
                        keyFeatures: [
                            "Utility substations",
                            "Pump rooms and plant rooms",
                            "Telecom shelters",
                            "Renewable energy plants",
                            "Remote control panels",
                            "Outdoor infrastructure"
                        ]
                    }
                ],
                features: [
                    "End-to-end encryption",
                    "Strong mutual authentication",
                    "Isolated network environments",
                    "Protection against interception",
                    "Compliance with cybersecurity standards",
                    "Safe exchange of access and audit logs",
                    "Real-time equipment status data",
                    "Alarm and fault records monitoring"
                ],
                applications: [
                    "Commercial Buildings & Campuses",
                    "Utilities & Power Networks",
                    "Industrial & Manufacturing Plants",
                    "Healthcare Facilities",
                    "Telecom & Data Centers",
                    "Smart Communities"
                ],
                benefits: [
                    "Platinum Distributor of Tosibox",
                    "Proven smart infrastructure expertise",
                    "End-to-end system integration",
                    "Certified engineering support",
                    "Secure VPN-based connectivity",
                    "Local presence with global standards"
                ],
                conclusion: "ConnectME’s Network Security and Remote Monitoring Solutions, powered by Tosibox Locks, Keys, HUB, and Control platforms, provide a comprehensive foundation for protecting modern infrastructure. By integrating secure access management, encrypted VPN communication, centralized monitoring, and cloud intelligence, we enable organizations to operate safely, efficiently, and confidently."
            },
            {
                id: "aqi-monitoring",
                name: "AQI Monitoring",
                description: "Comprehensive Indoor Air Quality monitoring solution using LoRaWAN wireless sensors to track CO2, TVOC, PM2.5, temperature, and humidity for healthy building certification and occupant wellbeing.",
                heroImage: iotl,
                heroImages: [iotl, aqiImage2],
                content: [
                    "ConnectME's AQI (Air Quality Index) monitoring solution provides real-time visibility into indoor environmental conditions across schools, malls, hospitals, office buildings, and commercial facilities. Our wireless LoRaWAN sensor network enables comprehensive air quality tracking without complex wiring.",
                    "The solution combines multi-parameter IAQ sensors (CO2, TVOC, PM2.5, PM4, PM10) with temperature and humidity monitoring, delivering actionable insights through cloud dashboards and mobile apps. Ideal for healthy building certification (WELL, LEED) and ensuring occupant comfort and productivity."
                ],
                subItems: [
                    { title: "IAQ Sensors", desc: "LoRaWAN indoor air quality sensors monitoring CO2 (400-5000 ppm), TVOC (0-60000 ppb), PM2.5/PM4/PM10 particulate matter with ±3% accuracy and 10+ year battery life." },
                    { title: "Temperature & Humidity", desc: "Precision environmental sensors (±0.3°C, ±2% RH) for HVAC control loops and comfort monitoring, wireless LoRaWAN connectivity with 5-minute reporting intervals." },
                    { title: "Cloud Dashboard", desc: "Real-time monitoring dashboard with customizable alerts, historical trending, multi-location management, and automated reporting for compliance and certification." },
                    { title: "Mobile App", desc: "iOS/Android mobile application for on-the-go air quality monitoring, instant alerts, and facility management team notifications." }
                ],
                whatWeMonitor: [
                    { param: "CO2", desc: "Fresh air & ventilation quality" },
                    { param: "PM2.5/PM10", desc: "Dust, smoke, fine particles" },
                    { param: "VOC", desc: "Harmful chemical emissions" },
                    { param: "Temperature", desc: "Comfort & energy efficiency" },
                    { param: "Humidity", desc: "Prevent mold, ensure comfort" },
                    { param: "Air Pressure", desc: "Track ventilation balance" }
                ],
                howItWorks: [
                    { title: "Sensors Everywhere", desc: "Discreet IoT sensors capture real-time data on multiple air parameters." },
                    { title: "Cloud & AI Analytics", desc: "Data is analyzed instantly to detect patterns and risks." },
                    { title: "Instant Alerts & Reports", desc: "Stay informed with notifications and visual dashboards." },
                    { title: "BMS Integration", desc: "Works with Building Management Systems & Energy Platforms." }
                ],
                whereItWorksBest: [
                    { location: "Smart Offices", benefit: "Boost productivity & wellness" },
                    { location: "Schools & Universities", benefit: "Healthier classrooms for better learning" },
                    { location: "Hospitals & Clinics", benefit: "Protect patients & staff" },
                    { location: "Hotels & Hospitality", benefit: "Enhance guest comfort & trust" },
                    { location: "Industrial Spaces", benefit: "Ensure compliance & safety" }
                ],
                features: [
                    "CO2 monitoring (400-5000 ppm range)",
                    "TVOC (Total Volatile Organic Compounds) detection",
                    "PM2.5, PM4, PM10 particulate matter sensing",
                    "Temperature and humidity monitoring",
                    "LoRaWAN wireless connectivity (no wiring required)",
                    "10+ year battery life on sensors",
                    "Real-time alerts and notifications",
                    "Healthy building certification support (WELL, LEED)",
                    "Multi-location management",
                    "Historical data trending and reporting"
                ],
                applications: [
                    "Schools and educational facilities",
                    "Shopping malls and retail spaces",
                    "Hospitals and healthcare facilities",
                    "Office buildings and coworking spaces",
                    "Hotels and hospitality venues",
                    "Residential apartment complexes"
                ]
            },
            {
                id: "leak-detection",
                name: "Intelligent Water Leak Detection & Protection System",
                description: "Advanced intelligent water leak detection solutions powered by UCONNECT Leak Sensors, industrial-grade gateways, and smart cloud platform for real-time alerts, monitoring, and reporting.",
                heroImage: leakDetectionDiagram,
                content: [
                    "ConnectME provides advanced Intelligent Water Leak Detection Solutions powered by UCONNECT Leak Sensors, industrial-grade gateways, and a smart integrated cloud platform for real-time alerts, monitoring, and reporting.",
                    "Our solution helps residential communities, commercial buildings, data centers, hospitals, and industrial facilities prevent water damage, reduce maintenance costs, and ensure uninterrupted operations.",
                    "With both wireless and wired leak detection technologies, ConnectME delivers flexible and scalable solutions for every infrastructure requirement."
                ],
                subItems: [
                    {
                        title: "Wireless Leak Detection System (LoRaWAN-Based)",
                        img: wirelessLeak,
                        desc: "ConnectME’s wireless leak detection solution is built on LoRaWAN-enabled battery-powered sensors with rope-type sensing cables. These sensors are deployed across critical areas such as basements, pump rooms, HVAC zones, and pipe networks. When water comes in contact with the rope, the sensor instantly detects moisture and transmits the alert through a private LoRaWAN network to the UCONNECT EDGE gateway.",
                        keyFeatures: [
                            "Battery-operated wireless sensors",
                            "Long-range LoRaWAN communication",
                            "Rope-type leak sensing cable",
                            "Private LoRaWAN infrastructure",
                            "Low maintenance and easy deployment",
                            "Ideal for retrofit installations"
                        ]
                    },
                    {
                        title: "Integrated Monitoring via UCONNECT EDGE Gateway",
                        img: integratedMonitoring,
                        desc: "For both wireless and wired systems, ConnectME employs the UCONNECT EDGE Gateway as the central data aggregation and communication hub. All leak signals are routed to the EDGE gateway for processing, alerting, and system integration.",
                        keyFeatures: [
                            "Centralized data aggregation for all wired and wireless leak signals",
                            "Real-time leak detection and processing",
                            "Instant alerts and notifications",
                            "Remote access and web-based monitoring capability",
                            "Secure and reliable communication hub"
                        ]
                    },

                    {
                        title: "Location-Based Leak Detection (5-Wire Rope Cable)",
                        img: locationBasedLeakImg,
                        imgClass: "large-img",
                        desc: "This advanced system uses a 5-wire sensing cable (Two sensing wires, One reference wire, Power wires, Communication wires). When water touches the cable, resistance changes between the sensing wires. The controller analyzes this variation to calculate the exact distance of the leak.",
                        technicalHighlights: [
                            "MODBUS RS485 communication interface",
                            "Real-time leak distance reporting",
                            "Location accuracy up to ±1 meter",
                            "Extendable cable segments (5 m / 7.5 m)",
                            "Maximum extension up to 50 meters"
                        ],
                        keyBenefits: [
                            "Precise leak localization",
                            "Cable break and damage detection",
                            "Reusable after drying",
                            "Suitable for long cable routes",
                            "Ideal for data centers, HVAC rooms, and basements"
                        ]
                    },
                    {
                        title: "Non-Location Leak Detection (2-Wire Rope Cable)",
                        img: nonLocationLeakImg,
                        desc: "This system detects water presence in a defined zone without pinpointing the exact location. It uses a 2-wire rope cable connected to a controller that provides NO/NC dry contact outputs when water is detected.",
                        technicalHighlights: [
                            "Zone-based leak detection",
                            "NO/NC relay outputs",
                            "Cable extension up to 250 meters",
                            "Standard cable lengths: 5 m and 10 m",
                            "Plug-and-play extensions"
                        ],
                        keyBenefits: [
                            "Cost-effective solution",
                            "Simple installation",
                            "Reliable zone monitoring",
                            "Suitable for plant rooms and pipe corridors"
                        ]
                    },
                    {
                        title: "Multi-Level Alert & Notification System",
                        img: multiLevelAlertImg,
                        desc: "From the UCONNECT EDGE gateway, alerts are delivered through multiple channels:",
                        multiLevelAlerts: [
                            { type: "1️⃣ Local Alarm System", points: ["Hooter and siren alerts", "Reset and acknowledgment support", "Immediate on-site indication"] },
                            { type: "2️⃣ BMS / SCADA Integration", points: ["BACnet & Modbus communication", "Seamless connection to building management systems", "Centralized monitoring"] },
                            { type: "3️⃣ Cloud Platform Monitoring", points: ["Real-time dashboards", "Historical data storage", "Performance analytics", "Automated reporting"] },
                            { type: "4️⃣ Mobile Notifications", points: ["WhatsApp alerts", "SMS notifications", "Email reports", "Direct alerts to FM and maintenance teams"] }
                        ]
                    },

                ],
                benefits: [
                    "Early leak detection and prevention",
                    "Reduced asset damage",
                    "Lower maintenance costs",
                    "Improved operational reliability",
                    "Faster fault response",
                    "Enhanced safety",
                    "Long-term infrastructure protection"
                ],
                conclusion: "ConnectME’s Smart Water Leak Detection Solution provides a complete, reliable, and scalable platform for protecting critical infrastructure from water-related risks. By combining advanced sensing technologies, intelligent gateways, cloud analytics, and instant notifications, we empower facility managers to proactively safeguard their assets and operations."
            },
            {
                id: "intelligent-street-lighting",
                name: "Smart Street Lighting Management Solution",
                description: "ConnectME’s Smart Street Lighting Management Solution enables centralized, cloud-based control and monitoring of large-scale outdoor lighting infrastructure across residential communities and public spaces.",
                heroImage: left1,
                content: [
                    "ConnectME’s Smart Street Lighting Management Solution enables centralized, cloud-based control and monitoring of large-scale outdoor lighting infrastructure across residential communities and public spaces. Using UCONNECT EDGE controllers installed in feeder panels, lighting schedules, operational commands, and energy data are managed remotely through a secure cloud platform.",
                    "The solution supports automated and manual operation, zone-based control, real-time monitoring, and detailed reporting. Integrated asset management and maintenance tools help teams track equipment health and perform preventive maintenance efficiently.",
                    "This end-to-end smart lighting platform enhances operational efficiency, reduces energy consumption, improves asset lifespan, and enables sustainable community management."
                ],
                subItems: [
                    {
                        title: "Centralized Cloud-Based Control",
                        desc: "At the heart of the solution lies ConnectME’s secure cloud platform. All street lighting schedules are configured centrally for the entire year and seamlessly pushed to UCONNECT EDGE devices installed in feeder panels. Operators can manage thousands of lighting points from a single dashboard, eliminating the need for manual intervention on-site.",
                        keyFeatures: [
                            "Automatic ON/OFF operation based on predefined schedules",
                            "Remote configuration and updates",
                            "Real-time system visibility",
                            "Centralized command execution"
                        ]
                    },
                    {
                        title: "Intelligent Automation with Manual Flexibility",
                        desc: "The platform supports both AUTO and Manual modes, ensuring flexibility for different operational scenarios. Lighting systems can be grouped into zones based on location, usage, or priority. The operations team can remotely switch lights ON/OFF, modify schedules, or override automation whenever required, especially during special events, emergencies, or maintenance activities."
                    },
                    {
                        title: "Real-Time Energy Monitoring & Optimization",
                        desc: "Each feeder panel is continuously monitored for energy consumption and operational status. This helps community management teams optimize energy usage, reduce operational costs, and meet sustainability goals.",
                        keyFeatures: [
                            "Real-time energy data",
                            "Historical consumption analysis",
                            "Performance comparison across zones",
                            "Loss and inefficiency detection"
                        ]
                    },
                    {
                        title: "Integrated Maintenance & Asset Management",
                        desc: "Maintenance teams use the platform to manage assets and perform preventive maintenance efficiently. With digital asset management, teams can proactively address issues before failures occur, extending the lifespan of lighting infrastructure.",
                        keyFeatures: [
                            "Equipment status",
                            "Maintenance history",
                            "Fault logs",
                            "Asset lifecycle data"
                        ]
                    },
                    {
                        title: "Automated Reporting & Fault Management",
                        desc: "The cloud engine automatically generates reports and analytics. Any abnormal conditions such as power trips, overloads, communication failures, or device faults are instantly detected and recorded.",
                        keyFeatures: [
                            "Daily, weekly, and monthly reports",
                            "Energy consumption summaries",
                            "Trip and error logs",
                            "Performance analytics"
                        ]
                    },
                    {
                        title: "Instant Alerts via WhatsApp Integration",
                        desc: "To ensure rapid response, ConnectME has integrated automated WhatsApp notifications into the system. Dedicated groups are created for maintenance teams, operators, and community managers. Whenever an abnormal event occurs, the EDGE controllers automatically trigger alerts.",
                        keyFeatures: [
                            "Faster issue resolution",
                            "Reduced downtime",
                            "Improved coordination",
                            "Better service reliability"
                        ]
                    },
                    {
                        title: "Powerful UCONNECT EDGE Gateway",
                        desc: "The solution is powered by the UCONNECT EDGE gateway, a robust industrial-grade controller designed for smart infrastructure management. This ensures seamless interoperability with existing systems, sensors, and third-party platforms.",
                        keyFeatures: [
                            "Multi-port connectivity",
                            "Multi-protocol support",
                            "MQTT, HTTPS, and FTP communication",
                            "LoRaWAN forwarder gateway capability",
                            "Modbus and BACnet integration"
                        ]
                    }
                ],
                benefits: [
                    "Improve operational efficiency",
                    "Reduce energy consumption",
                    "Enhance asset visibility",
                    "Enable data-driven decisions",
                    "Achieve sustainability targets",
                    "Transform conventional lighting into smart infrastructure"
                ],
                conclusion: "ConnectME’s smart street lighting platform demonstrates how modern IoT and cloud technologies can revolutionize urban infrastructure management. With centralized control, intelligent automation, real-time monitoring, and integrated maintenance workflows, communities can now manage their lighting systems more effectively than ever before. As smart cities continue to evolve, solutions like these play a vital role in building safer, greener, and more efficient living environments.",
                softwareDashboard: [
                    streetLightDash1, streetLightDash2, streetLightDash3
                ]
            },
            {
                id: "intelligent-hvac",
                name: "Intelligent HVAC Automated Scheduling",
                description: "Smart Classroom HVAC Automation enables universities to automatically control classroom air-conditioning based on academic schedules using the UCONNECT-EDGE on-premise gateway.",
                heroImage: intelligentHVACImg,
                content: [
                    "Smart Classroom HVAC Automation enables universities to automatically control classroom air-conditioning based on academic schedules. Using the UCONNECT-EDGE on-premise gateway, classroom allocations synced from the cloud are translated into real-time BACnet / Modbus commands to FAHUs and HVAC systems.",
                    "The solution ensures that AC systems are switched ON/OFF and thermostats set to optimal temperatures only during allocated class hours, reducing energy wastage while maintaining occupant comfort. A centralized cloud platform provides visibility into live HVAC operational status across multiple campuses, while edge intelligence ensures reliable, low-latency control even during network disruptions.",
                    "Universities today operate across multiple campuses with hundreds of classrooms, each following dynamic academic schedules. Manually managing HVAC operations in such environments leads to energy inefficiencies, higher operational costs, and inconsistent indoor comfort.",
                    "To address this challenge, leading universities across GCC have deployed an Edge–Cloud based Smart Classroom HVAC Automation solution powered by the UCONNECT-EDGE gateway."
                ],
                subItems: [
                    { title: "UCONNECT-EDGE Gateway", desc: "On-premise gateway that syncs classroom schedules from the cloud and translates them into real-time BACnet/Modbus commands for HVAC control." },
                    { title: "Cloud Scheduling Platform", desc: "Centralized platform for managing classroom schedules, monitoring live HVAC status across multiple campuses, and ensuring operational transparency." },
                    { title: "BACnet & Modbus Integration", desc: "Direct protocol integration with existing BMS infrastructure for seamless FAHU and HVAC system control without hardware replacement." },
                    { title: "Edge Intelligence", desc: "Deterministic control at the edge ensures reliable, low-latency HVAC operations even during temporary network disruptions." }
                ],
                howItWorks: [
                    { title: "Cloud Schedule Sync", desc: "Classroom schedules are centrally managed and uploaded to a secure cloud platform, then automatically synchronized with on-premise UCONNECT-EDGE gateways." },
                    { title: "Real-time Allocation Processing", desc: "Based on real-time classroom allocations, the gateway determines which FAHUs need to be activated or deactivated." },
                    { title: "FAHU ON/OFF Control", desc: "FAHUs are switched ON/OFF automatically based on scheduled class hours, eliminating manual intervention." },
                    { title: "Temperature Optimization", desc: "Thermostats are set to predefined optimal temperatures, ensuring comfort while maximizing energy efficiency." }
                ],
                features: [
                    "Schedule-driven HVAC automation across multiple campuses",
                    "Real-time FAHU ON/OFF and temperature control",
                    "Edge-based BACnet & Modbus integration with existing BMS",
                    "Live operational visibility via cloud dashboards",
                    "Multi-protocol support: MQTT, HTTPS, FTP, LoRaWAN forwarder",
                    "Reduced energy consumption and improved asset utilization",
                    "Deterministic control with edge intelligence",
                    "Automatic schedule synchronization from cloud"
                ],
                applications: [
                    "University campuses and educational institutions",
                    "Corporate training centers",
                    "Conference and convention centers",
                    "Multi-building commercial complexes",
                    "Smart campus initiatives",
                    "District cooling/heating systems"
                ],
                benefits: [
                    "Significant energy cost savings",
                    "Improved classroom comfort and consistency",
                    "Zero manual intervention for HVAC scheduling",
                    "Seamless integration with existing BMS infrastructure",
                    "Scalable architecture for future campus expansion",
                    "Contribution to sustainability and carbon reduction goals",
                    "Enhanced operational excellence",
                    "Quick ROI through reduced energy consumption"
                ],
                softwareDashboard: [
                    hvacDash1, hvacDash2
                ],
                conclusion: "By combining edge intelligence with centralized cloud scheduling, Universities achieved a highly efficient, scalable, and intelligent HVAC automation system. The solution demonstrates how smart campus technologies can directly contribute to sustainability goals while enhancing operational excellence."
            }
        ]
    },
    {
        category: "Services",
        slug: "services",
        items: [
            {
                id: "utility-maintenance",
                name: "Utility Meter Maintenance",
                description: "Ensuring meters stay healthy for accurate billing. Includes AI-enabled AMR validation and faulty meter replacements.",
                heroImage: utilityMaintenanceImg,
                content: [
                    "A tenant metering provides the overview and insights needed for accurate billing of water and energy consumption. Highly accurate and reliable meters combined with intuitive meter reading, correct billing platform and proper validation.",
                    "ConnectME offers meter maintenance service to ensure meters stay healthy, critical for correct billing. We do maintenance service on faulty meters replacements."
                ]
            },
            {
                id: "billing",
                name: "Billing Managed Service",
                description: "End-to-end billing management, from data grouping and invoice generation to payment portal and collection services.",
                heroImage: billingManagedServiceImg,
                content: [
                    "Our payment portal allows residents to download bills and check their account from the comfort of their own home. Billing system is a combination of software and hardware that receives service usage information.",
                    "Collection is the process of chasing past due receivables on customer account. This usually involves sending notifications to the customer and taking appropriate actions in absence of due payments."
                ]
            },
            {
                id: "amc",
                name: "AMC & Training",
                description: "Comprehensive Annual Maintenance Contract and professional training services for metering, billing, PLC, SCADA, and automation systems.",
                heroImage: amcTrainingImg,
                content: [
                    "ConnectME provides comprehensive Annual Maintenance Contract (AMC) and professional training services for metering, billing, PLC, SCADA, and automation systems supplied and implemented by us. Our AMC services ensure continuous system performance through preventive maintenance, regular inspections, software updates, and rapid fault resolution. We support both hardware and software platforms to maximize system reliability and operational uptime.",
                    "In addition, ConnectME delivers structured technical training programs for operators, engineers, and maintenance teams, enabling effective system operation and troubleshooting. Our hands-on training covers system configuration, monitoring, reporting, and best practices. With dedicated support teams and domain expertise, we help clients achieve long-term efficiency, compliance, and return on investment from their automation and monitoring solutions."
                ]
            },
            {
                id: "consultancy",
                name: "Technical Consultancy",
                description: "Expert consultancy for IoT protocols, Plant Optimization, Networking & Security.",
                heroImage: technicalConsultancyImg,
                content: [
                    "Specialized focusing on everything from market research and strategy consulting to hardware and software specialists to help navigate the minefield of IoT protocols.",
                    "We offer: Plant Optimization, Networking & Security, Audit trails, IoT enablement."
                ]
            },
            {
                id: "plc",
                name: "PLC & SCADA Services",
                description: "Control systems and automation services for industrial processes.",
                heroImage: plcServicesImg,
                features: [
                    "Plant / machine upgrade – retrofits",
                    "PLC / SCADA / HMI – modifications",
                    "Maintenance contracts – AMC / SLA",
                    "Engineering Services",
                    "Manpower deployment"
                ]
            },
            {
                id: "development",
                name: "Development & Services",
                description: "Custom Web, Mobile, and Desktop Application Development.",
                heroImage: developmentServicesImg,
                content: [
                    "Application development services allow you to build consumer-facing apps for a range of digital platforms like mobile App, web, desktop.",
                    "We rely on our technological expertise and specialized industry experience to develop any type of web, mobile App, desktop, and hybrid app per your business requirements."
                ]
            }
        ]
    }
];

export default serviceData;
