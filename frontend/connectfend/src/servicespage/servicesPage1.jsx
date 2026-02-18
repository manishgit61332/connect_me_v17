// src/servicespage/servicesPage1.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./services.css";
import smartImg from "../assets/smart.webp";
import remote1 from "../assets/remote1.webp";
import remote2 from "../assets/remote2.webp";
import iotl from "../assets/iotLowa.webp";
import items from "../assets/items.webp";
import left1 from "../assets/left1.webp";
import right1 from "../assets/right1.webp"

export default function ServicesPage1() {
  const [open, setOpen] = useState("");

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const targetId = hash.substring(1); // remove '#'
    const smoothScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        // Account for fixed header (70px) + some buffer
        const headerOffset = 90;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        // Try again in case of loading delay
        setTimeout(smoothScroll, 100);
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(smoothScroll, 0);
  }, [hash]);

  const toggle = (id) => {
    setOpen(open === id ? "" : id);
  };

  return (
    <div className="services-page">

      {/* ==================================
              SECTION 1 — SMART METERING
      =================================== */}
      <section id="smart-metering" className="service-block big-service-block">
        <h2 className="service-title">Smart Metering & Utility Billing</h2>

        <div className="service-flex">
          <img src={smartImg} alt="Smart Metering" className="service-img" />

          <div className="service-text">
            <p>
              UBILL is a future-ready utility metering & billing software used
              across 100+ commercial and residential sites. It improves
              operational efficiency, reduces cost, and provides complete
              automation for tariff management, multi-utility billing and
              tenant management.
            </p>

            <button className="download-btn">
              <a href="../files/Brochure.pdf" download className="download-btn">
                Download Brochure 📥
              </a>
            </button>
          </div>
        </div>

        {/* ========== SUB ITEMS ========== */}
        <div className="service-grid">

          {/* ITEM 1 */}
          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("mreader")}>
              UBILL MBusReader <span>▾</span>
            </div>
            {open === "mreader" && (
              <div className="dropdown-body">
                <p>
                  Software tool for reading and collecting M-Bus meter data in
                  real time. Supports automatic scheduling and CSV export.
                </p>
              </div>
            )}
          </div>

          {/* ITEM 2 */}
          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("amr")}>
              UBILL AMR <span>▾</span>
            </div>
            {open === "amr" && (
              <div className="dropdown-body">
                <p>
                  Automated Meter Reading system allowing remote meter data
                  retrieval through TCP/IP, LoRaWAN, or Modbus.
                </p>
              </div>
            )}
          </div>

          {/* ITEM 3 */}
          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("ibm")}>
              UBILL IBM <span>▾</span>
            </div>
            {open === "ibm" && (
              <div className="dropdown-body">
                <p>
                  Integrated Billing Module for multi-utility tariffs, prepaid
                  metering, and tenant billing automation.
                </p>
              </div>
            )}
          </div>

          {/* ITEM 4 */}
          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("vcm")}>
              UBILL VCM <span>▾</span>
            </div>
            {open === "vcm" && (
              <div className="dropdown-body">
                <p>
                  Valve Control Management system to remotely operate shutoff
                  valves via cloud dashboard.
                </p>
              </div>
            )}
          </div>

          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("cm")}>
              UBILL VCM <span>▾</span>
            </div>
            {open === "cm" && (
              <div className="dropdown-body">
                <p>
                  Valve Control Management system to remotely operate shutoff
                  valves via cloud dashboard.
                </p>
              </div>
            )}
          </div>

          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("vc")}>
              UBILL VCM <span>▾</span>
            </div>
            {open === "vc" && (
              <div className="dropdown-body">
                <p>
                  Valve Control Management system to remotely operate shutoff
                  valves via cloud dashboard.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* ORDER CODES */}
        <h3 className="order-title">Order Codes</h3>

        <div className="order-grid">
          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("code1")}>
              UBILL IBM Tenant Billing <span>▾</span>
            </div>
            {open === "code1" && (
              <div className="dropdown-body">
                <p>Order Code: UBILL-TB-001</p>
              </div>
            )}
          </div>

          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("code2")}>
              UBILL MBusReader <span>▾</span>
            </div>
            {open === "code2" && (
              <div className="dropdown-body">
                <p>Order Code: UBILL-MBUS-READER-01</p>
              </div>
            )}
          </div>

          <div className="dropdown-item">
            <div className="dropdown-header" onClick={() => toggle("code3")}>
              UBILL IBM V Tenant Billing & Valve Control <span>▾</span>
            </div>
            {open === "code3" && (
              <div className="dropdown-body">
                <p>Order Code: UBILL-VTENANT-05</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================================
                SECTION 2
      =================================== */}
      {/* ==================================
      NEW — REMOTE CONNECTIVITY PAGE CONTENT
=================================== */}

      {/* ======================================================
      REMOTE CONNECTIVITY & VPN — EXACT SCREENSHOT MATCH
====================================================== */}
      <section id="remote-connect" className="rc-wrapper">

        {/* TITLE (centered) */}
        <h2 className="rc-title">Remote Connectivity & VPN</h2>

        {/* ROW 1 — image left, text right */}
        <div className="rc-row">
          <img src={remote1} alt="Remote Connectivity" className="rc-img-left" />

          <p className="rc-text">
            ConnectME offers remote connectivity solutions with use of wide range of VPN routers
            that are specifically designed for secure remote connectivity in industrial environments.
            These routers provide reliable and secure connections to remote devices and networks,
            allowing for seamless access and control from a common central location or cloud
            infrastructure. We setup remote access of your devices & networks anywhere from the world.
          </p>
        </div>

        {/* ROW 2 — full-width paragraph */}
        <div className="rc-com">
          <p className="rc-text rc-text-full">
            Our VPN routers support various strong encryption VPN protocols, such as IPSec, OpenVPN, and
            L2TP, ensuring compatibility with different network setups to ensure confidentiality and
            integrity of data transmitted over the network. Additionally, these routers often come with
            advanced features like firewall protection, NAT, and VLAN support, further enhancing the
            security and flexibility of remote connectivity solutions.
          </p>

          {/* ROW 3 — two images */}

          <img src={remote2} alt="VPN Diagram 1" className="rc-img-bottom" />


        </div>
        {/* ROW 4 — final full-width paragraph */}
        <p className="rc-below">
          ConnectME remote connectivity solutions based on TOSI devices are well-known in the
          industrial remote connectivity space. TOSI offers VPN routers that provide secure
          and reliable remote access to industrial networks, enabling remote monitoring and
          control of industrial equipment with strong reputation for reliable and secure solutions.
        </p>

      </section>


      {/* ==================================
                SECTION 3
      =================================== */}
      {/* ======================================================
      IoT LoRaWAN Solutions  — EXACT SCREENSHOT MATCH
====================================================== */}
      <section id="lorawan" className="lorawan-wrapper">

        {/* TITLE */}
        <h2 className="lorawan-title">IoT LoRaWAN Solutions</h2>

        <div className="lorawan-row">

          {/* LEFT SIDE: TEXT + BULLETS */}
          <div className="lorawan-text">

            <p>
              ConnectME specialized in setting up LoRaWAN private network-based solutions.
              ConnectME had implemented 50+ Private LoRaWAN solutions in GCC for the last
              5 years. Solutions covers
            </p>

            <ul>
              <li>Smart Metering</li>
              <li>Smart Valves</li>
              <li>Indoor Air quality for Schools, Malls, Hospitals & Commercial offices</li>
              <li>Asset tracking & monitoring</li>
              <li>HVAC Industry</li>
              <li>Level Monitoring</li>
              <li>Outdoor Environmental Monitoring</li>
            </ul>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <img src={iotl} alt="LoRaWAN" className="lorawan-img" />

        </div>

      </section>


      {/* ==================================
                SECTION 4
      =================================== */}
      {/* ======================================================
      VARIOUS LoRaWAN SENSORS — EXACT SCREENSHOT MATCH
====================================================== */}
      <section id="lorawan-sensors" className="sensors-wrapper">

        {/* TITLE */}
        <h2 className="sensors-title">Various LoRaWAN Sensors</h2>

        {/* TOP TWO-COLUMN LAYOUT */}
        <div className="sensors-top-row">

          {/* LEFT SIDE — IMAGE GRID */}
          <div className="sensors-left-grid">
            <img src={items} alt="" />
          </div>

          {/* RIGHT SIDE — BULLETS */}
          <ul className="sensors-right-list">
            <li>Temperature & Humidity (Indoor / outdoor)</li>
            <li>Indoor Air quality (Temp/Humid / CO / VOC)</li>
            <li>Particles Monitor (PM 2.5 / PM4 / PM10)</li>
            <li>Meters (Water / BTU / Electricity)</li>
            <li>Ultrasonic Level / Differential Pressure detection</li>
            <li>Analog Input</li>
            <li>Dry contact / Digital IO</li>
            <li>Motion / Light sensors</li>
            <li>Modbus bridge (energy meters / controllers)</li>
            <li>Door open/close detection</li>
            <li>Vibration sensor</li>
            <li>Pulse reader for various meter (Gas/Water/Electricity)</li>
            <li>Water leak detection</li>
            <li>Flood level monitoring sensors</li>
            <li>Soil Moisture & temperature</li>
            <li>Strain / weight sensor / weighing scale</li>
            <li>Outdoor Weather station</li>
            <li>Laser distance level sensor</li>
            <li>SMART VALVE</li>
          </ul>

        </div>

        {/* BOTTOM 2 BIG IMAGES */}
        <div className="sensors-bottom-images">
          <div className="sensors-bottom-item">
            <img src={left1} alt="" />
            <p className="img-caption">LoRaWAN Private Infra for Smart Metering</p>
          </div>

          <div className="sensors-bottom-item">
            <img src={right1} alt="" />
            <p className="img-caption">Network Topology LoRaWAN to Modbus</p>
          </div>
        </div>

      </section>


    </div>
  );
}
