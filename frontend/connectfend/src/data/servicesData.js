import img from "../assets/smart.webp";
import remote from "../assets/remote1.webp";
import iotlowa from "../assets/iotLowa.webp";
import iot from "../assets/iot.webp";

const servicesData = [
  {
    id: 1,
    text:
      "UBILL is a future-ready utility metering & billing software used across 100+ commercial and residential sites. It improves operational efficiency, reduces cost, and provides complete automation for tariff management, multi-utility billing and tenant management.",
    image: img,
    link: "/services1#smart-metering"
  },
  {
    id: 2,
    text:
      "Our Remote Connectivity & VPN solutions provide secure and reliable remote access to your utility infrastructure. We offer tailored VPN solutions that ensure data integrity and protection against cyber threats, enabling seamless remote management of your systems.",
    image: remote,
    link: "/services1#remote-connect"
  },
  {
    id: 3,
    text:
      "ConnectME offers comprehensive IoT & LoRaWAN solutions that enable efficient data collection and monitoring for utility management. Our services include sensor integration, network deployment, and data analytics to optimize operations and enhance decision-making.",
    image: iot,
    link: "/services1#lorawan"
  },
  {
    id: 4,
    text:
      "Leverage our expertise in LoRaWAN Sensors to enhance your utility management systems. We provide a range of sensors for monitoring water, gas, and electricity usage, enabling real-time data acquisition and improved resource management.",
    image: iotlowa,
    link: "/services1#lorawan-sensors"
  }
];

export default servicesData;
