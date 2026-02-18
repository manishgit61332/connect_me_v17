import palmTowerImg from "../assets/projects/palm-tower.webp";
import fiveLuxeImg from "../assets/projects/five-luxe.webp";
import festivalPlazaImg from "../assets/projects/festival-plaza.webp";
import streetLightImg from "../assets/projects/street-light.webp";

const projects = [
  {
    id: 1,
    title: "THE PALM TOWER",
    location: "Dubai | 2024",
    desc: "Implemented centralized IBM Meter Data Management platform integrating five different BTU meter brands. Standardized meter data collection, processing, and reporting across all brands, enabling real-time monitoring and fault detection.",
    image: palmTowerImg
  },
  {
    id: 2,
    title: "FIVE LUXE, JBR",
    location: "JBR, Dubai | 2024",
    desc: "Integrated BTU, Hot Water, Cold Water, and Flush Water meters into a centralized IBM AMR software platform. Enabled automated meter reading for all utilities, improving billing accuracy and reducing manual data handling.",
    image: fiveLuxeImg
  },
  {
    id: 3,
    title: "Festival Plaza Mall",
    location: "Dubai | 2024",
    desc: "Deployed non-intrusive clamp-on BTU meters for accurate energy monitoring across retail outlets. The solution avoided system shutdowns and integrated seamlessly with the BMS, delivering billing-grade accuracy.",
    image: festivalPlazaImg
  },
  {
    id: 4,
    title: "Dubai Hills Park - IoT Lighting",
    location: "Dubai Hills Estate | 2024",
    desc: "IoT-based connectivity solution for feeder pillars with remote ON/OFF control and real-time power monitoring. Integrated with a cloud platform for centralized management of street lighting.",
    image: streetLightImg
  }
];

export default projects;
