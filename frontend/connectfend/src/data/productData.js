// src/data/productData.js
// Master Data Source for ConnectMe Products
import logo from "../assets/logo.webp"; // Fallback image
import ufloU60Img from "../assets/uflo_u60_advanced.webp";
import gimaBImg from "../assets/products/gima_b_electromagnetic.webp";
import ufloU50BulkImg from "../assets/products/uflo_u50_bulk.webp";
import ufloU50CompactImg from "../assets/products/uflo_u50_compact.webp";
import ufloU40CompactPdf from "../assets/brochures/uflo_u40_compact.pdf";
import ufloU40BulkPdf from "../assets/brochures/uflo_u40_bulk.pdf";
import ufloU60Pdf from "../assets/brochures/uflo_u60.pdf";
import ufloU50Pdf from "../assets/brochures/uflo_u50.pdf";
import tknSwitchPdf from "../assets/brochures/tkn2101c_switch.pdf";
import tknValvePdf from "../assets/brochures/tkn29xxc_valve.pdf";
import tkn204Pdf from "../assets/brochures/tkn204_enhanced.pdf";
import tkn205Pdf from "../assets/brochures/tkn205_insertion.pdf";
import tkn202Pdf from "../assets/brochures/tkn202_clampon.pdf";
import gimaBPdf from "../assets/brochures/gima_b.pdf";
import gimaHPdf from "../assets/brochures/gima_h.pdf";
import gimaIbPdf from "../assets/brochures/gima_ib.pdf";
import tkn2801Pdf from "../assets/brochures/tkn2801_gas.pdf";
import tkn2810xPdf from "../assets/brochures/tkn2810x_gas.pdf";
import mbusMasterPdf from "../assets/brochures/mbus_master.pdf";
import mbusLevelPdf from "../assets/brochures/mbus_level.pdf";
import mbusUsbPdf from "../assets/brochures/mbus_usb.pdf";
import edgeModulePdf from "../assets/brochures/edge_module.pdf";
import tosilockPdf from "../assets/brochures/tosilock.pdf";
import smpsPdf from "../assets/brochures/smps_24v.pdf";
import leakPdf from "../assets/brochures/leak_detection.pdf";
import bmsIntegrationPdf from "../assets/brochures/bms_integration.pdf";
import tenantBillingPdf from "../assets/brochures/tenant_billing.pdf";
import emsPlatformPdf from "../assets/brochures/ems_platform.pdf";
import vcmPlatformPdf from "../assets/brochures/vcm_platform.pdf";
import mmsPlatformPdf from "../assets/brochures/mms_platform.pdf";

// New Product Images
import mbusLevelImg from "../assets/products/Mbus level Converter.webp";
import mbusUsbImg from "../assets/products/usb mbus master.webp";
import mbusPanelImg from "../assets/products/M-bus gateway panel.webp";
import modbusGwImg from "../assets/products/modbus gateway.webp";
import cloudgateImg from "../assets/products/Cloudgate mini.webp";
import wirnetIndoorImg from "../assets/products/Wirnet LoraWan indoor gateway.webp";
import wirnetOutdoorImg from "../assets/products/wirnet istation lorawan outdoor gateway.webp";
import tosiboxImg from "../assets/products/Tosibox.webp";
import lorawanGwImg from "../assets/products/Lorawan gateway.webp";

import u60AdvImg from "../assets/products/u60 advanced series.webp";
import u70AdvImg from "../assets/products/u70.webp";
import u50NewImg from "../assets/products/U50_Compact_New.webp";
import u50CompactImgNew from "../assets/products/u50 compact.webp";
import u50BulkImgNew from "../assets/products/u50-bulk btu meter.webp";
import u40BulkImgNew from "../assets/products/uflo_u40_bulk.webp";
import gimaHImg from "../assets/products/Gima_H_electromagnetic Heat meter.webp";
import gimaIbImg from "../assets/products/GIMA_IB_insertion_electromagentic flo meter.webp";
import tkn202Img from "../assets/products/Techknave 202 Standard.webp";
import tkn204Img from "../assets/products/TKN enhanced.webp";
import tkn205Img from "../assets/products/tkn insertion clamp on btu meter.webp";
import tkn203Img from "../assets/products/TKN203F_portable_flow meter.webp";
import giwu226Img from "../assets/products/GIWU-226 Series Ultrasonic Flow Meter.webp";
import tkn2801pImg from "../assets/products/Gas Konnect tkn2801P.webp";
import tkn2810xImg from "../assets/products/Gas Konnect tkn2810X smart gas meter.webp";
import tkn2201Img from "../assets/products/mbus_smart_valves_segregated_tkn2201.webp";
import tknSwitchImg from "../assets/products/Smart compact switch.webp";
import tknRelayImg from "../assets/products/Gas Konnect relay module.webp";
import tknSmartValveImg from "../assets/products/Techknave smart valve compact.webp";
import u51Img from "../assets/products/U51-Intelligent Btu meter with valve.webp";
import u40CompactImg from "../assets/products/u40 compact.webp";
import uconnectEdgeImg from "../assets/products/Uconnect edge module.webp";
import mbusMasterImg from "../assets/products/Mbus Master.webp";
import serialTcpImg from "../assets/products/Serial to TCP Converter.webp";
import u2301Img from "../assets/products/U2301_Serial_to_TCP.webp";
import tkn280xcImg from "../assets/products/Gas Konnect tkn2801C _ pulse reader + relay switch.webp";
import tkn2803pImg from "../assets/products/tkn2803p_pulse_lorawan.webp";
import modbusLorawanImg from "../assets/products/modbus_lorawan_converter.webp";
import wiredLeakSensorImg from "../assets/products/wired_leak_sensor.webp";

import decentlabIamImg from "../assets/products/decentlab_iam.webp";

// Images (using placeholders where needed, map real imports if available)
import uconnectPsImg from "../assets/products/uconnect_din_rail_ps.webp";
import milesightImg from "../assets/products/milesight_am300.webp";
import uconnectThmImg from "../assets/products/uconnect_u300_thm.webp";
import uconnectAldImg from "../assets/products/uconnect_ald_s.webp";
import uconnectZoneLeakImg from "../assets/products/uconnect_zone_leak.webp";
import uconnectSinglePointLeakImg from "../assets/products/uconnect_single_point_leak.webp";
import uconnectClsImg from "../assets/products/uconnect_cls.webp";

const placeholder = logo;

