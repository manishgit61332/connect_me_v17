// src/data/productDetails.js
import lteIcon from "../assets/4G.webp";
import bacnetIcon from "../assets/BAC.webp";
import mbusIcon from "../assets/Mbus.webp";
import modbusIcon from "../assets/mod.webp";
import gaskimg from "../assets/gaskonnect.webp"
import mbus from "../assets/Mbuspic.webp";
import clampon from "../assets/products/clampon-meter.webp";
import protocol from "../assets/protocol.webp";
import tcp from "../assets/tcp.webp"
import smartImg from "../assets/products/smart-valve.webp";

const productDetails = {
  gaskonnect: {
    id: 1,
    title: "Wired Remote Reading Smart Gas Meter",
    subtitle: "GasKonnect",

    heroImage: gaskimg, // replace with actual gas meter image when available

    description: `
    Wired remote reading gas meter adopts M-BUS or RS485 Modbus 
    communication to enable remote meter reading and valve control. 
    It measures gas flow in pipelines and is equipped with a microcomputer 
    to store gas consumption, detect battery status, and monitor meter operation. 
    It helps utilities improve billing efficiency and eliminates the need 
    for manual meter reading.
  `,

    brochure: "/brochures/GASKONNECT.pdf", // or your actual brochure path

    features: [
      "Supports M-BUS or RS-485 communication (long-distance capable)",
      "Real-time meter reading with remote valve control",
      "Automatic periodic data uploading",
      "Electric suspension ball valve technology for reliable operation",
      "Low pressure loss design",
      "Powered through M-Bus (no external power supply needed)",
      "Single or double display (Register / LCD + Register)",
      "Anti-external electric & magnetic attack protection",
      "Accurate microprocessor-based gas measurement"
    ],

    advantages: [
      "Remote monitoring",
      "Reliable electric ball valve",
      "High accuracy",
      "Zero external power (via M-Bus)",
      "Tamper-protected",
      "Suitable for utility billing"
    ],
    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  }
  , mbusmaster: {
    id: 2,
    title: "UConnect – MBus Master U2601",
    subtitle: "UConnect",
    heroImage: mbus,

    description: `
    UConnect M-Bus Master (U2601) is a powerful and reliable industrial M-Bus 
    controller designed for connecting up to 250 utility meters. It converts 
    M-Bus signals to RS232, RS485 or TCP/IP, enabling seamless integration 
    with building management systems, billing software and cloud platforms. 
    The device includes overload protection, automatic load adjustment and 
    stable communication features suitable for long-term metering applications.
  `,

    brochure: "/brochures/Uconnect.pdf",

    features: [
      "Supports up to 250 M-Bus devices (depending on model)",               // Page 1
      "Converts M-Bus to RS232 / RS485 / TCP-IP",                           // Page 1
      "Automatic adjustment to M-Bus loads",                                // Page 1
      "Short-circuit & overload protection",                                // Page 1
      "DIN-rail mounting industrial design",                                // Page 1
      "Programmable TCP/IP parameters (IP & Port)",                         // Page 1
      "Stable communication up to 9600 baud rate",                          // Page 1
      "LED indicators for power & data transfer",                           // Page 1
      "Supports water, gas, BTU and electric utility meters"                // Page 2 diagram
    ],

    advantages: [
      "High Capacity (up to 250 meters)",
      "Robust Industrial Build",
      "Reliable Long-Term Operation",
      "Easy Integration with Systems",
      "Smart Protection Mechanisms",
      "Cloud & IoT Ready"
    ],

    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  },

  tkn202b: {
    id: 3,
    title: "Technkave - Clamp on Meters",
    subtitle: "Techknave",
    heroImage: clampon, // Reverted to original clampon.png

    description: `
      Technkave TKN 202 series Wall-mount Clamp on Ultrasonic BTU/ FLOW meter 
      provides accurate thermal energy and Liquid flow measurements from outside a pipe. 
      TKN 202 series can be applied to DN25mm to DN600mm pipe sizes with long-term stable measurement.
    `,

    brochure: "/brochures/ClampOn.pdf",

    features: [
      "Measurement accuracy +-0.5 to 1%",
      "Non-Invasive with no pipe disturbance",
      "Easy installation",
      "Wide range DN25mm to DN600mm",
      "Suitable for most pipe materials",
      "Modbus RTU / TCP / BACNET / IP and MBUS support",
      "4G / GPRS modem",
      "Weatherproof enclosure IP65",
      "BTU, Mwh, Velocity, Volumetric measurements",
      "Internal data logging"
    ],

    advantages: [
      "High Performance",
      "Compact",
      "Robust",
      "Reliable",
      "Cloud Connected",
      "Industrial Grade"
    ],

    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  },
  protocolConvertor: {
    id: 4,
    title: "UConnect – Protocol Convertors",
    subtitle: "Modbus to BACnet IP Converter",
    heroImage: protocol,   // replace when real image available

    description: `
    The UConnect Modbus to BACnet IP converter enables seamless
    communication between Modbus devices and BACnet IP systems.  
    It supports Modbus TCP and RTU simultaneously, allowing up to 64 
    Modbus devices to be converted into BACnet objects and monitored 
    from BMS, HVAC, lighting control, and energy management platforms.
  `,

    brochure: "/brochures/protocol-convertors.pdf",

    features: [
      "Supports Modbus TCP & RTU simultaneously",
      "Handles up to 64 Modbus devices",
      "BACnet IP communication support",
      "Configuration via IP web interface",
      "DIN rail mounting",
      "Stable and reliable communication",
      "Ideal for BMS, HVAC, and energy monitoring"
    ],

    advantages: [
      "High Performance",
      "Reliable Integration",
      "Industrial Grade",
      "Compact Design",
      "Easy Configuration",
      "Stable Communication"
    ],

    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  },
  serialToTcp: {
    id: 5,
    title: "Serial to TCP Convertor",
    subtitle: "U2301 – Modbus RTU to Ethernet",
    heroImage: tcp, // replace with real product image

    description: `
    The U2301 RS485 Modbus RTU to TCP Converter extends data communication 
    over Ethernet/LAN networks with secure two-way communication. It enables
    seamless transmission of Modbus slave data to centralized servers without
    requiring deep protocol knowledge. Supports multiple Modbus slave IDs,
    scaling, byte swap, polling modes, and full remote configuration.
  `,

    brochure: "/brochures/Serial-TCP-Convertors.pdf",

    features: [
      // From Page 1
      "Intelligent Modbus, Ethernet/LAN Connectivity",                         // :contentReference[oaicite:1]{index=1}
      "1 x RS-485 port for Modbus, 1 x TCP/IP port",                           // :contentReference[oaicite:2]{index=2}
      "Configure and read multiple slave IDs",                                 // :contentReference[oaicite:3]{index=3}
      "Supports data type, byte swapping and scaling",                         // :contentReference[oaicite:4]{index=4}
      "Supports Transparent Modbus or Device Polling modes",                   // :contentReference[oaicite:5]{index=5}
      "Smart inbuilt data handler ensures reliable transfer",                  // :contentReference[oaicite:6]{index=6}

      // From Page 2
      "Authorized number list for command & configuration",                    // :contentReference[oaicite:7]{index=7}
      "Configurable TCP/HTTP",
      "Remote configuration through TCP/IP",
      "LED indicators for Modbus TX/RX status",
      "Keep-Alive command for stable socket connection"
    ],

    advantages: [
      "Reliable Modbus to Ethernet connectivity",
      "Supports multiple slaves",
      "Cloud-ready integration",
      "Robust and secure communication",
      "Industrial-grade stability"
    ],

    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  },
  u902x: {
    id: 6,
    title: "Electromagnetic Flow Meter",
    subtitle: "High Precision",
    heroImage: gaskimg, // Using Gas Meter image as temporary proxy for Flow Meter visual style if better than 'protocol'
    description: "High-precision electromagnetic flow meter for conductive liquids.",
    brochure: "#",
    features: ["High accuracy", "Robust design", "Wide range of applications"],
    advantages: ["Reliable measurement", "Maintenance free", "Long service life"],
    communicationIcons: [{ icon: mbusIcon }, { icon: modbusIcon }]
  },
  u501x: {
    id: 7,
    title: "Compact BTU Meter",
    subtitle: "U50 Series",
    heroImage: mbus, // Using Mbus image as better placeholder than generic protocol for a meter
    description: "Compact thermal energy meter for precise heating and cooling measurement.",
    brochure: "#",
    features: ["Compact size", "Easy installation", "MID certified"],
    advantages: ["Cost-effective", "High precision", "Long battery life"],
    communicationIcons: [{ icon: mbusIcon }]
  },
  tkn2041: {
    id: 8,
    title: "Electromagnetic Flow Meter",
    subtitle: "TKN2041",
    heroImage: protocol, // Placeholder
    description: "Industrial grade electromagnetic flow meter for water and wastewater applications.",
    brochure: "#",
    features: ["IP68 protection", "Bi-directional measurement", "Empty pipe detection"],
    advantages: ["Rugged construction", "No moving parts", "Minimal pressure loss"],
    communicationIcons: [{ icon: modbusIcon }]
  },
  tkn2031: {
    id: 9,
    title: "Portable Clamp-On Flow Meter",
    subtitle: "TKN2031",
    heroImage: protocol, // Placeholder
    description: "Portable ultrasonic flow meter for non-intrusive flow verification and surveys.",
    brochure: "#",
    features: ["Battery powered", "Easy setup", "Data logging"],
    advantages: ["Portable", "Non-intrusive", "Versatile"],
    communicationIcons: [{ icon: modbusIcon }]
  },
  tkn2903: {
    id: 10,
    title: "Current Sensing Switch",
    subtitle: "TKN2903",
    heroImage: protocol, // Placeholder
    description: "Adjustable current sensing switch for monitoring electrical loads.",
    brochure: "#",
    features: ["Adjustable setpoint", "Solid state output", "LED indication"],
    advantages: ["Reliable load monitoring", "Compact", "Easy to use"],
    communicationIcons: []
  },
  tkn2201: {
    id: 11,
    title: "Smart Shut-off Valve",
    subtitle: "TKN2201",
    heroImage: smartImg, // Reverted to original smart.png
    description: "Battery-operated smart valve for remote water flow control.",
    brochure: "#",
    features: ["Remote control", "Leak detection", "Battery operated"],
    advantages: ["Prevent water damage", "Automated control", "Long battery life"],
    communicationIcons: [{ icon: mbusIcon }]
  },
  tkn2101: {
    id: 12,
    title: "Smart Shut-off Valve",
    subtitle: "TKN2101",
    heroImage: smartImg, // Reverted to original smart.png
    description: "Advanced smart valve with integrated flow monitoring capabilities.",
    brochure: "#",
    features: ["Flow monitoring", "Remote shut-off", "Tamper alarm"],
    advantages: ["Integrated solution", "Secure", "Efficient"],
    communicationIcons: [{ icon: mbusIcon }]
  },
  "4g-cloud": {
    id: 13,
    title: "4G Cloud Internet Gateway",
    subtitle: "UC420M",
    heroImage: lteIcon, // Placeholder
    description: "Industrial 4G gateway for secure and reliable IoT cloud connectivity.",
    brochure: "#",
    features: ["4G LTE connectivity", "VPN support", "Industrial grade"],
    advantages: ["Reliable connection", "Secure data transmission", "Easy deployment"],
    communicationIcons: [{ icon: lteIcon }]
  },
  "u2601u-s20": {
    id: 14,
    title: "USB MBus Master",
    subtitle: "U2601U",
    heroImage: mbus, // Correct image
    description: "Portable USB to M-Bus master for device configuration and reading.",
    brochure: "#",
    features: ["USB interface", "Short circuit protection", "Power over USB"],
    advantages: ["Portable", "Easy to use", "Driverless installation"],
    communicationIcons: [{ icon: mbusIcon }]
  },
  "u2701p-supply": {
    id: 15,
    title: "Power Supply",
    subtitle: "U2701P",
    heroImage: protocol, // Placeholder
    description: "Reliable 24V DC power supply for industrial automation components.",
    brochure: "#",
    features: ["Din-rail mount", "Overload protection", "High efficiency"],
    advantages: ["Stable power", "Compact", "Industrial grade"],
    communicationIcons: []
  },
  "ubill-enterprise": {
    id: 16,
    title: "UBill Enterprise",
    subtitle: "Billing Platform",
    heroImage: protocol, // Placeholder
    description: "Comprehensive utility billing and management platform for large portfolios.",
    brochure: "#",
    features: ["Multi-tenant support", "Automated invoicing", "Payment gateway integration"],
    advantages: ["Streamlined billing", "Reduced error", "Improved cash flow"],
    communicationIcons: []
  },
  uenergy: {
    id: 17,
    title: "UEnergy Dashboard",
    subtitle: "Energy Management",
    heroImage: protocol, // Placeholder
    description: "Advanced energy analytics dashboard for monitoring consumption and costs.",
    brochure: "#",
    features: ["Real-time monitoring", "Cost allocation", "Reporting tools"],
    advantages: ["Energy savings", "Visual insights", "Decision support"],
    communicationIcons: []
  },
  umanage: {
    id: 18,
    title: "UManage Software",
    subtitle: "Maintenance Management",
    heroImage: protocol, // Placeholder
    description: "Digital facility maintenance and asset management solution.",
    brochure: "#",
    features: ["Work order management", "Asset tracking", "Preventive maintenance"],
    advantages: ["Optimized operations", "Asset longevity", "Digital workflow"],
    communicationIcons: []
  },
  "ubill-mbus": {
    id: 19,
    title: "UBill M-Bus Reader",
    subtitle: "Software Tool",
    heroImage: protocol, // Placeholder
    description: "Free utility tool for reading and diagnosing M-Bus devices.",
    brochure: "#",
    features: ["Device scanning", "Data readout", "Network diagnostics"],
    advantages: ["Free tool", "Easy diagnostics", "Quick setup"],
    communicationIcons: [{ icon: mbusIcon }]
  },
  "ubill-ibm": {
    id: 20,
    title: "UBill IBM",
    subtitle: "Integrated Billing Module",
    heroImage: protocol, // Placeholder
    description: "Integrated billing module for seamless ERP connectivity.",
    brochure: "#",
    features: ["ERP Integration", "Automated data sync", "Custom rules"],
    advantages: ["Seamless data flow", "Efficiency", "Accuracy"],
    communicationIcons: []
  },
  "ubill-amr": {
    id: 21,
    title: "UBill AMR",
    subtitle: "Automated Meter Reading",
    heroImage: protocol, // Placeholder
    description: "Desktop-based automated meter reading software.",
    brochure: "#",
    features: ["Automated reading", "Report generation", "Local database"],
    advantages: ["Eliminate manual reading", "Fast processing", "Secure local data"],
    communicationIcons: []
  },
  "ubill-vcm": {
    id: 22,
    title: "UBill VCM",
    subtitle: "Voucher & Credit Management",
    heroImage: protocol, // Placeholder
    description: "System for managing utility credits and vouchers.",
    brochure: "#",
    features: ["Credit management", "Voucher generation", "User portal"],
    advantages: ["Prepayment control", "Revenue assurance", "User convenience"],
    communicationIcons: []
  },
  "ubill-prepaid": {
    id: 23,
    title: "UBill Prepaid",
    subtitle: "Prepayment System",
    heroImage: protocol, // Placeholder
    description: "Complete prepayment solution for utility vending.",
    brochure: "#",
    features: ["Token vending", "STS compliance", "Mobile app support"],
    advantages: ["Revenue protection", "Pay-as-you-go", "Flexible vending"],
    communicationIcons: []
  },
  "ubill-bms": {
    id: 24,
    title: "UBill BMS",
    subtitle: "Billing Management System",
    heroImage: protocol, // Placeholder
    description: "BMS integrated billing solution for smart buildings.",
    brochure: "#",
    features: ["BMS integration", "Live monitoring", "Tenant portal"],
    advantages: ["Smart building ready", "Unified platform", "Real-time control"],
    communicationIcons: []
  }


};

export default productDetails;