const productData = [
    // =========================================================================
    // METERS
    // =========================================================================
    {
        category: "Meters",
        slug: "meters",
        subcategories: [
            {
                name: "Inline Ultrasonic BTU Meters",
                slug: "inline-ultrasonic-btu",
                products: [
                    {
                        "id": "uflo-u60-advanced-series",
                        "name": "Uflo U60 Advanced Series",
                        "description": "Uflo ultrasonic BTU Meter- U60 Advanced series\nSize : DN15 to DN40\nTemp Sensor : PT1000 Jumo sensors\nBattery Life : > 12 years\nReplaceable: Battery & Temp. Sensors\nMID certified",
                        "productGroup": "Uflo U60 Advanced Series",
                        "image": u60AdvImg,
                        "images": [],
                        "brochure": ufloU60Pdf,
                        "specs": {
                            "Accuracy": "Class 2",
                            "Nominal Diameter": "DN15 - DN40",
                            "Range Ratio": "100",
                            "Temperature Range": "2 ~ 105 °C",
                            "Temp. Difference": "2 ~ 95 K",
                            "Max Pressure": "1.6 MPa",
                            "Protection Level": "IP66 / IP68 (default IP66)",
                            "Power Supply": "3.6V Lithium Battery (>12 years)",
                            "Env. Class": "Class A / B",
                            "Data Storage": "24 Months History",
                            "Communication": "M-Bus, Modbus RS-485, NB-IoT, W M-Bus",
                            "Display": "LCD 10 digits + prompts",
                            "Pressure Loss": "< 25 kPa"
                        },
                        "dimensions": [
                            { dn: "DN15", thread: "G¾B", length: "110 mm", width: "94 mm", height: "110 mm" },
                            { dn: "DN20", thread: "G1B", length: "130 mm", width: "94 mm", height: "115 mm" },
                            { dn: "DN25", thread: "G1¼B", length: "160 mm", width: "94 mm", height: "120 mm" },
                            { dn: "DN32", thread: "G1½B", length: "180 mm", width: "94 mm", height: "125 mm" },
                            { dn: "DN40", thread: "G2B", length: "200 mm", width: "94 mm", height: "135 mm" }
                        ],
                        "technicalFlow": [
                            { dn: "DN15", min: "0.015", nominal: "1.5", max: "3", length: "110" },
                            { dn: "DN20", min: "0.025", nominal: "2.5", max: "5", length: "130" },
                            { dn: "DN25", min: "0.035", nominal: "3.5", max: "7", length: "160" },
                            { dn: "DN32", min: "0.06", nominal: "6.0", max: "12", length: "180" },
                            { dn: "DN40", min: "0.10", nominal: "10.0", max: "20", length: "200" }
                        ],
                        "orderCodeColumns": [
                            { label: "Parameter", key: "param" },
                            { label: "Code", key: "code" },
                            { label: "Description", key: "desc" }
                        ],
                        "orderCodes": [
                            { param: "Model", code: "U60", desc: "Ultrasonic BTU Meter" },
                            { param: "1. Meter Type", code: "1", desc: "Ultrasonic" },
                            { param: "2. Communication", code: "1", desc: "Modbus" },
                            { param: "2. Communication", code: "2", desc: "M-Bus" },
                            { param: "2. Communication", code: "3", desc: "W M-Bus" },
                            { param: "2. Communication", code: "4", desc: "NB-IoT" },
                            { param: "3. Area of Usage", code: "DH", desc: "Domestic - Hot" },
                            { param: "3. Area of Usage", code: "DC", desc: "Domestic - Cooling" },
                            { param: "4. Flow Rate", code: "A / B / C / D / E", desc: "1.5 / 2.5 / 3.5 / 6 / 10 m³/h" },
                            { param: "5. Size", code: "A / B / C / D / E", desc: "DN15 / DN20 / DN25 / DN32 / DN40" },
                            { param: "6. Range", code: "R1 / R2", desc: "R50 / R100" }
                        ],
                        "tags": [
                            "Meters",
                            "Inline Ultrasonic BTU Meters"
                        ],
                        "features": [
                            "Anti-Interference, MIcro Power Consumption Technology.",
                            "Low Pressure Loss < 25kPa.",
                            "High Accuracy Class 2 & High Stability.",
                            "Horizontal or vertical mounting.",
                            "Heating / Cooling Metering.",
                            "Built-in Battery >12 Years Life.",
                            "Smart alarms: low battery, temp sensor error, empty pipe.",
                            "Communication: M-Bus, Modbus, W M-Bus, NB-IoT.",
                            "IP66 / IP68 Protection.",
                            "MID Certified."
                        ],
                        "overview": "The Uflo U60 advanced series is a BTU meter/energy meter that measures energy consumption in liquid heating/cooling systems by calculating energy based on flow rate and temperature difference. Its static ultrasonic technology is based on the measurement of the transit time. It has high accuracy and provides real-time data display and transmission via various communication protocols. The U60 meters can be installed with various flow and temperature sensors in multiple configurations depending on the application and site requirements.",
                        "longDescription": "Uflo ultrasonic BTU Meter- U60 Advanced series\nSize : DN15 to DN40\nTemp Sensor : PT1000 Jumo sensors\nBattery Life : > 12 years\nReplaceable: Battery & Temp. Sensors\nMID certified"
                    },

                    {
                        "id": "uflo-u50-compact-series",
                        "name": "Uflo U50 Compact Series",
                        "description": "Uflo Ultrasonic Compact BTU Meter-U50 Compact Series\nSize : DN15 to DN40\nProtection : IP65 / IP68\nBattery Life : 10 Years",
                        "productGroup": "Uflo U50 Compact Series",
                        "image": u50NewImg,
                        "images": [],
                        "brochure": ufloU50Pdf,
                        "specs": {
                            "Size": "DN15 to DN40",
                            "Protection": "IP65 / IP68",
                            "Battery Life": "10 Years"
                        },
                        "tags": [
                            "Meters",
                            "Inline Ultrasonic BTU Meters"
                        ],
                        "features": [
                            "Anti- Interference, Micro Power Consumption Technology.",
                            "Low Pressure Loss.",
                            "Horizontally or vertically mount, easily do it.",
                            "Heating /cooling Metering.",
                            "Built-in Battery, extremely low energy consumption, no need to replace battery during the meter life long period.",
                            "Smart alarm of low battery, temperature sensor error, short circuit, flow Sensor error.",
                            "Communication Interface - Mbus, WMBus. Modbus RS-485 & LoRaWAN",
                            "Size DN15-DN40"
                        ],
                        "overview": "The Uflo U50 compact series is a BTU meter/energy meter that measures energy consumption in liquid heating/cooling systems by calculating energy based on flow rate and temperature difference. It has high accuracy and provides real-time data display and transmission via various communication protocols. The U60 meters can be installed with various flow and temperature sensors in multiple configurations depending on the application and site requirements. Suitable for heat/cold metering of unit residential buildings to meet the demands for accurate metering & settlement of end-users, and widely used in residential apartments, house, district heating stations, central air conditioning & related systems.",
                        "longDescription": "Uflo Ultrasonic Compact BTU Meter-U50 Compact Series\nSize : DN15 to DN40\nProtection : IP65 / IP68\nBattery Life : 10 Years"
                    },
                    {
                        "id": "uflo-u50-bulk-series",
                        "name": "Uflo U50 Bulk Series",
                        "description": "Uflo Ultrasonic buld BTU Meter-U50 Compact Series\nSize : DN50 to DN300\nProtection : IP65 / IP68\nBattery Life : 10 Years\nCommunication: Mbus / RS485",
                        "productGroup": "Uflo U50 Bulk Series",
                        "image": u50BulkImgNew,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Size": "DN50 to DN300",
                            "Protection": "IP65 / IP68",
                            "Battery Life": "10 Years",
                            "Communication": "Mbus / RS485"
                        },
                        "tags": [
                            "Meters",
                            "Inline Ultrasonic BTU Meters"
                        ],
                        "features": [
                            "According national standard <GBT 32224--2020>, national metrology regulations <JJG225-2001>",
                            "Chip reserved for clock metering",
                            "No moving parts, hence no worn out, ensure metering accuracy but not influenced by life cycle",
                            "Built-in battery powered, extremely low power consumption, long service life",
                            "Remote data transmission, suitalbe for cloudy server use",
                            "Automatic data correction, effectively avoid from interference, ensures stable datas",
                            "Horizontally or vertically mount, easily do it",
                            "Self-diagnosis: fault alarm on low battery, temperature sensor, short circuit, flow sensor, etc."
                        ],
                        "overview": "The Uflo U50 Bulk Meter is Suitable for industrial/commercial heat/cold flow metering, district heat/water supply utility's demand on accurately metering, billing, and big data analysis, and so on.",
                        "longDescription": "Uflo Ultrasonic buld BTU Meter-U50 Compact Series\nSize : DN50 to DN300\nProtection : IP65 / IP68\nBattery Life : 10 Years\nCommunication: Mbus / RS485"
                    },
                    {
                        "id": "uflo-u51-intelligent-valve-series",
                        "name": "Uflo U51 Intelligent Valve Series",
                        "description": "Uflo U51 Intelligent Valve Series\nSize : DN15 to DN 40\nCommunication : M-Bus/ RS-485/ NB-IOT/ W M-Bus\nBattery Life : 10 years\nProtection : IP65/IP67",
                        "productGroup": "Uflo U51 Intelligent Valve Series",
                        "image": u51Img,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Accuracy Class": "Class 2",
                            "Standard Compliance": "EN1434",
                            "Operating Temp Range": "4 °C – 95 °C",
                            "Temp Difference Range": "2 K – 90 K",
                            "Max. Working Pressure": "1.6 MPa",
                            "Pressure Loss": "≤ 0.02 MPa",
                            "Temperature Sensor": "1.5 m two-wire PT1000 paired",
                            "Measurement Technology": "Ultrasonic (no moving parts)",
                            "Data Storage Capacity": "Continuous storage of 24 months (Optional)",
                            "Display Type": "8-bit LCD",
                            "Communication Interfaces": "Optical / M-Bus / RS-485 / NB-IoT / wM-Bus",
                            "Power Supply": "3.6 V lithium battery or external DC 24 V",
                            "Protection Class": "IP65 / IP67",
                            "Environmental Class": "Class A",
                            "Installation Method": "Water inlet or return",
                            "Installation Orientation": "Horizontal or vertical",
                            "Battery Life": "≥ 10 years",
                            "Anti-Magnetic Interference": "Up to 100 kA/m"
                        },
                        "dimensions": [
                            { dn: "DN15", thread: "G¾B", length: "130 mm", width: "88 mm", height: "125 mm" },
                            { dn: "DN20", thread: "G1B", length: "130 mm", width: "88 mm", height: "129 mm" },
                            { dn: "DN25", thread: "G1¼B", length: "160 mm", width: "88 mm", height: "136 mm" },
                            { dn: "DN32", thread: "G1½B", length: "180 mm", width: "88 mm", height: "139 mm" },
                            { dn: "DN40", thread: "G2B", length: "200 mm", width: "88 mm", height: "149 mm" }
                        ],
                        "technicalFlow": [
                            { dn: "DN15", min: "0.015", nominal: "1.5", max: "3", length: "130" },
                            { dn: "DN20", min: "0.05", nominal: "2.5", max: "5", length: "130" },
                            { dn: "DN25", min: "0.07", nominal: "3.5", max: "7", length: "160" },
                            { dn: "DN32", min: "0.12", nominal: "6", max: "12", length: "180" },
                            { dn: "DN40", min: "0.20", nominal: "10", max: "20", length: "200" }
                        ],
                        "orderCodes": [
                            { dn: "DN15", flow: "1.6", mbus: "U5111-DC-AA-R2", wmbus: "U5112-DC-AA-R2", modbus: "U5114-DC-AA-R2", nbiot: "U5116-DC-AA-R2" },
                            { dn: "DN20", flow: "2.5", mbus: "U5111-DC-BB-R2", wmbus: "U5112-DC-BB-R2", modbus: "U5114-DC-BB-R2", nbiot: "U5116-DC-BB-R2" },
                            { dn: "DN25", flow: "3.5", mbus: "U5111-DC-CC-R2", wmbus: "U5112-DC-CC-R2", modbus: "U5114-DC-CC-R2", nbiot: "U5116-DC-CC-R2" },
                            { dn: "DN32", flow: "6", mbus: "U5111-DC-DD-R2", wmbus: "U5112-DC-DD-R2", modbus: "U5114-DC-DD-R2", nbiot: "U5116-DC-DD-R2" },
                            { dn: "DN40", flow: "10", mbus: "U5111-DC-EE-R2", wmbus: "U5112-DC-EE-R2", modbus: "U5114-DC-EE-R2", nbiot: "U5116-DC-EE-R2" }
                        ],
                        "application": [
                            "Apartment and villa heating/cooling energy metering with individual unit control.",
                            "Commercial buildings and offices for HVAC energy monitoring and dynamic balancing.",
                            "District heating and cooling sub-metering with remote reading (AMR/AMI).",
                            "Hotels, hospitals, and campuses for room-wise or zone-wise energy billing.",
                            "Industrial HVAC systems requiring both energy measurement and flow control."
                        ],
                        "tags": [
                            "Meters",
                            "Inline Ultrasonic BTU Meters"
                        ],
                        "features": [
                            "Adopt M-BUS or RS-485 communicationwithlongdistance communication function.",
                            "With the function of real time meter readingandremote valve control and timing",
                            "meter data uploading.",
                            "Electric suspension ball valve technique: adopt electric ball valve technique, work",
                            "reliably and lower pressure loss.",
                            "Supply power by m-bus, no external power supply."
                        ],
                        "overview": "The U51 Integrated BTU Meter with Valve is an  advanced heat and cooling energy metering device designed for accurate measurement, control, and monitoring of heating and cooling systems. It  combines ultrasonic energy measurement with an integrated control valve, enabling both energy metering and hydraulic balancing in a single  unit. The meter accurately measures flow rate, temperature difference,  and thermal energy (BTU) without any mechanical moving parts, ensuring  high accuracy, long service life, and minimal maintenance. It is compliant with EN 1434 standards and suitable for residential, commercial, and  district energy applications",
                        "longDescription": "Uflo U51 Intelligent Valve Series\nSize : DN15 to DN 40\nCommunication : M-Bus/ RS-485/ NB-IOT/ W M-Bus\nBattery Life : 10 years\nProtection : IP65/IP67"
                    }
                ]
            },
            {
                name: "Inline Ultrasonic Water Meters",
                slug: "inline-ultrasonic-water",
                products: [
                    {
                        "id": "uflo-u70-advanced-series",
                        "name": "Uflo U70 Advanced Series",
                        "description": "Uflo ultrasonic BTU Meter- U70 Advanced series\nSize : DN15 to DN40\nTemp Sensor : PT1000 Jumo sensors\nBattery Life : > 12 years\nReplaceable: Battery & Temp. Sensors\nMID certified",
                        "productGroup": "Uflo U70 Advanced Series",
                        "image": u70AdvImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Size": "DN15 to DN40",
                            "Temp Sensor": "PT1000 Jumo sensors",
                            "Battery Life": "> 12 years",
                            "Replaceable": "Battery & Temp. Sensors",
                            "Certification": "MID certified"
                        },
                        "tags": [
                            "Meters",
                            "Inline Ultrasonic Water Meters"
                        ],
                        "features": [
                            "Uflo ultrasonic BTU Meter- U70 Advanced series",
                            "Size : DN15 to DN40",
                            "Temp Sensor : PT1000 Jumo sensors",
                            "Battery Life : > 12 years",
                            "Replaceable: Battery & Temp. Sensors",
                            "MID certified"
                        ],
                        "overview": "Uflo U70 Advanced Series represents the next generation of ultrasonic metering, offering enhanced precision and durability for demanding industrial and commercial applications.",
                        "longDescription": "Uflo ultrasonic BTU Meter- U70 Advanced series\nSize : DN15 to DN40\nTemp Sensor : PT1000 Jumo sensors\nBattery Life : > 12 years\nReplaceable: Battery & Temp. Sensors\nMID certified"
                    },
                    {
                        "id": "uflo-u40-compact-series",
                        "name": "Uflo U40 Compact Series",
                        "description": "Uflo U40 Compact Series\nSize : DN15 to DN40\nAccuracy : Class 2\nWater Temperature Class : T30 /T50\nR Factor : R250 / R400",
                        "productGroup": "Uflo U40 Compact Series",
                        "image": u40CompactImg,
                        "images": [],
                        "brochure": ufloU40CompactPdf,
                        "specs": {
                            "Accuracy": "Class 2",
                            "Nominal Diameter": "DN15-DN40",
                            "Dynamic Range": "R250/R400",
                            "Maximum Working Pressure": "1.6 Mpa",
                            "Working Environment": "-25°C~+70°C, ≤100%RH",
                            "Water Temperature Class": "T30, T50, T70 (default T50)",
                            "Upstream Flow Sensitivity": "U0",
                            "Downstream Flow Sensitivity": "D0",
                            "Data Communication": "Baud rate: 2400/4800/9600 bps. Modbus-RTU / EN13757. Freq: 868MHz"
                        },
                        "technicalFlowColumns": [
                            { label: "Model", key: "model" },
                            { label: "Dia DN(mm)", key: "dn" },
                            { label: "Qp Q3(m³/h)", key: "q3" },
                            { label: "Qt Q2(m³/h)", key: "q2" },
                            { label: "Qmin Q1(m³/h)", key: "q1" },
                            { label: "Sensor Connect L1(mm)", key: "l1" },
                            { label: "Sensor Tube Thread", key: "thread" },
                            { label: "Length L2(mm)", key: "l2" }
                        ],
                        "technicalFlow": [
                            { model: "DN15", dn: "15", q3: "2.5", q2: "0.010", q1: "0.006", l1: "12", thread: "G¾B", l2: "43" },
                            { model: "DN20", dn: "20", q3: "4.0", q2: "0.016", q1: "0.010", l1: "12", thread: "G1B", l2: "50" },
                            { model: "DN25", dn: "25", q3: "6.3", q2: "0.025", q1: "0.016", l1: "12", thread: "G1¼B", l2: "58" },
                            { model: "DN32", dn: "32", q3: "10", q2: "0.040", q1: "0.025", l1: "13", thread: "G1½B", l2: "58" },
                            { model: "DN40", dn: "40", q3: "16", q2: "0.064", q1: "0.040", l1: "14", thread: "G2B", l2: "59" },
                            { model: "DN50", dn: "50", q3: "25", q2: "0.160", q1: "0.10", l1: "15", thread: "G2½B", l2: "60" }
                        ],
                        "orderCodeColumns": [
                            { label: "Parameter", key: "param" },
                            { label: "Code", key: "code" },
                            { label: "Description", key: "desc" }
                        ],
                        "orderCodes": [
                            { param: "Model", code: "U40", desc: "Ultrasonic" },
                            { param: "1. Meter Type", code: "1", desc: "Ultrasonic" },
                            { param: "1. Meter Type", code: "2", desc: "Electromagnetic" },
                            { param: "1. Meter Type", code: "3", desc: "Mechanical - Single Jet" },
                            { param: "1. Meter Type", code: "4", desc: "Mechanical - Multijet" },
                            { param: "2. Comm Protocol", code: "0", desc: "No protocol" },
                            { param: "2. Comm Protocol", code: "1", desc: "M-Bus" },
                            { param: "2. Comm Protocol", code: "2", desc: "W-Mbus" },
                            { param: "2. Comm Protocol", code: "3", desc: "LoRaWAN" },
                            { param: "2. Comm Protocol", code: "4", desc: "Modbus" },
                            { param: "2. Comm Protocol", code: "5", desc: "Pulse output" },
                            { param: "2. Comm Protocol", code: "6", desc: "NB-IoT" },
                            { param: "3. Area of Usage", code: "DH", desc: "Domestic - Hot" },
                            { param: "3. Area of Usage", code: "DD", desc: "Domestic - Drinking" },
                            { param: "4. Flow Rate", code: "A / B / C / D / E / F", desc: "2.5 / 4 / 6.3 / 10 / 16 / 25 m³/h" },
                            { param: "5. Size", code: "A / B / C / D / E / F", desc: "15 / 20 / 25 / 32 / 40 / 50 mm" },
                            { param: "6. Range", code: "R1 / R2 / R3 / R4", desc: "R200 / R250 / R400 / R500" }
                        ],
                        "features": [
                            "Large R value up to 400:1 (Default R250).",
                            "Low Starting Flowrate (as low as 0.0015m3/h).",
                            "Leak & burst alarmSelf-Diagnosis: flow sensor fault, temperature sensor fault, the overflow, lowbattery alarm.",
                            "Accurate Flow measurement algorithm.",
                            "IR interface, compatible with IR handheld reader.",
                            "Power supply option Built in lithium battery (default) Optional DC7.5-24V external power supply in case of Rs485.",
                            "Bidirectional flow measurement.",
                            "Communication Interface - Mbus, WMBus, Modbus RS-485, LoRaWAN & NB-IOT.",
                            "Optional- inbuilt pressure switch and Shut off valve."
                        ],
                        "overview": "Uflo U40 compact residential ultrasonic water meters offer high accuracy (upto R500) with no moving parts, featuring integrated smart communication (M-Bus, LoRaWAN, wM-Bus, NB-IoT, RS485) for remote reading, leak detection, and long battery life. \nAvailable in compact designs for various pipe sizes (DN15-DN50). The device is able to detect small flows and contributes to the rational use and saving of water resources.\nOptional variant we offer inbuilt pressure switch with shut off valve. The inbuilt shutoff valve operated on pressure burst / low flow leak detection.",
                        "longDescription": "Uflo U40 Compact Series\nSize : DN15 to DN40\nAccuracy : Class 2\nWater Temperature Class : T30 /T50\nR Factor : R250 / R400"
                    },
                    {
                        "id": "uflo-u40-bulk-series",
                        "name": "Uflo U40 Bulk Series",
                        "description": "Uflo U40 Bulk Series\nSize : DN50 to DN500\nAccuracy : Class 2\nWater Temperature Class : T30 / T50",
                        "productGroup": "Uflo U40 Bulk Series",
                        "image": u40BulkImgNew,
                        "images": [],
                        "brochure": ufloU40BulkPdf,
                        "specs": {
                            "Accuracy": "2%",
                            "Ambient Class": "Class O",
                            "Flow Section Sensitivity": "U5/D3",
                            "Pressure Resolution": "0.1 MPa",
                            "Temperature Class": "T30",
                            "Protection Class": "IP68",
                            "Pressure Class": "MAP16",
                            "EMC Level": "E1",
                            "Dynamic Range": "125-400 (R200 Base)",
                            "Pressure Loss Class": "Δp40",
                            "Installation Mode": "H/V",
                            "Pipe Material": "Cast Steel"
                        },
                        "technicalFlowColumns": [
                            { label: "Model", key: "model" },
                            { label: "Normal Dia DN(mm)", key: "dn" },
                            { label: "Permanent Flow Q3(m³/h)", key: "q3" },
                            { label: "Transitional Flow Q2(m³/h)", key: "q2" },
                            { label: "Minimum Flow Q1(m³/h)", key: "q1" },
                            { label: "Flange Dia (mm)", key: "flange" },
                            { label: "Meter Length (mm)", key: "length" },
                            { label: "Connection Bolt", key: "bolt" }
                        ],
                        "technicalFlow": [
                            { model: "DN50", dn: "50", q3: "25", q2: "0.20", q1: "0.125", flange: "165", length: "200", bolt: "4*M16" },
                            { model: "DN65", dn: "65", q3: "40", q2: "0.32", q1: "0.200", flange: "185", length: "200", bolt: "4*M16" },
                            { model: "DN80", dn: "80", q3: "63", q2: "0.50", q1: "0.315", flange: "200", length: "225", bolt: "8*M16" },
                            { model: "DN100", dn: "100", q3: "100", q2: "0.80", q1: "0.500", flange: "220", length: "250", bolt: "8*M16" },
                            { model: "DN125", dn: "125", q3: "160", q2: "1.25", q1: "0.800", flange: "250", length: "250", bolt: "8*M16" },
                            { model: "DN150", dn: "150", q3: "250", q2: "2.00", q1: "1.250", flange: "285", length: "300", bolt: "8*M20" },
                            { model: "DN200", dn: "200", q3: "400", q2: "3.20", q1: "2.000", flange: "340", length: "350", bolt: "12*M20" },
                            { model: "DN250", dn: "250", q3: "630", q2: "5.00", q1: "3.150", flange: "450", length: "450", bolt: "12*M24" },
                            { model: "DN300", dn: "300", q3: "1400", q2: "17.9", q1: "11.2", flange: "520", length: "550", bolt: "16*M24" },
                            { model: "DN400", dn: "400", q3: "1600", q2: "20.5", q1: "12.8", flange: "580", length: "600", bolt: "16*M27" },
                            { model: "DN450", dn: "450", q3: "2000", q2: "25.6", q1: "16", flange: "640", length: "650", bolt: "20*M27" },
                            { model: "DN500", dn: "500", q3: "2500", q2: "32", q1: "20", flange: "705", length: "650", bolt: "20*M30" }
                        ],
                        "orderCodeColumns": [
                            { label: "Parameter", key: "param" },
                            { label: "Code", key: "code" },
                            { label: "Description", key: "desc" }
                        ],
                        "orderCodes": [
                            { param: "Model", code: "U40", desc: "Ultrasonic Bulk Meter" },
                            { param: "1. Meter Type", code: "1", desc: "Ultrasonic" },
                            { param: "2. Comm Protocol", code: "0", desc: "No Protocol" },
                            { param: "2. Comm Protocol", code: "1", desc: "M-Bus" },
                            { param: "2. Comm Protocol", code: "2", desc: "Modbus" },
                            { param: "2. Comm Protocol", code: "3", desc: "4G" },
                            { param: "2. Comm Protocol", code: "4", desc: "NB-IoT" },
                            { param: "3. Area of Usage", code: "DH", desc: "Domestic - Hot" },
                            { param: "3. Area of Usage", code: "DC", desc: "Domestic - Cooling" },
                            { param: "4. Flow Rate", code: "A / B / C / D", desc: "1400 / 1600 / 2000 / 2500 m³/h" },
                            { param: "5. Size", code: "A / B / C / D", desc: "300 / 400 / 450 / 500 mm" },
                            { param: "6. Range", code: "R1", desc: "R125" }
                        ],
                        "tags": [
                            "Meters",
                            "Inline Ultrasonic Water Meters"
                        ],
                        "features": [
                            "Double pipes measuring, high accuracy and reliability.",
                            "Redundant: Operates properly even with blockage/fault in one pipe.",
                            "Protection Class: IP68.",
                            "Pipe Material: Cast Steel.",
                            "Smart alarm: flow sensor error, temp sensor error, overload, low battery.",
                            "High resolution 9 digits LCD display.",
                            "Two-way measurement: forward and reverse flow.",
                            "Pressure sensor optional.",
                            "Built-in 4G or NB-IoT communication available."
                        ],
                        "overview": "Uflo U40 bulk meters is an advanced and highly accurate Ultrasonic water Meter used for bulk Metering in Utility, Industry, Waterworks or Agriculture. This meter comes in the range of DN50 to DN500 with Flange connection. It has Dual channel measurement with high accuracy and excellent stability.",
                        "longDescription": "Uflo U40 Bulk Flow Meter\nSize : DN50 to DN500\nAccuracy : Class 2\nWater Temperature Class : T30"
                    },

                ]
            },
            {
                name: "Inline Electromagnetic Flow Meters",
                slug: "inline-electromagnetic",
                products: [
                    {
                        "id": "gima-b",
                        "name": "GI Instruments GIMA-B type Electromagnetic Flow meters",
                        "productCode": "GIMA-B",
                        "description": "GI Instruments GIMA-B type Electromagnetic Flow meters\nAccuracy : +/- 0.5%\nSize: DN6 to DN2000\nLiner : Rubber / PTFE /PFE\nCommunication: Modbus RS485 / HART",
                        "productGroup": "GIMA-B",
                        "image": gimaBImg,
                        "images": [],
                        "brochure": gimaBPdf,
                        "specs": {
                            "Accuracy": "+/- 0.5%",
                            "Size": "DN6 to DN2000",
                            "Liner": "Rubber / PTFE /PFE",
                            "Communication": "Modbus RS485 / HART"
                        },
                        "tags": [
                            "Meters",
                            "Inline Electromagnetic Flow Meters"
                        ],
                        "features": [
                            "Fully welded maintenance-free sensor",
                            "Flange version with full bore flow tube",
                            "Standard as well as higher pressure ratings",
                            "Large diameter range from DN25...3000 with rugged liners approved for drinking water",
                            "Industry specific insertion lengths"
                        ],
                        "overview": "Electromagnetic flow meters are intended for fluid measurement in most industries including water, wastewater, food and beverage, pharmaceutical and chemical. There are two basic components of SURE electromagnetic flow meter: 1) The Detector, which includes the flow tube, isolating liner and measuring electrodes, and 2) The Converter, which is the electronic device responsible for signal processing, flow calculation, display and output signals.",
                        "longDescription": "GI Instruments GIMA-B type Electromagnetic Flow meters\nAccuracy : +/- 0.5%\nSize: DN6 to DN2000\nLiner : Rubber / PTFE /PFE\nCommunication: Modbus RS485 / HART"
                    },
                    {
                        "id": "gima-h",
                        "name": "GI instruments GIMA-H electromagnetic HEAT/BTU meters",
                        "productCode": "GIMA-H",
                        "description": "GI instruments GIMA-H electromagnetic HEAT/BTU meters\nAccuracy : 2%\nSize: DN15 to DN600\nLiner : Rubber / PTFE /PFE\nCommunication: Modbus RS485 / HART\nIP rating: IP65 /IP68",
                        "productGroup": "GIMA-H",
                        "image": gimaHImg,
                        "images": [],
                        "brochure": gimaHPdf,
                        "specs": {
                            "Accuracy": "2%",
                            "Size": "DN15 to DN600",
                            "Liner": "Rubber / PTFE /PFE",
                            "Communication": "Modbus RS485 / HART",
                            "IP rating": "IP65 /IP68"
                        },
                        "tags": [
                            "Meters",
                            "Inline Electromagnetic Flow Meters"
                        ],
                        "features": [
                            "_High Accuracy",
                            "Durability",
                            "Easy Installation",
                            "Strong Anti-Interference Capability",
                            "Low Pressure Loss",
                            "Multifunctionality"
                        ],
                        "overview": "Electromagnetic flow meters detect flow by using Faraday's Law of induction.\nInside an electromagnetic flow meter, there is an electromagnetic coil that generates a magnetic field, and electrodes that\ncapture electromotive force(voltage). Due to this, although it may appear as if there is nothing inside the flow pipe of an\nelectromagnetic flow meter, flow can be measured. Electromagnetic flow meter is flexible and universally applicable flow\nmeasurement systems. It is a velocity flow meter which does not have any moving parts and is ideal for conductive fluid.",
                        "longDescription": "GI instruments GIMA-H electromagnetic HEAT/BTU meters\nAccuracy : 2%\nSize: DN15 to DN600\nLiner : Rubber / PTFE /PFE\nCommunication: Modbus RS485 / HART\nIP rating: IP65 /IP68"
                    },
                    {
                        "id": "gima-ib",
                        "name": "GI instruments GIMA-H electromagnetic HEAT/BTU meters",
                        "productCode": "GIMA-IB",
                        "description": "GI instruments GIMA-H electromagnetic HEAT/BTU meters\nAccuracy : 2%\nSize: DN100 to DN3000\nCommunication: Modbus RS485 / HART\nIP rating: IP65 /IP68",
                        "productGroup": "GIMA-IB",
                        "image": gimaIbImg,
                        "images": [],
                        "brochure": gimaIbPdf,
                        "specs": {
                            "Accuracy": "2%",
                            "Size": "DN100 to DN3000",
                            "Communication": "Modbus RS485 / HART",
                            "IP rating": "IP65 /IP68"
                        },
                        "tags": [
                            "Meters",
                            "Inline Electromagnetic Flow Meters"
                        ],
                        "features": [
                            "Measures flow of conductive liquids using electromagnetic induction.",
                            "Insertion design lets it be installed into large pipelines without cutting full pipe sections.",
                            "Has no moving parts for reliable, low-maintenance operation.",
                            "Works over a wide flow range and pipe sizes (e.g., DN 200 mm – 3000 mm).",
                            "Provides stable and accurate flow readings for industrial applications."
                        ],
                        "overview": "GIMA Insertion Magnetic Flowmeter is designed for measurement of the velocity of liquid. It can be installed in any pipeline of internal diameter from 200mm (8in) to 3000mm (120in),through a small tapping. The complete lack of moving parts of this insertion flowsensor is the source of its reliability. There is no rotor to stop turning in dir ty waterand there are no bearings to wear out.",
                        "longDescription": "GI instruments GIMA-H electromagnetic HEAT/BTU meters\nAccuracy : 2%\nSize: DN100 to DN3000\nCommunication: Modbus RS485 / HART\nIP rating: IP65 /IP68"
                    },

                ]
            },
            {
                name: "Clampon Ultrasonic BTU & Flow meters",
                slug: "clampon-ultrasonic-btu-flow",
                products: [
                    {
                        "id": "tkn202b-f",
                        "name": "Techknave Standard Clampon Ultrasonic BTU /Flow meter",
                        "productCode": "TKN202B/F",
                        "description": "Techknave Standard Clampon Ultrasonic BTU /Flow meter - (TKN202B /F) \nSize: DN50 to DN2000\nAccuracy: +/- 1%\nTemp sensor: PT100\nCommunication: RS485 / Mbus / BacNet IP / 4G",
                        "productGroup": "TKN202B/F",
                        "image": tkn202Img,
                        "images": [],
                        "brochure": tkn202Pdf,
                        "specs": {
                            "Size": "DN50 to DN2000",
                            "Accuracy": "+/- 1%",
                            "Temp sensor": "PT100",
                            "Communication": "RS485 / Mbus / BacNet IP / 4G"
                        },
                        "tags": [
                            "Meters",
                            "Clampon Ultrasonic BTU & Flow meters"
                        ],
                        "features": [
                            "Measurement accuracy +-0.5 to 1%",
                            "Non-Invasive with no pipe disturbance and no maintenance",
                            "Easy installations",
                            "Wide range, pipe size from DN25mm to DN6000mm and flow",
                            "rate of 0.01 to 15m/s",
                            "Suitable for many common pipe materials",
                            "Communication interface - Modbus RTU / TCP,BACNET MSTP /IP and MBus",
                            "4G / GPRS modem for remote monitoring"
                        ],
                        "overview": "Techknave TKN 202 series Wall-mount Clamp on Ultrasonic BTU/ FLOW meter provides accurate thermal energy and Liquid flow measurements from outside of a pipe. TKN 202 series can be virtually applied to a wide range of pipe sizes and in long-term online measurement. A variety of liquid applications can be accommodated: ultra-pure liquids, portable water, chemicals, raw sewage, reclaimed water, cooling water, river water, plant effluent etc. Due to the non-intrusive nature of the clamp-on technology, there is no pressure drop, no leaks, no risk of contamination, no corrosion, no moving parts and easier and faster installations.",
                        "longDescription": "Techknave Standard Clampon Ultrasonic BTU /Flow meter - (TKN202B /F) \nSize: DN50 to DN2000\nAccuracy: +/- 1%\nTemp sensor: PT100\nCommunication: RS485 / Mbus / BacNet IP / 4G"
                    },
                    {
                        "id": "tkn204b-f",
                        "name": "Techknave Enhanced Clampon Ultrasonic BTU /Flow meter",
                        "productCode": "TKN204B/F",
                        "description": "Techknave Enhanced Clampon Ultrasonic BTU /Flow meter (TKN204B /F) \nSize: DN50 to DN3000\nAccuracy: +/- 0.5%\nTemp sensor: PT1000\nCommunication: RS485 / Mbus",
                        "productGroup": "TKN204B/F",
                        "image": tkn204Img,
                        "images": [],
                        "brochure": tkn204Pdf,
                        "specs": {
                            "Model": "D$22 6-(Standard)",
                            "Type": "Wall-mounted",
                            "Accuracy": "±0.5% of measured value",
                            "Repeatability Error": "0.2%",
                            "Flow Range": "±0.03m/s - ±5m/s",
                            "Pipe Size": "1/2 to 200 (15mm to 5000mm)",
                            "Pipe Material": "Carbon steel, stainless steel, PVC",
                            "Output": "4-20mA, max load 750 Ω\nRelay, SPST, max 1Hz,(0.4A @ 125VAC or 2A @ 30VDC)\nOCT pulse, 0-10KHz",
                            "Protocol": "MBus (EN 13757)",
                            "SD Card": "Optional, 32G",
                            "Power Supply": "90 to 245 VAC\n&\n10 to 36 VDC",
                            "Display": "9999999, 1-2 digits after the decimal point",
                            "Temperature": "-20°C-60°C",
                            "Temperature (Sensor)": "PT1000, Default, 40°C-80°C\nMax -40°C- +180°C\nF10 type (2°C to 20°C, F20 type (Above 20°C)",
                            "Protection (Transmitter)": "IP65",
                            "Protection (Sensor)": "IP68",
                            "Cable Length": "9m, up to 274m",
                            "Housing": "PC/AB5",
                            "Humidity": "Up to 99% RH, non-condensing"
                        },
                        "applicationDescription": "Techknave T204 series wall mounted CLAMP ON BTU and FLOW METER are ideal for process-control / BTU or kWh energy measurement / Flow measurement, Flow verification, Energy Audits, Network leak detection and various other industry requirements.",
                        "application": [
                            "Flow meter verifications",
                            "Energy Audits",
                            "Network Metering",
                            "Food, Beverage & Pharmaceutical plants",
                            "Petrochemical industry",
                            "HVAC Systems",
                            "Water Treatment Plants",
                            "Drainage Systems",
                            "Environmental Monitoring"
                        ],
                        "orderCodeColumns": [
                            { label: "Meter Type", key: "type" },
                            { label: "Applicable Pipe Size", key: "size" },
                            { label: "Code", key: "code" }
                        ],
                        "orderCodes": [
                            { type: "Flow Meter", size: "DN50 to DN700", code: "TKN204F-M-000" },
                            { type: "Flow Meter", size: "Above DN700", code: "TKN204F-L-000" },
                            { type: "BTU Meter", size: "DN50 to DN700", code: "TKN204B-M-000" },
                            { type: "BTU Meter", size: "Above DN700", code: "TKN204B-L-000" }
                        ],
                        "tags": [
                            "Meters",
                            "Clampon Ultrasonic BTU & Flow meters"
                        ],
                        "features": [
                            "Measurement accuracy: +-0.5%",
                            "Non-Invasive: with no pipe disturbance and no maintenance",
                            "Easy installations",
                            "Wide range: pipe size from DN50mm to DN2000mm and flow rate of 0.01 to 15m/s",
                            "Suitable for many common pipe materials",
                            "Communication interface: Modbus RTU and MBus",
                            "4G / GPRS modem for remote monitoring",
                            "Connectivity to UBILL MACCLOUD server for Record & Analyze"
                        ],
                        "overview": "Techknave TKN 204 Enhanced series Wall-mount Clamp on Ultrasonic BTU/ FLOW meter provides accurate thermal energy and Liquid flow measurements from outside of a pipe. TKN 204 series can be virtually applied to a wide range of pipe sizes and in long-term online measurement. A variety of liquid applications can be accommodated: ultra-pure liquids, portable water, chemicals, raw sewage, reclaimed water, cooling water, river water, plant effluent etc. Due to the non-intrusive nature of the clamp-on technology, there is no pressure drop, no leaks, no risk of contamination, no corrosion, no moving parts and easier and faster installations.",
                        "longDescription": "Techknave Enhanced Clampon Ultrasonic BTU /Flow meter (TKN204B /F) \nSize: DN50 to DN3000\nAccuracy: +/- 0.5%\nTemp sensor: PT1000\nCommunication: RS485 / Mbus"
                    },
                    {
                        "id": "tkn205b-f",
                        "name": "Techknave Insertion Ultrasonic BTU/Flow meter",
                        "productCode": "TKN205B/F",
                        "description": "Techknave Insertion Ultrasonic BTU/Flow meter (TKN205B/F)\nAccuracy: +/- 2%\nSize : DN50 to DN6000\nInterface : RS485, MODBUS\nPower : Power supply DC 24V",
                        "productGroup": "TKN205B/F",
                        "image": tkn205Img,
                        "images": [],
                        "brochure": tkn205Pdf,
                        "specs": {
                            "Accuracy": "+/- 2%",
                            "Size": "DN50 to DN6000",
                            "Interface": "RS485, MODBUS",
                            "Power": "Power supply DC 24V"
                        },
                        "tags": [
                            "Meters",
                            "Clampon Ultrasonic BTU & Flow meters"
                        ],
                        "features": [
                            "Pipe Size Starting from DN50 to DN 6000 .",
                            "Techknave TKN 205 offers MODBUS TCP,BACNET /IP and MBus Communication interface.",
                            "GPRS/4G module available for remote monitoring and remote control through UENERGY cloud Server Platform."
                        ],
                        "overview": "The insertion ultrasonic flowmeter consists of a converter and a insertion type sensor. Insertion type sensors can be installed by simply opening two mounting holes in the pipe surface. With the special opening tool, the insertion type ultrasonic sensor can be installed without water stop. Since the sensor is directly in contact with the fluid, the measurement is stable and reliable.",
                        "longDescription": "Techknave Insertion Ultrasonic BTU/Flow meter (TKN205B/F)\nAccuracy: +/- 2%\nSize : DN50 to DN6000\nInterface : RS485, MODBUS\nPower : Power supply DC 24V"
                    },
                    {
                        "id": "tkn203f",
                        "name": "Techknave Portable Ultrasonic Flow meter",
                        "productCode": "TKN203F",
                        "description": "Techknave Portable Ultrasonic Flow meter (TKN203F)\nSize : DN15 to DN1200\nInterface : RS485, MODBUS\nPower : Battery 12V (Rechargeable)",
                        "productGroup": "TKN203F",
                        "image": tkn203Img,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Size": "DN15 to DN1200",
                            "Interface": "RS485, MODBUS",
                            "Power": "Battery 12V (Rechargeable)"
                        },
                        "tags": [
                            "Meters",
                            "Clampon Ultrasonic BTU & Flow meters"
                        ],
                        "features": [
                            "The design is compact, lightweight, and easy to carry.",
                            "Calculate positive and negative flow and cumulative measurement.",
                            "Add SD card data automatic storage function, data will never be lost",
                            "again.",
                            "Rechargeable battery and universal power supply design.",
                            "Advanced modular integrated design, independent menu operation,",
                            "large-screen LCD backlight 4 lines display.",
                            "Particularly suitable for on-site flow detection for various pressure",
                            "requirements"
                        ],
                        "overview": "The Ultrasonic Portable Flow meter adopts the time-difference measurement principle. The ultrasonic waves emitted by the sensor in a fluid, the flowing in the propagation direction of acoustic wave propagation velocity downstream increases, decreases the upstream direction, have different propagation distance in the same transmission time, measure the flow rate according to the difference of the transmission time and the fluid flow velocity",
                        "longDescription": "Techknave Portable Ultrasonic Flow meter (TKN203F)\nSize : DN15 to DN1200\nInterface : RS485, MODBUS\nPower : Battery 12V (Rechargeable)"
                    },
                    {
                        "id": "giwu-226",
                        "name": "GI Instrument Wallmounted Clamp-On Ultrasonic BTU/Flow meter",
                        "productCode": "GIWU-226",
                        "description": "GI Instrument Wallmounted Clamp-On Ultrasonic BTU/Flow meter\nAccuracy: 0.5%;\nSize: DN15-DN5000;\nPower supply: 10~36V DC & 90-245 VAC;\nMemory card: 32G SD",
                        "productGroup": "GIWU-226",
                        "image": giwu226Img,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "23A": "4. Clampon Ultrasonic  BTU & Flow meters",
                            "Accuracy": "0.5%;",
                            "Size": "DN15-DN5000;",
                            "Power supply": "10~36V DC & 90-245 VAC;",
                            "Memory card": "32G SD"
                        },
                        "tags": [
                            "Meters",
                            "Clampon Ultrasonic BTU & Flow meters"
                        ],
                        "features": [
                            "The design is compact, lightweight, and easy to carry.",
                            "Calculate positive and negative flow and cumulative measurement.",
                            "Add SD card data automatic storage function, data will never be lost",
                            "again.",
                            "Rechargeable battery and universal power supply design.",
                            "Advanced modular integrated design, independent menu operation,",
                            "large-screen LCD backlight 4 lines display.",
                            "Particularly suitable for on-site flow detection for various pressure",
                            "requirements"
                        ],
                        "overview": "The Ultrasonic wall mounted Flow meter adopts the time-difference measurement principle. The ultrasonic waves emitted by the sensor in a fluid, the flowing in the propagation direction of acoustic wave propagation velocity downstream increases, decreases the upstream direction, have different propagation distance in the same transmission time, measure the flow rate according to the difference of the transmission time and the fluid flow velocity",
                        "longDescription": "GI Instrument Wallmounted Clamp-On Ultrasonic BTU/Flow meter\nAccuracy: 0.5%;\nSize: DN15-DN5000;\nPower supply: 10~36V DC & 90-245 VAC;\nMemory card: 32G SD"
                    }
                ]
            },
            {
                name: "Gas Meters",
                slug: "gas-meters",
                products: [
                    {
                        "id": "tkn280xc",
                        "name": "Gaskonnect AMR & Solenoid Controller",
                        "productCode": "TKN280xC",
                        "description": "Gaskonnect AMR & Solenoid Controller (TKN280xC)\nPulse reader & Relay switch for solenoid control\nCommunication: Mbus / LoRaWAN\nPower: Battery powered (16+ years)",
                        "productGroup": "TKN280xC",
                        "image": tkn280xcImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Communication": "Mbus / LoRaWAN",
                            "Power": "Battery powered (16+ years)"
                        },
                        "tags": [
                            "Meters",
                            "Gas Meters"
                        ],
                        "features": [
                            "Automatically read Gas Flow and volume data",
                            "Integrated battery with life expectancy of 10+ years",
                            "Operating temperature ranges -5 ° C to +60°C",
                            "Real time clock with historical data logging options",
                            "Data storing options incase of power failure/ Battery failure",
                            "2 Digital inputs configurable (Pulse Read / standard DI)",
                            "1 Relay output with NO/NC"
                        ],
                        "overview": "GAS KONNECT TKN2801C / TKN2803C is another variation of the smart relay devices, specifically designed to integrate with both gas solenoids and pulse-enabled gas meters in domestic gas\ndistribution networks.\nTKN2801C- M-Bus enabled Gas Konnect Controller\nTKN2803C- LoRaWAN enabled Gas Konnect Controller",
                        "longDescription": "Gaskonnect AMR & Solenoid Controller (TKN280xC)\nPulse reader & Relay switch for solenoid control\nCommunication: Mbus / LoRaWAN\nPower: Battery powered (16+ years)"
                    },
                    {
                        "id": "tkn2801p",
                        "name": "Gaskonnect Pulse Reader",
                        "productCode": "TKN2801P",
                        "description": "Gaskonnect Pulse Reader (TKN2801P)\nPulse to Mbus module\nCommunication: Mbus\nPower: Battery powered (16+ years)",
                        "productGroup": "TKN2801P",
                        "image": tkn2801pImg,
                        "images": [],
                        "brochure": tkn2801Pdf,
                        "specs": {
                            "Communication": "Mbus",
                            "Power": "Battery powered (16+ years)"
                        },
                        "tags": [
                            "Meters",
                            "Gas Meters"
                        ],
                        "features": [
                            "Automatically read Gas Flow and volume data",
                            "Integrated battery with life expectancy of 10+ years",
                            "Operating temperature ranges -5 ° C to +60°C",
                            "Real time clock with historical data logging options",
                            "Data storing options incase of power failure/ Battery failure",
                            "2 Digital inputs configurable (Pulse Read / standard DI)"
                        ],
                        "overview": "Gas Konnect TKN2801P / TKN2803P is a set of pulse to network enabled gas metering AMR device, which convert the pulse output from gas meter to respective network protocol message telegram details.\nTKN2801P- M-Bus enabled Gas Konnect Pulse Reader\nTKN2803P- LoRaWAN enabled Gas Konnect Pulse Reader",
                        "longDescription": "Gaskonnect Pulse Reader (TKN2801P)\nPulse to Mbus module\nCommunication: Mbus\nPower: Battery powered (16+ years)"
                    },
                    {
                        "id": "gaskonnect-smart-gas-meters",
                        "name": "GasKonnect Smart Gas Meters",
                        "description": "Gaskonnect Smart Gas Meters\nSize: G1.6 /G2.5/G4.0/G6.0\nCommunication : M-Bus / RS485 MODBUS\nInbuilt valve control",
                        "productGroup": "GasKonnect Smart Gas Meters",
                        "image": tkn2810xImg,
                        "images": [],
                        "brochure": tkn2810xPdf,
                        "specs": {
                            "Size": "G1.6 /G2.5/G4.0/G6.0",
                            "Communication": "M-Bus / RS485 MODBUS"
                        },
                        "tags": [
                            "Meters",
                            "Gas Meters"
                        ],
                        "features": [
                            "Adopt M-BUS or RS-485 communicationwithlongdistance communication function.",
                            "With the function of real time meter readingandremote valve control and timing",
                            "meter data uploading.",
                            "Electric suspension ball valve technique: adopt electric ball valve technique, work",
                            "reliably and lower pressure loss.",
                            "Supply power by m-bus, no external power supply."
                        ],
                        "overview": "Wired remote reading gas meter adopts m-bus or RS485 modbus communication to realize remote meter reading and valve control functions. It’s used for measuring the gas flow in the pipe. This smart gas meter equipped with microcomputer to measure and store gas consumption, and automatically detect battery status and meter operation status etc. With it, the gas utilities are easy to management gas supply and\ngreatly improve the billing efficiency and avoid read meter door to door and money owing.",
                        "longDescription": "Gaskonnect Smart Gas Meters\nSize: G1.6 /G2.5/G4.0/G6.0\nCommunication : M-Bus / RS485 MODBUS\nInbuilt valve control"
                    }
                ]
            },
        ]
    },
    // =========================================================================
    // VALVES & SWITCHES
    // =========================================================================
    {
        category: "Valves & Switches",
        slug: "valves-switches",
        subcategories: [
            {
                name: "Smart Valve Controller\n(Segregated)",
                slug: "smart-valve-controller",
                products: [
                    {
                        "id": "tkn220xf",
                        "name": "Smart M-Bus Valve Controller",
                        "productCode": "TKN220xF",
                        "description": "Smart M-Bus Valve Controller\nValve type: Motorized ball valve \nPipe Section : DN15, DN20, DN25 and DN32\nPower: Battery powered (16+ years)\nValve body & Ball : Brass/ SS304\nCommunication: M-Bus / LoRaWAN",
                        "productGroup": "TKN220xF",
                        "image": tkn2201Img,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Product ID": "TKN22XX (XX for Valve DN)",
                            "Operation method": "Motorized Ball Valve",
                            "Pipe Section": "DN15, DN20, DN20 & DN32",
                            "Maximum fluid temperature": "0 deg cel to +100 deg cel",
                            "Fluid support": "Potable / Hot / Cold water",
                            "Actuator Housing": "ABS",
                            "Terminals": "2 clip type connectors (MBus & Valve termination)",
                            "Valve Body & Ball": "Brass / SS304",
                            "IP Protection": "IP67",
                            "PN rating": "PN16",
                            "Manual Override": "Mechanical rotational lever for Open/ close",
                            "Position Indicator": "Glass through position Indicator",
                            "Thread": "BSPP Inner thread"
                        },
                        "controllerSpecs": {
                            "Product ID": "TKN2201",
                            "Power supply": "2 Nos of SAFT Lithium Battery 3.6V (Replaceable)",
                            "Enclosure": "ABS, IP66",
                            "Max. valves per project": "Not limited (each valve has unique secondary ID). Suitable qty of M-Bus master to be considered",
                            "Tamper": "Enclosure Open status alert (Optional)",
                            "Terminals": "2 clip type connectors (MBus & Valve termination)",
                            "Data read": "OPEN / CLOSE status, Battery level, enclosure tampering, last controlled time, Control type.",
                            "Communication Technology": "Wired MBus",
                            "Baud rate": "300 & 2400 bit/s",
                            "Working temperature": "Max 60 deg C",
                            "Digital Inputs": "Optional 2 inputs for Leak detection signal, Flow pulse counting, alarms...",
                            "MBus valve control software": "UBILL VCM / IBM",
                            "MBus standard": "EN 13757",
                            "Data Write": "OPEN / CLOSE command, set primary address",
                            "Manual Override": "Press buttons for local OPEN / CLOSE (Located inside the CU optional)"
                        },
                        "technicalFlow": [
                            { dn: "DN15", d1d2: "G1/2”", od: "15", l1: "57", l2l3: "11", f: "25", h1: "71" },
                            { dn: "DN20", d1d2: "G3/4”", od: "20", l1: "63", l2l3: "12", f: "31", h1: "74" },
                            { dn: "DN25", d1d2: "G1”", od: "25", l1: "73", l2l3: "16", f: "37", h1: "77" },
                            { dn: "DN32", d1d2: "G1 ¼”", od: "30", l1: "84", l2l3: "22", f: "43", h1: "80" }
                        ],
                        "technicalFlowColumns": [
                            { key: "dn", label: "DN" },
                            { key: "d1d2", label: "D1/D2" },
                            { key: "od", label: "OD" },
                            { key: "l1", label: "L1" },
                            { key: "l2l3", label: "L2/L3" },
                            { key: "f", label: "F" },
                            { key: "h1", label: "H1" }
                        ],
                        "orderCodes": [
                            { size: "DN15", orderId: "TKN2201 + TKN2215" },
                            { size: "DN20", orderId: "TKN2201 + TKN2220" },
                            { size: "DN25", orderId: "TKN2201 + TKN2225" },
                            { size: "DN32", orderId: "TKN2201 + TKN2232" }
                        ],
                        "application": "SUB METERING (DISTRICT COOLING / BILLING COMPANIES):\nTechknave MBus smart valve helps District cooling / Sub metering billing companies / Facility management companies to shutoff chilled water supply in sub-metering side water distribution. Remote shutoff command shall be issued from command center remotely in case of non-payment or leak detection.\n\nWATER MUNCIPALITES:\nTechknave Mbus Smart valve help water distribution companies to optimize their network by remotely closing pipes before water reaching users. A smart management of Open/ close operations can be performed automatically from command center.\n\nHVAC SYSTEMS:\nTechknave M-bus shutoff valves are used in building automation systems to control the flow of water in heating, ventilation, and air conditioning (HVAC) systems. They help regulate temperature and humidity levels in buildings, which can improve energy efficiency and occupant comfort.",
                        "tags": [
                            "Valves & Switches",
                            "Smart Valve Controller (Segregated)"
                        ],
                        "features": [
                            "MBus Operated Smart Shut off Valve with Feedback monitoring",
                            "Battery Operated with ultra-Low consumption (15 years life span)",
                            "Valve Sizes - DN15 / DN20 / DN25 / DN32",
                            "Complaint with all Mbus Masters",
                            "Industrial Grade (PN16, IP66)",
                            "Real time valve status monitoring",
                            "Valve control (ON / OFF commands via Mbus)"
                        ],
                        "overview": "Techknave MBus Shut off valve TKN 2201F is a battery - operated SMART VALVE used for opening and closing the valve through MBus control telegram. TKN 2201F MBus SMART VALVE shall be used in Sub-metering solutions, Building management Applications, Facility management companies for remote disconnection. MBus controller and Valve are segregated units. Techknave Mbus smart valves improve the efficiency, safety, and reliability of various industrial processes, leading to cost savings and better outcomes.\nThe Controller Unit (CU) has on-board terminals for connection to M-BUS loop, power supply to Valve unit & Feedback from valve unit. The replaceable lithium battery has autonomy of 15+ years .. The CU provide Open/ Close status, Low battery status in real time monitoring. Controller Tamper status and Manual Override (ON/OFF button inside CU) features are optional to add.",
                        "longDescription": "Smart M-Bus Valve Controller-Segregated\nValve type: Motorized ball valve \nPipe Section : DN15, DN20, DN25 and DN32\nPower: Battery powered (16+ years)\nValve body & Ball : Brass/ SS304\nCommunication: M-Bus / LoRaWAN"
                    }
                ]
            },
            {
                name: "Smart Compact Switch\n(Relay control)",
                slug: "smart-compact-switch",
                products: [
                    {
                        "id": "tkn210xc",
                        "name": "Smart compact switch",
                        "productCode": "TKN210xC",
                        "description": "Smart compact switch\nCommunication : M-Bus / LoRaWAN\nValve Compatibility : External powered valve\nEnclosure : ABS, Industrial Grade IP66",
                        "productGroup": "TKN210xC",
                        "image": tknSwitchImg,
                        "images": [],
                        "brochure": tknSwitchPdf,
                        "specs": {
                            "Communication": "M-Bus / LoRaWAN",
                            "Valve Compatibility": "External powered valve",
                            "Enclosure": "ABS, Industrial Grade IP66"
                        },
                        "orderCodesDescription": "Techknave M-BUS switch compact : TKN2101C\nFor Techknave power operated valves: TKN23xxP -where the xx represent the pipe DN size.\nCustomers can buy both M-Bus switch & TKN power operated valve together or alternative they can buy only the M-Bus witch and free to choose their 2-way shut off valves.",
                        "dimensionsDescription": "100 * 80 * 35 mm (W * H * D)",
                        "tags": [
                            "Valves & Switches",
                            "Smart Compact Switch (Relay control)"
                        ],
                        "features": [
                            "Smart Compact Switch unit with relay contact suitable for 2-way shut off valve actuators (2 / 3 & 4-wire SPST & SPDT type shutoff valve)",
                            "Externally powered valve 230VAC controlled through Smart Compact Switch",
                            "Valve sizes – DN15 to DN200",
                            "Communication: M-Bus (EN-13757), LoRaWAN",
                            "Industrial grade – ABS, IP66",
                            "Provision with valve feedback monitoring",
                            "Valve Control (ON/OFF commands)"
                        ],
                        "overview": "The new Technknave Smart Compact Switch is a relay output module with potential free NO/NC contact with valve position feedback monitoring suitable to operate powered 2-way shutoff valve. The compact switch has on-board easy plug-in terminals for incoming power / valve power out / valve feedback / M-Bus looping & optional Pulse inputs. The Smart Compact switch along with powered valves shall be used in sub-metering solutions, building management applications, facility management companies for remote disconnection of liquid flow.",
                        "longDescription": "Smart compact switch\nCommunication : M-Bus / LoRaWAN\nValve Compatibility : External powered valve\nEnclosure : ABS, Industrial Grade IP66"
                    },
                    {
                        "id": "tkn280xr",
                        "name": "Gaskonnect Relay module",
                        "productCode": "TKN280xR",
                        "description": "Gaskonnect Relay module (TKN280xR)\n Relay switch for solenoid control\nCommunication: Mbus / LoRaWAN\nPower: M-Bus (loop powered) / Battery (LoRaWAN)",
                        "productGroup": "TKN280xR",
                        "image": tknRelayImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Communication": "Mbus / LoRaWAN",
                            "Power": "M-Bus (loop powered) / Battery (LoRaWAN)"
                        },
                        "tags": [
                            "Valves & Switches",
                            "Smart Compact Switch (Relay control)"
                        ],
                        "features": [
                            "Operating temperature ranges -5 ° C to +60°C",
                            "Real time clock with tamper logging options",
                            "1 Relay output with NO/NC",
                            "Solenoid valve control Module",
                            "Controls Solenoid valve through UBill IBM / UBill AMR Software"
                        ],
                        "overview": "GAS KONNECT TKN2801R / TKN2803R is a set of smart relay devices designed to integrate with GAS SOLENOIDs in Domestic gas distribution networks. These devices essentially convert existing gas solenoids into network operated smart solenoids.",
                        "longDescription": "Gaskonnect Relay module (TKN280xR)\n Relay switch for solenoid control\nCommunication: Mbus / LoRaWAN\nPower: M-Bus (loop powered) / Battery (LoRaWAN)"
                    }
                ]
            },
            {
                name: "Smart Compact Valve",
                slug: "smart-compact-valve",
                products: [
                    {
                        "id": "tkn29xxcb-tkn27xxcb-tkn26xxcb",
                        "name": "Techknave Smart Compact Valve",
                        "productCode": "TKN29XXCB/ TKN27XXCB /  TKN26XXCB",
                        "description": "Techknave Smart Compact Valve\nCommunication : M-Bus / WM-Bus / LoRaWAN\nPipe Size : DN20, DN25, DN32, DN40\nIP Rating : IP68\nPower: Battery operated",
                        "productGroup": "TKN29XXCB/ TKN27XXCB /  TKN26XXCB",
                        "image": tknSmartValveImg,
                        "images": [],
                        "brochure": tknValvePdf,
                        "specs": {
                            "Communication": "M-Bus / WM-Bus / LoRaWAN",
                            "Pipe Size": "DN20, DN25, DN32, DN40",
                            "IP Rating": "IP68",
                            "Power": "Battery operated"
                        },
                        "tags": [
                            "Valves & Switches",
                            "Smart Compact Valve"
                        ],
                        "features": [
                            "MBus operated smart shut off valve",
                            "Battery operated (16+ Years , Replaceable lithium type C battery)",
                            "Valve Sizes—DN20, DN25, DN32, DN40",
                            "Complaint with most MBus masters",
                            "Polarity reversal protection",
                            "Industrial Grade (PN16, IP68)",
                            "Controller with RTC",
                            "Suitable for potable / Chilled / Hot water",
                            "Full open / Full Close - Physical reed switch",
                            "feedback"
                        ],
                        "overview": "Techknave MBus smart valve compact TKN29XX is operated on MBus wired protocol and used for opening and\nclosing of valve. Can be used in Sub-metering solutions, Building\nmanagement Applications, Facility management companies for remote disconnection. Mbus smart valve compact improve the efficiency, safety and reliability of varies industrial processes,\nleading to cost savings and better outcomes.",
                        "longDescription": "Techknave Smart Compact Valve\nCommunication : M-Bus / WM-Bus / LoRaWAN\nPipe Size : DN20, DN25, DN32, DN40\nIP Rating : IP68\nPower: Battery operated"
                    }
                ]
            },
            {
                name: "Integrated BTU Valve",
                slug: "integrated-btu-valve",
                products: [
                    {
                        "id": "uflo-intelligent-valve-with-integrated-heat-meter-u51",
                        "name": "Uflo Intelligent Valve with Integrated Heat Meter- U51",
                        "description": "Uflo Intelligent Valve with Integrated Heat Meter- U51\nSize : DN15 to DN 40\nCommunication : M-Bus/ RS-485/ NB-IOT/ W M-Bus\nBattery Life : 10 years\nProtection : IP65/IP67",
                        "productGroup": "Uflo Intelligent Valve with Integrated Heat Meter- U51",
                        "image": u51Img,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Size": "DN15 to DN 40",
                            "Communication": "M-Bus/ RS-485/ NB-IOT/ W M-Bus",
                            "Battery Life": "10 years",
                            "Protection": "IP65/IP67"
                        },
                        "tags": [
                            "Valves & Switches",
                            "Integrated BTU Valve"
                        ],
                        "features": [
                            ". Products are applied to heating metering, multi-mode heating balance",
                            "regulation and control, remote control.",
                            ". Consistent with conventional heat meters and directly replaceable.",
                            ". Ultrasonic metering, no mechanical wear and tear, longer service life.",
                            ". Accuracy level: Level 2",
                            "· Range ratio: R50/100",
                            "· Temperature range: (4-95)℃",
                            "· Temperature difference range: (2~90)K",
                            ". Conformity: EN1434",
                            ". Communication interface: M-BUS/RS-485/NB-loT/ wMBUS",
                            "· Replaceable battery design"
                        ],
                        "overview": "The U51 Series is a new-generation ultrasonic BTU  meter with a built-in control valve for modern HVAC and building management systems. It combines precise ultrasonic measurement and automatic flow control in one compact unit, removing the need for external balancing or control valves. With no moving parts, it delivers high accuracy, stable low-flow performance, and long service life. The integrated valve supports dynamic balancing, flow limitation, and on/off control to reduce energy waste and improve system efficiency. It is suitable for heating, cooling, and combined energy applications, with intelligent firmware compliant with EN1434. Designed for smart buildings, it supports M-Bus, RS-485, NB-IoT, and wireless M-Bus for AMR and BMS integration. Built-in Power Control and Delta-T management further optimize coil performance and overall plant efficiency.",
                        "longDescription": "Uflo Intelligent Valve with Integrated Heat Meter- U51\nSize : DN15 to DN 40\nCommunication : M-Bus/ RS-485/ NB-IOT/ W M-Bus\nBattery Life : 10 years\nProtection : IP65/IP67"
                    }
                ]
            }
        ]
    },
    // =========================================================================
    // GATEWAYS & CONNECTIVITY
    // =========================================================================
    {
        category: "Gateways & Connectivity",
        slug: "gateways-connectivity",
        subcategories: [
            {
                name: "M-Bus Products",
                slug: "m-bus-products",
                products: [
                    {
                        "id": "u2602x-sxxx",
                        "name": "M-Bus Master",
                        "description": "Uconnect M-Bus Master\nSlaves : 100/250\nCommunication: RS485 / TCP\nPower supply: 24V DC, 1.2A\nDIN Rail Sleek model",
                        "productGroup": "M-Bus Master",
                        "image": mbusMasterImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Slaves": "100/250",
                            "Communication": "RS485 / TCP",
                            "Power supply": "24V DC, 1.2A"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "M-Bus Products"
                        ],
                        "features": [
                            "Supports up to 250 M-Bus devices",
                            "Converts M-Bus to RS232 / RS485 / TCP-IP",
                            "Automatic RS485 direction control",
                            "Built-in M-Bus short-circuit protection",
                            "Power input: 24V, 2A DC",
                            "Automatic M-Bus load adjustment",
                            "Configurable short-circuit reaction and recovery time",
                            "Over-voltage protection >1000V",
                            "LED indicators for power, alarm, RX, TX",
                            "DIN-rail mounting, industrial design"
                        ],
                        "overview": "UConnect M-Bus Masters are industrial-grade communication gateways designed to reliably collect data from large networks of M-Bus meters and sensors. They act as a central hub that powers, manages, and communicates with up to 250 M-Bus slave devices from a single unit.\nBy converting M-Bus signals into RS232, RS485, or TCP/IP, UConnect M-Bus Masters enable seamless integration with PLCs, BMS, SCADA systems, data loggers, and cloud platforms. Built-in protection against short circuits, overloads, and high voltage ensures safe and stable operation even in harsh field conditions.\nWith automatic load adjustment, intelligent fault recovery, and DIN-rail industrial design, UConnect M-Bus Masters provide a reliable and scalable solution for smart metering, energy management, and large-scale monitoring applications.",
                        "longDescription": "Uconnect M-Bus Master\nSlaves : 100/250\nCommunication: RS485 / TCP\nPower supply: 24V DC, 1.2A\nDIN Rail Sleek model"
                    },
                    {
                        "id": "u2601-sxxx",
                        "name": "M-Bus Level Converter",
                        "description": "Uconnect M-Bus Level Converter\nSlaves : 125/250\nCommunication: RS485 \nPower supply: 24V DC, 1A\nDIN Rail, ABS body",
                        "productGroup": "M-Bus Level Converter",
                        "image": mbusLevelImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Slaves": "125/250",
                            "Communication": "RS485",
                            "Power supply": "24V DC, 1A"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "M-Bus Products"
                        ],
                        "features": [
                            "Supports up to 250 M-Bus devices",
                            "Converts M-Bus to RS232 / RS485",
                            "Automatic RS485 direction control",
                            "Built-in M-Bus short-circuit protection",
                            "Power input: 24V, 2A DC",
                            "Automatic M-Bus load adjustment",
                            "Configurable short-circuit reaction and recovery time",
                            "Over-voltage protection >1000V",
                            "LED indicators for power, alarm, RX, TX",
                            "DIN-rail mounting, industrial design"
                        ],
                        "overview": "UConnect M-Bus Master is a robust communication gateway designed to integrate M-Bus field devices with modern control and monitoring systems.\nIt converts M-Bus signals into RS232, RS485 for seamless data transmission. The device supports up to 250 M-Bus slave devices, making it ideal for large-scale metering networks.  Adding U2601T-TCP makes the U2601 Level converter to TCP enabled.\nSupports 125 / 250 slave devices connected to M-Bus Level Converter.With automatic load adjustment and short-circuit protection, it ensures stable and safe operation. Its DIN-rail mounting and industrial-grade design make it suitable for building automation and utility applications.\nUConnect M-Bus level converters enables easy integration of water, gas, BTU meters, and M-Bus valves into BMS and SCADA systems.",
                        "longDescription": "Uconnect M-Bus Level Converter\nSlaves : 125/250\nCommunication: RS485 \nPower supply: 24V DC, 1A\nDIN Rail, ABS body"
                    },
                    {
                        "id": "u2601u-s20",
                        "name": "M-Bus USB Powered",
                        "description": "Uconnect M-Bus USB Powered\nPower Supply : USB powered (5v, 500mA)\nMaximum Slaves : Upto 20 slaves",
                        "productGroup": "M-Bus USB Powered",
                        "image": mbusUsbImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Power Supply": "USB powered (5v, 500mA)",
                            "Maximum Slaves": "Upto 20 slaves"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "M-Bus Products"
                        ],
                        "features": [
                            "USB Powered (5V, 500mA)",
                            "conforms to European EN1434-3 standard",
                            "USB Over Voltage / Over Current",
                            "MBus Short circuit / Over Load",
                            "Maximum slaves Up to 20 Slaves"
                        ],
                        "overview": "This USB to M-Bus master consists of serial communication module,\npower module, modem module, indication module and protection module.The power supply module takes power directly from the USB port without additional power input; the modem module is self-developed, with strong load capacity, good reception performance and high communication rate; the indication module indicates the power status of the master and the data sending and receiving status, as well as the short-circuit and overload of the\nbus;",
                        "longDescription": "Uconnect M-Bus USB Powered\nPower Supply : USB powered (5v, 500mA)\nMaximum Slaves : Upto 20 slaves"
                    },
                    {
                        "id": "u2601g-sxxx",
                        "name": "M-Bus Gateway Panel",
                        "description": "UCONNECT M-Bus Gateway Panel  \nSlaves: 250 /500 /750 /1000\nPre-installed & wired with \n - 1x 24vDC Power supply\n - M-Bus level Convertor\n - 1x M-Bus serial to TCP convertor \nincoming supply: 85-240VAC, 50/60 HZ",
                        "productGroup": "M-Bus Gateway Panel",
                        "image": mbusPanelImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Slaves": "250 /500 /750 /1000",
                            "incoming supply": "85-240VAC, 50/60 HZ"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "M-Bus Products"
                        ],
                        "features": [
                            "Supports up to 250 / 500 / 750 / 1000 M-Bus slaves depending on model.",
                            "Built-in TCP/IP converter for Ethernet communication.",
                            "Industrial 24 V DC SMPS power supply integrated in panel.",
                            "Automatic M-Bus load detection and adjustment.",
                            "Short-circuit and overload protection on M-Bus line.",
                            "DIN-rail mounted components for easy maintenance.",
                            "Separate terminal blocks for power, M-Bus, and Ethernet."
                        ],
                        "overview": "The U2601G series is an industrial M-Bus master panel with built-in TCP/IP communication, designed for large-scale smart metering and building management systems. It integrates high-capacity M-Bus masters, industrial 24 V DC power supply, and TCP converters in a compact DIN-mounted enclosure. The panel enables direct connection of hundreds of M-Bus meters and seamless integration with BMS, EMS, and cloud platforms over Ethernet. Each model is optimized for different network sizes, ranging from small installations (250 slaves) to very large deployments (1000 slaves).",
                        "longDescription": "UCONNECT M-Bus Gateway Panel  \nSlaves: 250 /500 /750 /1000\nPre-installed & wired with \n - 1x 24vDC Power supply\n - M-Bus level Convertor\n - 1x M-Bus serial to TCP convertor \nincoming supply: 85-240VAC, 50/60 HZ"
                    }
                ]
            },
            {
                name: "Converters",
                slug: "converters",
                products: [
                    {
                        "id": "u2403x-s100",
                        "name": "M-Bus to Modbus Converter",
                        "description": "Uconnect M-Bus to Modbus Convertor\nSlaves : 100 nodes\nCommunication: RS485 / TCP\nPower supply: 24V DC, 1A\nDIN Rail Sleek model",
                        "productGroup": "U2403X-S100",
                        "image": modbusGwImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Slaves": "100 nodes",
                            "Communication": "RS485 / TCP",
                            "Power supply": "24V DC, 1A"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Converters"
                        ],
                        "features": [
                            "MAX number of M-Bus devices: 100",
                            "RS485 transmission direction: automatic",
                            "M-Bus short connection protection: yes",
                            "Modbus TCP IP conversion: Automatic",
                            "Mounting type: on DIN rail"
                        ],
                        "overview": "M-Bus Master to Modbus Converter is dedicated to convert M-Bus signal\nto Modbus RS485/TCP-IP . Up to 100 M-Bus devices can be connected to\nthis device",
                        "longDescription": "Uconnect M-Bus to Modbus Convertor\nSlaves : 100 nodes\nCommunication: RS485 / TCP\nPower supply: 24V DC, 1A\nDIN Rail Sleek model"
                    },
                    {
                        "id": "u2406-edge-u1401",
                        "name": "Modbus to Bacnet Converter",
                        "description": "Uconnect Edge gateway + Mod to BacIP driver\nSoft License - 500 tag license.",
                        "productGroup": "U2406 Edge + U1401",
                        "image": uconnectEdgeImg,
                        "images": [],
                        "brochure": null,
                        "specs": {},
                        "tags": [
                            "Gateways & Connectivity",
                            "Converters"
                        ],
                        "features": [
                            "Uconnect Edge controller hardware + U1401 Modbus/bacNet IP firmware supporting 500 tag points",
                            "Manage Modbus TCP and RTU simultaneously",
                            "Support 2x RS485 channels (2x32 RTU devices)",
                            "Support 1xTCP port to act as Modbus TCP Client /Server",
                            "BACnet IP configuration through IP web interface",
                            "Mounting type: on DIN rail",
                            "Power supply - 24vDC, 1 amps"
                        ],
                        "overview": "Uconnect Modbus to BACnet IP Converter is combination of UCONNECT Edge controller hardware and U1401 Modbus to bacnetIP firware pre-loaded into the module. The device enable the communication of Modbus devices over BACnet protocol. 64 Modbus devices data can be converted into BACnet object and can be accessed from BACnet IP network. The data can be monitored from BMS, HVAC control, Lighting control, and energy Management software.\n\nThe base module support  upto 500 tag count. Incase of additonal tags seperate licesne to be obtained with 500 tags count. Maximum of 2000 tags only suporrted.\nU1401 - Modbus/Bacnet IP license - 500 tag count\nU2406-Edge Controller - hardware module",
                        "longDescription": "Uconnect Edge gateway + Mod to BacIP driver\nSoft License - 500 tag license."
                    },
                    {
                        "id": "u2406edge-u2602-s100-u1402",
                        "name": "Mbus to Bacnet Converter",
                        "description": "Uconnect Edge gateway + Mbus Master + Mbus to BacIP driver\nSoft license - 500 tag points",
                        "productGroup": "U2406Edge + U2602 S100 + U1402",
                        "image": uconnectEdgeImg,
                        "images": [],
                        "brochure": null,
                        "specs": {},
                        "tags": [
                            "Gateways & Connectivity",
                            "Converters"
                        ],
                        "features": [
                            "Uconnect Edge controller hardware + M-Bus Master (250 slaves) + U1402 M-Bus/bacNet IP firmware supporting 500 tag points",
                            "Manage upto 250 M-Bus slaves. incase of more M-Bus devices, additonal M-Bus master to be added along with addtional tag license",
                            "BACnet IP configuration through IP web interface",
                            "Mounting type: on DIN rail",
                            "Power supply - 24vDC, 1 amps"
                        ],
                        "overview": "Uconnect MBus to BACnet IP Converter is combination of UCONNECT Edge controller hardware, M-Bus master hardware and U1402 M-Bus to BacnetIP firware pre-loaded into the module. The converter polls the MBus slave data and act as a BACnet/IP server.\nMbus slaves data can be accessed from the network as BACnet Objects. Support all brands MBus meters without any further configuration. The meter data can be interfaced to any other systems without effort. Easy web configuration for setting object properties and ip details. \nThe data can be monitored from BMS, HVAC control, Lighting control, and energy Management software.\n\nThe base module support  upto 500 bacnet Points . Incase of additonal tags seperate licesne to be obtained with 500 tags count. Maximum of 2000 tags only suporrted.\nU1402 - MBus/Bacnet IP license - 500 tag count\nU2406-Edge Controller - hardware module\nU2302-S250 - Mbus Master hardware module",
                        "longDescription": "Uconnect Edge gateway + Mbus Master + Mbus to BacIP driver\nSoft license - 500 tag points"
                    },
                    {
                        "id": "u2301",
                        "name": "Serial to TCP Converter",
                        "description": "Uconnect Serial to TCP Converter\nBaudrate : Upto 115200 \nOperation : RTU Master/ TCP Master\nMounting : Din Rail",
                        "productGroup": "U2301",
                        "image": u2301Img,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Baudrate": "Upto 115200",
                            "Operation": "RTU Master/ TCP Master",
                            "Mounting": "Din Rail"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Converters"
                        ],
                        "features": [
                            "Integrates Modbus RTU-based PLCs, sensors, and actuators with SCADA systems or IoT plaorms.",
                            "Converts data from energy meters with RS485 interfaces for use in centralized energy management systems.",
                            "Enables remote access to Modbus RTU devices through Ethernet networks or the Internet."
                        ],
                        "overview": "Uconnect - U2301 is a single-port Modbus RTU RS485 to Modbus TCP converter is a device that bridges the gap between serial communicaon (RS485) and Ethernet-based communicaon (TCP/IP), specifically for the Modbus protocol. It enables devices using the Modbus RTU protocol over RS485 to communicate with devices or systems operang on Modbus TCP, such as SCADA systems or modern PLCs.",
                        "longDescription": "Uconnect Serial to TCP Converter\nBaudrate : Upto 115200 \nOperation : RTU Master/ TCP Master\nMounting : Din Rail"
                    },
                    {
                        "id": "cloudgate-probe-modbus",
                        "name": "Modbus to LoRaWAN Converter",
                        "description": "Modbus to LoRaWAN Converter:\nModbus interface\n• RS485\n• Half duplex\n• Screw terminal connection\nOperating temperature:  -20°C to 60°C\nHumidity:  5% to 95% relative humidity (noncondensing)",
                        "productGroup": "Cloudgate probe",
                        "image": modbusLorawanImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Operating temperature": "-20°C to 60°C",
                            "Humidity": "5% to 95% relative humidity (noncondensing)"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Converters"
                        ],
                        "features": [
                            "WATTECO:",
                            "LoRaWAN®,Class A",
                            "Easy to use and deploy",
                            "Management of all the variables (read and write) of a",
                            "ModBus (or JBus) RTU slave equipment from a remote",
                            "server via a LoRaWAN® network",
                            "Battery life up to 10 years",
                            "IP55",
                            "CloudGate Probe:",
                            "LoRaWAN class C",
                            "Read data from devices via the built in Modbus (RTU),",
                            "M-Bus (Wired), Digital or Analog Input.",
                            "LoRaWAN protocol 1.0.3",
                            "IP20"
                        ],
                        "overview": "WATTECO:\nThe ModBus/LoRaWAN® converter collects data from any ModBus RTU existing equipment and connects these devices to a\npublic or private LoRaWAN® network. The conerter has the capability to change the behaviour of the ModBus device by writing into its registers.\n\nCloudGate Probe:\nCloudGate Probe is a compact DIN rail mountable metering device that can connect devices over Modbus (RS-485), M-bus, Digital & Analog Input to a LoRaWAN or Cellular (NB-IoT/LTECatM)networks. This permits to monitor assets and buildings remotely in a convenient way.",
                        "longDescription": "Modbus to LoRaWAN Converter:\nModbus interface\n• RS485\n• Half duplex\n• Screw terminal connection\nOperating temperature:  -20°C to 60°C\nHumidity:  5% to 95% relative humidity (noncondensing)"
                    },
                    {
                        "id": "cloudgate-probe-mbus",
                        "name": "M-Bus to LoRaWAN Converter",
                        "description": "M-Bus to LoRaWAN Converter:\nM-Bus mini-master\n• 34V bus power\n• up to 4 Unit Loads\n• Screw terminal connection\nOperating temperature:  -20°C to 60°C\nHumidity:  5% to 95% relative humidity (noncondensing)",
                        "productGroup": "Cloudgate probe",
                        "image": cloudgateImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Operating temperature": "-20°C to 60°C",
                            "Humidity": "5% to 95% relative humidity (noncondensing)"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Converters"
                        ],
                        "features": [
                            "LoRaWAN class C",
                            "Read data from devices via the built in Modbus (RTU),",
                            "M-Bus (Wired), Digital or Analog Input.",
                            "LoRaWAN protocol 1.0.3",
                            "IP20"
                        ],
                        "overview": "CloudGate Probe is a compact DIN rail mountable metering device that can connect devices over Modbus (RS-485), M-bus, Digital & Analog Input to a LoRaWAN or Cellular (NB-IoT/LTECatM)networks. This permits to monitor assets and buildings remotely in a convenient way.",
                        "longDescription": "M-Bus to LoRaWAN Converter:\nM-Bus mini-master\n• 34V bus power\n• up to 4 Unit Loads\n• Screw terminal connection\nOperating temperature:  -20°C to 60°C\nHumidity:  5% to 95% relative humidity (noncondensing)"
                    },
                    {
                        "id": "tkn2803p",
                        "name": "Pulse to LoRaWAN Converter",
                        "description": "Pulse to LoRaWAN from GasKonnect module\nType : Built-in pulse reading (Gas meter reading and storage)\nCommunication : LoRaWAN enabled Gas Konnect Pulse Reader",
                        "productGroup": "TKN2803P",
                        "image": tkn2803pImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Type": "Built-in pulse reading (Gas meter reading and storage)",
                            "Communication": "LoRaWAN enabled Gas Konnect Pulse Reader"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Converters"
                        ],
                        "features": [
                            "Automatically read Gas Flow and volume data",
                            "Integrated battery with life expectancy of 10+ years",
                            "Operating temperature ranges -5 ° C to +60°C",
                            "Real time clock with historical data logging options",
                            "Data storing options incase of power failure/ Battery failure",
                            "2 Digital inputs configurable (Pulse Read / standard DI)"
                        ],
                        "overview": "Gas Konnect TKN2803P is a set of pulse to network enabled gas metering AMR device, which convert the pulse output from gas meter to respective network protocol\nmessage telegram details.",
                        "longDescription": "Pulse to LoRaWAN from GasKonnect module\nType : Built-in pulse reading (Gas meter reading and storage)\nCommunication : LoRaWAN enabled Gas Konnect Pulse Reader"
                    }
                ]
            },
            {
                name: "Gateways",
                slug: "gateways",
                products: [
                    {
                        "id": "u2404-edge",
                        "name": "Edge Controllers",
                        "description": "Uconnect Edge Controllers\nInterface: 2x RS485 & 2x TCP, 2x USB, 1x Memory card slot \nConfig: Web interface\nProtocols support: M-Bus / Modbus / BacNet IP\nABS casing, IP54, Din Rail, 12-36VDC, 2 Amps\nSupport upto 250 M-Bus nodes / 2000 tag points.",
                        "productGroup": "U2404-Edge",
                        "image": uconnectEdgeImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Interface": "2x RS485 & 2x TCP, 2x USB, 1x Memory card slot",
                            "Config": "Web interface",
                            "Protocols support": "M-Bus / Modbus / BacNet IP"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Gateways"
                        ],
                        "features": [
                            "Industrial-grade edge IoT controller",
                            "Debian Linux OS for stability and long-term support",
                            "Seamless compatibility with UConnect Gateway Drivers",
                            "Fan less, maintenance-free design",
                            "Designed for 24/7 continuous operation",
                            "8 GB onboard eMMC storage",
                            "DIN-rail and wall-mount installation support",
                            "Ideal for gateways, controllers, and data-logging applications"
                        ],
                        "overview": "The U2406-EDGE is a compact industrial edge IoT controller engineered for reliable field connectivity and edge processing.\nDesigned to operate on a stable Debian Linux platform, it ensures long-term reliability and flexibility.\nWith a fan less, solid-state architecture, it is optimized for 24/7 continuous operation.\nThe device provides rich industrial I/O for seamless integration with field equipment.",
                        "longDescription": "Uconnect Edge Controllers\nInterface: 2x RS485 & 2x TCP, 2x USB, 1x Memory card slot \nConfig: Web interface\nProtocols support: M-Bus / Modbus / BacNet IP\nABS casing, IP54, Din Rail, 12-36VDC, 2 Amps\nSupport upto 250 M-Bus nodes / 2000 tag points."
                    },
                    {
                        "id": "u2601t-tcp",
                        "name": "M-Bus Gateway",
                        "description": "MBUS RS485 to TCP Adapter\nProtocol : M-Bus ,Transparent\nModes : TCP Master & RS485 Slave, TCP slave & RS485 Master\nBudrate : Upto 115200 bps",
                        "productGroup": "U2601T-TCP",
                        "image": serialTcpImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Protocol": "M-Bus ,Transparent",
                            "Modes": "TCP Master & RS485 Slave, TCP slave & RS485 Master",
                            "Budrate": "Upto 115200 bps"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Gateways"
                        ],
                        "features": [
                            "The RS485 to TCP converter typically has its own IP address on the network.",
                            "Users can configure the IP address settings to allow the converter  to communicate with other devices on the same network.",
                            "Some RS485 to TCP converters come with configuration options that allow users to set parameters such as baud rate, data bits, stop bits, and parity to match the requirements of the connected serial device."
                        ],
                        "overview": "ConnectME RS485 to TCP converter, also known as a serial to\nEthernet converter, is a device that facilitates communication between devices or systems using RS485 serial communication and TCP/IP (Transmission Control Protocol/Internet Protocol) over Ethernet networks. The purpose of this converter is to enable serial devices that use the RS485 protocol to communicate over a TCP/IP network.",
                        "longDescription": "MBUS RS485 to TCP Adapter\nProtocol : M-Bus ,Transparent\nModes : TCP Master & RS485 Slave, TCP slave & RS485 Master\nBudrate : Upto 115200 bps"
                    },
                    {
                        "id": "u2301t-tcp",
                        "name": "Modbus Gateway",
                        "description": "",
                        "productGroup": "U2301T-TCP",
                        "image": null,
                        "images": [],
                        "brochure": null,
                        "specs": {},
                        "tags": [
                            "Gateways & Connectivity",
                            "Gateways"
                        ],
                        "features": [],
                        "overview": "",
                        "longDescription": ""
                    },
                    {
                        "id": "lorawan-gateway",
                        "name": "LoRaWAN Gateway",
                        "description": "High-performance LoRaWAN gateways for indoor and outdoor industrial IoT connectivity.",
                        "productGroup": "LoRaWAN Gateway",
                        "image": wirnetOutdoorImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Range": "-40°C +60°C",
                            "Casing": "IP67 / IP30 / Aluminium",
                            "Connectivity": "LoRaWAN, 4G, Ethernet"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Gateways"
                        ],
                        "features": [
                            "Indoor and Outdoor LoRaWAN Gateways",
                            "Carrier grade casing (IP67) for industrial use",
                            "Backhaul connectivity: 4G Worldwide module, Ethernet",
                            "Secure remote access options"
                        ],
                        "overview": "High-performance LoRaWAN gateways for indoor and outdoor industrial IoT connectivity. Choose from our range of indoor, outdoor, and multi-carrier gateways to suit your specific project needs.",
                        "longDescription": "Our LoRaWAN gateway portfolio offers comprehensive solutions for industrial IoT deployments. From indoor coverage to outdoor industrial environments, each variant is designed to meet specific connectivity requirements while maintaining the highest standards of reliability and performance.",
                        "variants": [
                            {
                                "id": "kerlink-indoor",
                                "name": "Kerlink Indoor",
                                "description": "Indoor LoRa® Gateway with Wi-Fi and Ethernet connectivity for smart buildings and network densification.",
                                "productGroup": "LoRaWAN Gateway",
                                "image": wirnetIndoorImg,
                                "images": [],
                                "brochure": null,
                                "specs": {
                                    "Interface": "Ethernet (RJ45), WiFi",
                                    "Config": "Web interface / Zero-Touch",
                                    "Protocols": "LoRaWAN / Semtech Packet Fwd",
                                    "Range": "-20°C +55°C",
                                    "Casing": "IP30",
                                    "Humidity": "5% to 95%"
                                },
                                "tags": [
                                    "Gateways & Connectivity",
                                    "Gateways"
                                ],
                                "features": [
                                    "Indoor LoRa® Gateway",
                                    "Ingress protection (IP30)",
                                    "Backhaul connectivity: Wi-Fi 2.4GHz and Ethernet (RJ45)",
                                    "Supported LoRaWAN® regional parameters: EU863-870, IN865-867, RU864-870, US902-928, AU915-928, AS923, KR920-923",
                                    "Operating temperature: -20°C +55°C (for gateway only, without power supply)",
                                    "Humidity: 5% to 95%",
                                    "Ideal for smart city, smart building projects",
                                    "Superior indoor coverage",
                                    "Operational excellence"
                                ],
                                "overview": "The \"Wirnet™ iFemtoCell\" is the ideal gateway to support your smart city, smart building or every smart project that requests dedicated indoor coverage and/or network densification, providing both a unique superior coverage and operational excellence.",
                                "longDescription": "The Wirnet™ iFemtoCell is designed for indoor LoRaWAN deployments requiring reliable coverage and easy installation. With dual connectivity options (WiFi and Ethernet), it offers flexibility in deployment scenarios. The gateway supports multiple regional parameters and features zero-touch provisioning for simplified setup."
                            },
                            {
                                "id": "kerlink-outdoor",
                                "name": "Kerlink Outdoor",
                                "description": "Outdoor LoRa® Gateway with 4G/3G fallback and carrier-grade IP67 casing for industrial use.",
                                "productGroup": "LoRaWAN Gateway",
                                "image": wirnetOutdoorImg,
                                "images": [],
                                "brochure": null,
                                "specs": {
                                    "Interface": "Ethernet (RJ45), 4G/3G",
                                    "Config": "Web interface / Remote",
                                    "Protocols": "LoRaWAN / Semtech Packet Fwd",
                                    "Range": "-40°C +60°C",
                                    "Casing": "IP67 Alu (Back), Polycarbonate (Front), Inox (mounting kit)",
                                    "Humidity": "95%"
                                },
                                "tags": [
                                    "Gateways & Connectivity",
                                    "Gateways"
                                ],
                                "features": [
                                    "Outdoor LoRa® Gateway",
                                    "Carrier grade casing (IP67) for industrial use",
                                    "Backhaul connectivity: 4G Worldwide module with 3G/2G fallback and Ethernet (RJ45)",
                                    "Supported LoRaWAN® regional parameters: EU863-870, IN865-867, RU864-870, US902-928, AU915-928, AS923, KR920-923",
                                    "Operating temperature: -40°C +60°C",
                                    "Humidity: 95%",
                                    "Durable construction: IP67 Aluminium back, Polycarbonate front, Inox mounting kit",
                                    "Ideal for smart city and smart industry projects",
                                    "Superior outdoor coverage",
                                    "Simple installation"
                                ],
                                "overview": "The \"Wirnet™ iStation\" is the ideal gateway to support your smart city, smart industry or any other smart project, combining simplicity of installation, unique superior coverage and operational excellence.",
                                "longDescription": "The Wirnet™ iStation is engineered for harsh outdoor environments with its IP67-rated carrier-grade casing. Featuring 4G connectivity with 3G/2G fallback, it ensures reliable backhaul even in remote locations. The gateway's wide temperature range and robust construction make it perfect for industrial IoT deployments."
                            },
                            {
                                "id": "cloudgate-mini",
                                "name": "CloudGate Mini",
                                "description": "Worldwide LTE Cat 4 Programmable Multicarrier Gateway with optional WiFi and LoRaWAN support.",
                                "productGroup": "LoRaWAN Gateway",
                                "image": cloudgateImg,
                                "images": [],
                                "brochure": null,
                                "specs": {
                                    "WWAN Modem LTE": "Supported bands: LTE FDD (B1-B5, B7, B8, B12, B13, B18-B20, B26, B28), TDD (38-41). Max speeds: DL 150 Mbps, UL 50 Mbps",
                                    "WWAN Modem 3G/2G": "Supported bands: UMTS/HSDPA/HSUPA/HSPA+ (B1, B2, B4, B5, B6, B8, B19). Max speeds: DC-HSPA+ DL 42 Mbps, UL 5.76 Mbps",
                                    "Rx Diversity": "Simultaneous Equalization and Rx Diversity on all bands",
                                    "Antenna Connectors": "1 × SMA: WWAN Main, 1 × SMA: WWAN Mimo/Div/GPS",
                                    "GPS": "Standalone/Assisted GPS, GPS OneXTRA™, Wideband processing (20MHz). Passive/active antenna support",
                                    "SIM": "USIM/SIM connection – Class B and Class C",
                                    "CPU": "i.MX280 (ARM926EJ-S @ 450 MHz)",
                                    "Memory": "256 MB Flash (20 MB data, 30 MB application)",
                                    "Ethernet": "10/100Mb/s RJ45 Connector (IEEE 802.3)",
                                    "Storage": "microSD card holder on main PCB",
                                    "Power Control": "Timed Wakeup, Ignition Sensing",
                                    "Battery": "Optional Li-Ion battery (last gasp function up to 1h)",
                                    "Power Input": "9-33V DC (Micro-Fit 3.0TM, Dual row, 4-position)",
                                    "Expansion (Rear)": "Optional WLAN or LoRa expansion card",
                                    "Expansion (Front)": "Fixed functionality: I2C, 3 x GPIO, RS485 or RS232 and CAN bus port (up to 1 Mbps)",
                                    "Case": "Aluminium",
                                    "Dimensions": "115 × 106 × 45 mm (4.52 × 4.17 × 1.77 in)",
                                    "Weight": "285 g / 10.05 oz",
                                    "Mounting": "Bulkhead, 6xM4 holes, DINrail with adapter",
                                    "System Status": "LED",
                                    "Operating Temp": "-30°C to +70°C (-22°F to 158°F)",
                                    "Storage Temp": "-40°C to +85°C (-40°F to 185°F)",
                                    "Humidity": "5% - 95%",
                                    "Certifications": "CE, FCC, PTCRB, ISED, AT&T, VZW, US Cellular",
                                    "Compliance": "ROHS, Reach, WEEE",
                                    "Management": "CloudGate Universe (OTA configuration)",
                                    "Development": "CloudGate development kit available (board, SDK, HDK)"
                                },
                                "tags": [
                                    "Gateways & Connectivity",
                                    "Gateways"
                                ],
                                "features": [
                                    "Worldwide LTE Cat 4 Programmable Multicarrier Gateway with 3G fallback",
                                    "Wide variety of wired interfaces with pre-installed versatile IO card",
                                    "Optional WiFi and LoRaWAN in rear expansion slot",
                                    "Secure remote access to Ethernet-connected devices",
                                    "Optional battery backup",
                                    "Operating temperature: -40°C to +85°C",
                                    "Humidity: 5% - 95%",
                                    "Ruggedized aluminium case design",
                                    "Industrial grade temperature ranges",
                                    "Timed wake-up and ignition sensing",
                                    "SIM connection support",
                                    "Passive and active GPS antenna support",
                                    "LuvitRED enabled for easy programming"
                                ],
                                "overview": "CloudGate mini provides remote access over a secure VPN tunnel to the Ethernet device(s) connected to its LAN Ethernet ports. CloudGate 4.0 next generation CloudGate 4.0 IoT gateways were designed with CloudGate's signature features; including ruggedized design housing, industrial grade temperature ranges, timed wake-up and ignition sensing, sim connection, passive and active GPS antenna support and all are LuvitRED enabled.",
                                "longDescription": "The CloudGate Mini is a versatile IoT gateway designed for industrial applications requiring reliable connectivity and programmability. With LTE Cat 4 connectivity and optional LoRaWAN support, it serves as a comprehensive solution for diverse IoT deployments. The LuvitRED programming environment enables custom logic and data processing at the edge."
                            }
                        ]
                    },
                    {
                        "id": "tosi-industrial-gateway",
                        "name": "Tosi Industrial Gateway",
                        "description": "Tosi Industrial Gateway is an industrial router with firewall and secure Plug & Go™ connectivity. It serves as an endpoint for secure remote connections. \nYour secure and scalable solution from remote access to global OT networking",
                        "productGroup": "Tosi Industrial Gateway",
                        "image": tosiboxImg,
                        "images": [],
                        "brochure": tosilockPdf,
                        "specs": {},
                        "tags": [
                            "Gateways & Connectivity",
                            "Gateways"
                        ],
                        "features": [
                            "Tosi Hub:",
                            "Central management device for Tosi network",
                            "Secure VPN hub for multiple remote connections",
                            "Plug & Go™ connectivity",
                            "ISO27001 certified security",
                            "256 Bit AES data encryption",
                            "Web-based management interface",
                            "Tosi Key:",
                            "Portable secure access device",
                            "USB-based plug & play connectivity",
                            "Instant VPN connection to Tosi network",
                            "No configuration required",
                            "Compatible with all Tosi Locks",
                            "Compact and portable design",
                            "Tosi 175:",
                            "Ports :",
                            "1 x RJ-45 WAN connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)",
                            "1 x RJ-45 LAN connection, 10/100 Mb/s, auto-negotiation(MDI / MDI-X)",
                            "LAN can be assigned as Service connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)",
                            "RS485 port is not supported in the software.",
                            "Connections :",
                            "9-35V DC",
                            "2 x WiFi antenna connector, RP-SMA Male",
                            "1 x LTE antenna connector, SMA Female",
                            "DIN rail attachment (back)",
                            "Maximum power consumption 10W",
                            "Tosi 350 :",
                            "Ports :",
                            " 1 x RJ-45 WAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)",
                            "4 x RJ-45 LAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)",
                            "1 x USB 2.0, type A",
                            "Connections :",
                            "2 pin industrial DC power socket",
                            "6-Pin 3.5mm Digital IO socket (6-Pin serial interface not supported in software)",
                            "5-35V DC, reverse polarity protection, voltage surge/transient protection",
                            "1 x RP-SMA for WiFi",
                            "DIN rail mounting in the back",
                            "Maximum power consumption 10W",
                            "Tosi 375 :",
                            "Ports :",
                            "1 x RJ-45 WAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)",
                            "4 x RJ-45 LAN connection, 10/100 Mbps, auto-negotiation (MDI / MDI-X)",
                            "1 x USB 2.0, type A",
                            "Connections :",
                            "2-pin industrial DC power socket",
                            "6-pin 3.5mm digital IO socket (6-pin serial interface not supported in software)",
                            "5-35V DC, reverse polarity protection, voltage surge/transient protection",
                            "1 x RP-SMA for WiFi",
                            "2 x SMA for LTE",
                            "DIN rail mounting in the back",
                            "Maximum power consumption 10W",
                            "Tosi Lock 500 :",
                            "Ports",
                            "1 x USB 2.0, type A",
                            "1 x RJ-45 WAN connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)",
                            "3 x RJ-45 LAN connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)",
                            "LAN3 can be assigned as Service connection, 10/100 Mb/s, auto-negotiation (MDI / MDI-X)",
                            "Connections",
                            "12-48V DC (+/-20%), reverse polarity protected",
                            "Device frame connector",
                            "2 x WiFi antenna connector, RP-SMA Female",
                            "(TBL5i",
                            ") 2 x LTE antenna connectors, SMA Female",
                            "2 x Digital Input, 2 x Digital Output, 24V DC out",
                            "DIN rail attachment (back)",
                            "Maximum power consumption 10W"
                        ],
                        "overview": "Tosi has automated secure connectivity and made it simple. It is a standardized way of building VPN connections based on a patented connection method. The configuration-free Plug\n& Go™ implementation is easy and ready to use within minutes. The unique feature of Tosi technology is the two-way connectivity that brings the benefits of IP networking plus remote maintenance with one technology. Tosi is ISO27001 certified, underlining the importance we place on protecting customers´ data. Platform security is based on automated firewall settings and point-to-point VPN technology with 256 Bit AES data encryption. Tosi Platform supports Layer 2 and layer 3 routing functions and protocols.\n\nTosi 175:\nTosi 175 is a cost-effective Plug & GoTM connectivity device and is ideal for demanding industry sectors that require an all-in-one solution that is compact, able to handle all environments and suited to global market usage. The 4G module and external 4G antenna provides stable Internet access, so the node can be easily configured anywhere\nTosi 350:\nthe Tosi 350: Tailored for businesses seeking a compact, all-encompassing solution that operates seamlessly across the globe. With its fixed ethernet interface and WiFi you can enjoy stable remote access wherever you are. No technical expertise is needed – just plug and play\nTosi 375:\n Tosi 375 - Your workhorse for any industry. If you are in a business that needs a compact, allin-one solution that can work nearly anywhere in the world, Tosi 375 is for you! With its fixed ethernet interface, WiFi, or internal LTE module complemented with external antennas, you can enjoy stable remote access wherever you are.\nTosi Lock 500:\nTosi Lock 500 is a high-end connectivity device bringing unprecedented possibilities for customers to manage their operations and to build new IoT solutions. The Lock 500 is ideal for demanding industrial environments and opens up new opportunities in security and office networking sectors.\nThe Lock 500 is compatible with all existing Tosi products. \nTosi 610:\nTosi 610 is a perfect choice for professional applications when wireless networking is not required. Leading edge cybersecurity technology from Tosi enable diverse application scenarios. The durable aluminium alloy shell and small form factor is ideal for rugged mounting conditions.\nTosi 675: \nTosi 675 is a powerful device for high demanding application in demanding industrial environments. With a wide range of connectivity interfaces the demand for always on connectivity is guaranteed. This device can be used in power-hungry industrial applications where speed and robustness are at the heart of the solution. \nTosi 695:\nUnleash the power of 5G cellular connectivity and LTE fallback with the Tosi 695 - a game-changer for networking professionals! Crafted with precision and engineered for\ntoughness, the Tosi 695 boasts a robust metal alloy casing complemented by an extensive temperature range and an IP30 Ingress Protection Rating. It's built to thrive in\nchallenging environmental conditions.",
                        "longDescription": "Tosi Locks is an industrial router with firewall and secure Plug & Go™ connectivity. It serves as an endpoint for secure remote connections. \nYour secure and scalable solution from remote access to global OT networking"
                    }
                ]
            },

            {
                name: "Power Supplies",
                slug: "power-supplies",
                products: [
                    {
                        "id": "uconnect-hdr-60-24",
                        "name": "Uconnect DIN Rail Power Supply",
                        "description": "Input: 85-240VAC, Output: 24VDC, 2.5A. DIN Rail Mount.\nModel: HDR-30-12 / HDR-60-24",
                        "productGroup": "Uconnect DIN Rail Power Supply",
                        "image": uconnectPsImg,
                        "images": [],
                        "brochure": smpsPdf,
                        "specs": {
                            "Input": "85-240VAC",
                            "Output": "24VDC, 2.5A",
                            "Protection": "IP20",
                            "Mounting": "DIN Rail"
                        },
                        "tags": [
                            "Gateways & Connectivity",
                            "Power Supplies"
                        ],
                        "features": [
                            "Universal AC input / Full range",
                            "Protections: Short circuit / Overload / Over voltage",
                            "Cooling by free air convection",
                            "DIN rail TS-35/7.5 or 15 mountable",
                            "LED indicator for power on",
                            "No load power consumption <0.3W"
                        ],
                        "overview": "A Switched-Mode Power Supply (SMPS) is a type of power supply that converts electrical power efficiently from one voltage level to another, usually from a higher voltage (85~264VAC ) to a lower DC voltage 24V DC.",
                        "longDescription": "Uconnect Power supply\nType : Switch mode power supply\nInput voltage : 85~264V AC\nOutput Voltage : 24V DC\nProtection : IP 20"
                    }
                ]
            }
        ]
    },
    // =========================================================================
    // SENSORS & ACTUATORS
    // =========================================================================
    {
        category: "Sensors & Actuators",
        slug: "sensors-actuators",
        subcategories: [
            {
                name: "Air Quality Sensor",
                slug: "air-quality",
                products: [
                    {
                        "id": "indoor-air-quality-sensor",
                        "name": "Indoor Air Quality Sensor",
                        "description": "DecentLab:\nTemperature -10 ... 50 °C\nHumidity 0 ... 95 % RH (non-condensing)\npower : Internal battery type\nEnclosure:  Self-extinguishing ABS wall-mount enclosure, white",
                        "productGroup": "Indoor Air Quality Sensors",
                        "image": decentlabIamImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "power": "Internal battery type",
                            "Enclosure": "Self-extinguishing ABS wall-mount enclosure, white"
                        },
                        "tags": [
                            "Sensors & Actuators",
                            "Air Quality Sensor"
                        ],
                        "features": [
                            "DecentLab:",
                            "State-of-the-art CO2 and VOC (volatile organic compounds) sensors.",
                            "Industry standard humidity and temperature sensor.",
                            "High accuracy barometric pressure sensor.",
                            "Ambient light sensor.",
                            "Motion / presence detector.",
                            "Place and measure: no setup required.",
                            "Unattended real-time monitoring for more than a year without replacing batteries."
                        ],
                        "overview": "Decentlab:\n indoor ambiance monitor continuously measures carbon dioxide (CO2) concentration, volatile organic compounds (VOC), temperature, humidity, barometric pressure, ambient light and motion / presence. These data allow to quantify the air quality, temperature and illumination (ambiance) in offices, class rooms, hospitals, stores or malls. These data also indicate the presence of people and how they move in a room. This allows to efficiently control heating, ventilation, air conditioning (HVAC) and illumination corresponding to the actual situation in a specific room",
                        "longDescription": "DecentLab:\nTemperature -10 ... 50 °C\nHumidity 0 ... 95 % RH (non-condensing)\npower : Internal battery type\nEnclosure:  Self-extinguishing ABS wall-mount enclosure, white"
                    },
                    {
                        "id": "temperature-humidity-sensor",
                        "name": "Temperature and Humidity Sensor",
                        "description": "Real-time monitoring of CO2, Temperature, Humidity, PM2.5, PM10, O3, HCHO, TVOC, Barometric Pressure.\nFeatures an E-ink screen and LoRaWAN connectivity.",
                        "productGroup": "Temperature and Humidity Sensors",
                        "image": milesightImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "CO2": "400 - 5000 ppm",
                            "Temperature": "-40°C to 85°C",
                            "Humidity": "0% to 100% RH",
                            "PM2.5/PM10": "0 - 1000 µg/m³",
                            "Connectivity": "LoRaWAN"
                        },
                        "tags": [
                            "Sensors & Actuators",
                            "Air Quality Sensor"
                        ],
                        "features": [
                            "Multiple sensors in one: HCHO, O3, TVOC, CO2, PM2.5, PM10, Temperature, Humidity, Barometric Pressure, Light, Motion",
                            "E-ink Screen for clear display",
                            "LoRaWAN wireless connectivity",
                            "Battery or DC powered options",
                            "NFC Configuration"
                        ],
                        "overview": "The AM300 Series is a compact indoor ambience monitoring sensor for measurement of temperature, humidity, light, CO2 concentration, HCHO/O3 level, TVOC, barometric pressure, PM2.5, PM10 and motion. The data will be shown on the E-ink screen in real-time, which helps to measure the indoor environment and comfort.",
                        "longDescription": "The AM300 Series is a compact indoor ambience monitoring sensor for measurement of temperature, humidity, light, CO2 concentration, HCHO/O3 level, TVOC, barometric pressure, PM2.5, PM10 and motion. The data will be shown on the E-ink screen in real-time, which helps to measure the indoor environment and comfort."
                    },
                ]
            },

            {
                name: "Water Leak Detection Sensor",
                slug: "water-leak",
                products: [
                    {
                        "id": "uem300-zld",
                        "name": "Wireless Zone Leak Sensor",
                        "description": "Uconnect Wireless Zone Leak Sensor\nPower supply : 24V 2A DC for Gateway and Battery powered for Sensors\nIP Rating : IP65\nCommunication : LoRaWAN",
                        "productGroup": "UEM300-ZLD",
                        "image": uconnectZoneLeakImg,
                        "images": [],
                        "brochure": leakPdf,
                        "specs": {
                            "Power Supply": "Gateway : 24V 2A DC, Sensors : Battery Powered",
                            "Sensor Wire Length": "2 meters (Default) Extendable up to 10 meters",
                            "Communication": "LoRa WAN (Wireless Low power)",
                            "Monitoring Parameters": "Leak, Temperature, Humidity & Battery Percentage",
                            "Battery Type": "A Type Battery (2 Nos)",
                            "Battery Life": "Up to 5 Years (24 Leaks per day with 24 scheduled data transmit)",
                            "IP Rating": "Sensors : IP65",
                            "Operating Temperature": "15 to 40°C (5 to 104°F)"
                        },
                        "tags": [
                            "Sensors & Actuators",
                            "Water Leak Detection Sensor"
                        ],
                        "features": [
                            "Detects liquid leaks along the entire length of the sensing cable",
                            "Wireless communication (LoRaWAN)",
                            "Immediate alarm notification",
                            "Monitoring of Leak, Temperature, Humidity & Battery Percentage",
                            "Long battery life (Up to 5 years)"
                        ],
                        "overview": "Uconnect Wireless Zone Leak Sensor is designed for reliable leak detection with LoRaWAN communication. It monitors leaks along with temperature and humidity, powered by long-lasting batteries.",
                        "longDescription": "Uconnect Wireless Zone Leak Sensor\nPower Supply: Gateway : 24V 2A DC, Sensors : Battery Powered\nSensor Wire Length: 2 meters (Default) Extendable up to 10 meters\nCommunication: LoRa WAN (Wireless Low power)\nMonitoring Parameters: Leak, Temperature, Humidity & Battery Percentage\nBattery Type: A Type Battery (2 Nos)\nBattery Life: Up to 5 Years\nIP Rating: Sensors : IP65\nOperating Temperature: 15 to 40°C"
                    },

                    {
                        "id": "uem300-sp",
                        "name": "Wireless Single Point Leak Sensor",
                        "description": "Uconnect Wireless Single point Leak Sensor\nPower : Battery powered (4000 mAh Li-SOCl₂ )\nCommunication : LoRaWAN\nIP Rating : IP67",
                        "productGroup": "UEM300-SP",
                        "image": uconnectSinglePointLeakImg,
                        "images": [],
                        "brochure": leakPdf,
                        "specs": {
                            "Power": "Battery powered (4000 mAh Li-SOCl₂ )",
                            "Communication": "LoRaWAN",
                            "IP Rating": "IP67"
                        },
                        "tags": [
                            "Sensors & Actuators",
                            "Water Leak Detection Sensor"
                        ],
                        "features": [
                            "Spot leak detection with probe",
                            "Wireless LoRaWAN connectivity",
                            "Submersible probe",
                            "Battery operated with long life"
                        ],
                        "longDescription": "Uconnect Wireless Single point Leak Sensor\nPower : Battery powered (4000 mAh Li-SOCl₂ )\nCommunication : LoRaWAN\nIP Rating : IP67"
                    },
                    {
                        "id": "uem300-cl",
                        "name": "Wireless Capacitive Level Sensor",
                        "description": "Uconnect Wireless Capacitive Level Sensor\nPower Supply : 2 × ER14505 lithium batteries (3.6 V)\nCommunication : LoRa / LoRaWAN Class A\nBattery Life : Upto 4.6 years",
                        "productGroup": "UEM300-CL",
                        "image": uconnectClsImg,
                        "images": [],
                        "brochure": leakPdf,
                        "specs": {
                            "Power Supply": "2 × ER14505 lithium batteries (3.6 V)",
                            "Communication": "LoRa / LoRaWAN Class A",
                            "Battery Life": "Upto 4.6 years"
                        },
                        "tags": [
                            "Sensors & Actuators",
                            "Water Leak Detection Sensor"
                        ],
                        "features": [
                            "Capacitive Level Sensing",
                            "Wireless LoRa/LoRaWAN Class A",
                            "Long battery life (up to 4.6 years)",
                            "High precision"
                        ],
                        "longDescription": "Uconnect Wireless Capacitive Level Sensor\nPower Supply : 2 × ER14505 lithium batteries (3.6 V)\nCommunication : LoRa / LoRaWAN Class A\nBattery Life : Upto 4.6 years"
                    },
                    {
                        "id": "u3001-ald-s",
                        "name": "Wired Non-Location Area Leak Sensor",
                        "description": "Uconnect Wired Non-Location Area Leak Sensor\nPower Supply :\tDC 9–30 V (DC 12 V recommended)\nMax Sensing Cable Length : Up to 500 m\nDetection Method : Non-positional liquid leak detection",
                        "productGroup": "U3001-ALD-S",
                        "image": uconnectAldImg,
                        "images": [],
                        "brochure": leakPdf,
                        "specs": {
                            "Power Supply": "DC 9–30 V (DC 12 V recommended)",
                            "Max Cable Length": "Up to 500 m",
                            "Detection Method": "Non-positional liquid leak detection",
                            "Output": "Relay Out (NO/NC)"
                        },
                        "tags": [
                            "Sensors & Actuators",
                            "Water Leak Detection Sensor"
                        ],
                        "features": [
                            "Non-positional liquid leak detection",
                            "Detects water presence across a surface or zone",
                            "Adjustable sensitivity knob",
                            "Relay output for direct control or BMS integration",
                            "NC/COM/NO Relay connections",
                            "Robust industrial housing"
                        ],
                        "longDescription": "Uconnect Wired Non-Location Area Leak Sensor\nPower Supply :\tDC 9–30 V (DC 12 V recommended)\nMax Sensing Cable Length : Up to 500 m\nDetection Method : Non-positional liquid leak detection"
                    },
                    {
                        "id": "u3101l-ald-s",
                        "name": "Wired Location Area Leak Sensor",
                        "description": "Uconnect Wired Location Area Leak Sensor\nPower Supply :  12V DC, 24V DC, 24V AC, or 220V AC\nProtocols Supported : MODBUS-RTU, MODBUS-ASCII\nMax Cable Length : 1200 meters (RS-485)",
                        "productGroup": "U3101L-ALD-S",
                        "image": wiredLeakSensorImg,
                        "images": [],
                        "brochure": null,
                        "specs": {
                            "Power Supply": "12V DC, 24V DC, 24V AC, or 220V AC",
                            "Protocols Supported": "MODBUS-RTU, MODBUS-ASCII",
                            "Max Cable Length": "1200 meters (RS-485)"
                        },
                        "tags": [
                            "Sensors & Actuators",
                            "Water Leak Detection Sensor"
                        ],
                        "features": [
                            "Extended Monitoring Range: Supports up to 7.5 meters of liquid sensing cable.",
                            "Accurate Leak Localization: Displays leak location to within 0.1 meters using a 3-digit LCD display.",
                            "Status Indicators: Equipped with five LED indicators for power, system status, and communication activity.",
                            "Multi-Alarm Functionality: Detects and reports fault, leak, interference, and communication errors.",
                            "RS-485 Communication: Integrates with BMS or SCADA systems via MODBUS-RTU or MODBUS-ASCII protocols.",
                            "Relay Outputs: Provides both normally open and normally closed relay contact options"
                        ],
                        "overview": "The U2801W is a high-precision leak detection positioning controller designed for real-time monitoring and localization of liquid leaks in critical infrastructure environments. Capable of supporting up to 7.5 meters of sensing cable, this controller provides rapid detection, accurate leak location reporting, and comprehensive alarm signaling via visual\nindicators, relay outputs, and RS-485 communication.",
                        "longDescription": "Uconnect Wired Location Area Leak Sensor\nPower Supply :  12V DC, 24V DC, 24V AC, or 220V AC\nProtocols Supported : MODBUS-RTU, MODBUS-ASCII\nMax Cable Length : 1200 meters (RS-485)"
                    },

                ]
            },

        ]
    },
    // =========================================================================
    // SOFTWARE
    // =========================================================================
    {
        category: "Software",
        slug: "software",
        subcategories: [
            {
                name: "Utility Billing",
                slug: "utility-billing",
                products: [
                    {
                        id: "bms-integration",
                        name: "BMS Integration Module",
                        description: "Software connector that bridges metering data directly into Building Management Systems.",
                        image: placeholder,
                        brochure: bmsIntegrationPdf,
                        tags: ["Integration", "BMS", "Connector"]
                        ,
                        features: [
                            "UBILL IBM/AMR have provision to integrate to BMS System ( Push / Pull meter data over BACnet IP ).\r\n• UBILL BMS module runs over top of UBILL IBM/AMR software installed in the desktop PC.\r\n• UBILL BMS module to be purchased along with IBM or AMR software license.\r\n• BMS module compatible with most BMS system (Honeywell, Siemens, Schneider, Johnson\r\ncontrols, Niagara etc."
                        ],
                        longDescription: "UBILL is a future ready Utility Metering solutions from CONNECTME SOLUTIONS providing\r\nimproved Operational efficiency, reduced operation cost and greater customer experience in\r\nmetering and billing sector.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "desktop-tenant-billing",
                        name: "Desktop Tenant Billing Module",
                        description: "Local PC-based software for generating tenant utility bills in simple properties.",
                        image: placeholder,
                        brochure: tenantBillingPdf,
                        tags: ["Billing", "Local", "Simple"]
                        ,
                        features: [
                            "Multi-protocol handling - MBUS/MODBUS/BACNET/DLMS/MANUAL IMPORT\r\n* Live reading dashboard with customizable parameter selection\r\n* Customizable report for meter readings, billing, payment including live charts (more than 50 reports structure)\r\n* BMS integration (to & from data exchange)\r\n* Multi meters billing (Electricity/ GAS/ Water/ Chilled water/ Hot water) in single bill\r\n* 3D dashboards for bill and payment comparison (monthly/yearly)\r\n* Smart valve interface for disconnection/reconnection"
                        ],
                        longDescription: "UBILL IBM - IBM (Integrated Billing Module) is Windows based desktop application for Automatic Meter reading and Automated Billing of water, gas, heat, cold, electricity and other meters. UBILL IBM (Integrated Billing Module) is leading utility billing application for any utility service provider, property manager, water distribution companies, district cooling/ heating sub-metering companies or Municipalities - Its ALL in ONE with AMR (Automated Meter reading), Meter Data validation, Invoicing, reporting, accounting, automatic bill mailing, and lot more usable functionality.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "enterprise-tenant-billing",
                        name: "Enterprise Tenant Billing Module",
                        description: "Cloud-based scalable billing platform for multi-site property portfolios.",
                        image: placeholder,
                        tags: ["Cloud", "Enterprise", "Multi-site"]
                        ,
                        features: [
                            "MDMS (Meter Data management system) with advanced analytical methods including robust VEE algorithma covaring AMR & Meter data validations.\r\n* Customer advanced billing module with Automated biling, Multi metera multiple tarff assignirents along with Customerk tenant management to handle billing adjustment 5 disputed bills\r\n* Customizable Accounting module to match work flow with multi-user admin login privilage rights and API interface library to SAP/Oracle and other third-party user ERP systems.\r\n* Ticketing system for customer serice request and maintenance teams."
                        ],
                        longDescription: "(BM Enterprise is u full spectrum of Energy related Smart metering solutions from ConnectME solutions. The application built on loT big data platform deployed either on cloud or On-premises solutions.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "prepaid-billing",
                        name: "Prepaid Billing Module",
                        description: "Pay-as-you-go metering management software, designed for revenue protection.",
                        image: placeholder,
                        tags: ["Revenue", "Prepaid", "Management"]
                        ,
                        features: [
                            "Auto Cutoff feature based on the recharge amount balance and consumption.\r\n* Multi Tarrif/multi-Slab assignments.\r\n* Multi payment gateway integration.\r\n* Customer login for consumption and payment\r\n* Consumption based usage alerts including low balance."
                        ],
                        longDescription: "UBILL prepayment solution provides the end customer a seamless energy payment experience by integrating utility meters, network infra for data collection, Head end system, payment gateways and\r\nUtility companies' customer management for accounting, consumption history & top-ups. Our Prepaid billing solution is customization based on the utility companies' requirements with BLOCK CHAIN enabled for all data transactions including meter data collection and payment transactions.\n\nSpecifcations\n\nCopy from Brochure",
                    }
                ]
            },
            {
                name: "AMR and MDMS",
                slug: "amr-mdms",
                products: [
                    {
                        "id": "m-bus-reader",
                        "name": "M-Bus reader",
                        "description": "",
                        "productGroup": "M-Bus reader",
                        "image": placeholder,
                        "images": [],
                        "brochure": null,
                        "specs": {},
                        "tags": [
                            "Software",
                            "M-Bus"
                        ],
                        "features": [
                            "Supports sertal & TOP connection M-Bus connection.",
                            "Automatic meter search & crention of meter list",
                            "Fast scanringspeed",
                            "Editing meter list",
                            "Easy Troubleshooting af M-ous networcs & nodes",
                            "Export to Excel"
                        ],
                        "overview": "M-Bus Reader is easy to use PC software for the read-out of meters according to the EN1434 and EN13757 standards in an M-Bus network. M-Bus READER supports all M-Bus converters. Free demo is available with unlimited nodes for serial and 50 nodes for TCP.",
                        "longDescription": ""
                    },
                    {
                        id: "desktop-amr",
                        name: "Desktop AMR Module",
                        description: "Automated Meter Reading tool for local data collection and export.",
                        image: placeholder,
                        tags: ["AMR", "Collection", "Local"]
                        ,
                        features: [
                            "➢ Customized meter name setting\r\n➢ Import meter list\r\n➢ Manual editing of the meter list\r\n➢ Meter data sort and search option\r\n➢ Meter communication interval selection\r\n➢ Data export in EXCEL CSV format\r\n➢ Support serial and TCP/IP communication.\r\n➢ Customized Time Scheduled option for data interface\r\n➢ Data monitoring and export"
                        ],
                        longDescription: "IBM-AMR is easy to use PC software for the read-out of meters and for automatic export of meter data in BACnet, csv, txt, api, FTP, and to database. IBM-AMR supports M-Bus, BACnet, Modbus converters and can integrate data to BMS system.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "enterprise-mdms",
                        name: "Enterprise MDMS System",
                        description: "Complete Meter Data Management System for validating and storing massive utility datasets.",
                        image: placeholder,
                        tags: ["Big Data", "Utility", "Validation"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "intelligent-amr-ai",
                        name: "Intelligent AMR AI",
                        description: "AI-powered analytics layer that detects anomalies and theft in meter data patterns.",
                        image: placeholder,
                        tags: ["AI", "Analytics", "Theft"]
                        ,
                        features: [
                            "➢ BACnet interface to BMS\r\n➢ Customized meter name setting\r\n➢ Import meter list\r\n➢ Manual editing of the meter list\r\n➢ Meter data sort and search option\r\n➢ Meter communication interval selection\r\n➢ Data export in EXCEL CSV format\r\n➢ Support serial and TCP/IP communication.\r\n➢ Customized Time Scheduled option for data interface\r\n➢ Data monitoring and export"
                        ],
                        longDescription: "IBM-AMR is easy to use PC software for the read-out of meters and for automatic export of meter data in BACnet, csv, txt, api, FTP, and to database. IBM-AMR supports M-Bus, BACnet, Modbus converters and can integrate data to BMS system.\n\nSpecifcations\n\nCopy from Brochure",
                    }
                ]
            },
            {
                name: "Energy Monitoring",
                slug: "energy-monitoring",
                products: [
                    {
                        id: "ems-platform",
                        name: "EMS",
                        description: "Comprehensive Energy Management System for visualizing consumption and identifying savings.",
                        image: placeholder,
                        brochure: emsPlatformPdf,
                        tags: ["Visualization", "Green", "Savings"]
                        ,
                        features: [
                            "Sustainable Energy Management\r\n* Data Acquisition & Comprehensive Data management\r\n* Energy Dashboards\r\n* Intuitive User interface & Visualization\r\n* Compliance assurance & reporting\r\n* Performance benchmarking\r\n* Alerts & Notifications\r\n* Long term value creation"
                        ],
                        longDescription: "UENERGY EMS is cutting-edge platform designed to streamline and optimize customers sustainability initiatives, ensuring compliance with industry regulations while maximizing efficiency and reducing environmental impact. UENERGY helps organizations track, analyze, and optimize their energy consumption and performance. These software solutions typically offer a range of features to monitor energy usage in real-time, identify areas for improvement, and implement strategies to increase efficiency and reduce costs.\n\nSpecifcations\n\nCopy from Brochure",
                    }
                ]
            },
            {
                name: "Valve Control Management",
                slug: "valve-control",
                products: [
                    {
                        id: "vcm-platform",
                        name: "VCM",
                        description: "Centralized dashboard for remote actuation and status monitoring of smart valves.",
                        image: placeholder,
                        brochure: vcmPlatformPdf,
                        tags: ["Control", "Remote", "Safety"]
                        ,
                        features: [
                            "❖ Attractive Dashboard\r\n❖ Live Monitor & Control with Chart\r\n❖ Bulk Valve ON & OFF\r\n❖ Bulk Valve Import & Export Option\r\n❖ Report Generation in Single Click\r\n❖ Multiuser Login\r\n❖ FAQ’s and Live Guide for User Friendly\r\n❖ Auto Email Option and Scheduler for different level Users\r\n❖ WhatsApp/ SMS Alert Optional\r\n❖ Auto upgradation of New Features from the Server\r\nAutomatically if connected to the internet."
                        ],
                        longDescription: "VCM is a Global MBUS Valves control software used to control, schedule and manage valve ON/OFF operations of multiple buildings.\n\nSpecifcations\n\nCopy from Brochure",
                    }
                ]
            },
            {
                name: "Maintenance Management Software",
                slug: "maintenance",
                products: [
                    {
                        id: "mms-platform",
                        name: "MMS",
                        description: "Asset management suite for tracking meter health, calibration schedules, and maintenance tickets.",
                        image: placeholder,
                        brochure: mmsPlatformPdf,
                        tags: ["Assets", "Maintenance", "Lifecycle"]
                        ,
                        features: [
                            "Maintenance Works\r\n* Schedule Tasks\r\n* Ticketing System\r\n* Alerts (WhatsApp, Mail. etc.)\r\n* Maintenance Cost Reports\r\n* Material Inventory\r\n* Vendor Login for preventive\r\n  maintenance plans\r\n* Attendance to manage resources"
                        ],
                        longDescription: "ConnectME Maintenance Management System is a web based tool designed to help organizations manage their maintenance operations more efficiently. It provides a centralized system for managing maintenance activities, assets, and inventory,\r\nallowing organizations to improve maintenance efficiency, reduce downtime, and minimize costs.\n\nSpecifcations\n\nCopy from Brochure",
                    }
                ]
            }
        ]
    }
];

export default productData;
