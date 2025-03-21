import {
  calculatorSrc,
  counterSrc,
  handWithTabletSrc,
  storageShelfSrc,
  storageSrc,
  tablet1Src,
} from "@/assets";

import {
  MdSecurity,
  MdWarning,
  MdInventory,
  MdPointOfSale,
} from "react-icons/md";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaDocker,
  FaChartLine,
  FaFileInvoiceDollar,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

import { IconType } from "react-icons/lib";

export type TimelineItem = {
  title: string;
  description: string;
  icon: IconType;
  src: string;
  direction: "ltr" | "rtl";
  Bgcolor: string;
};

export const techStack = [
  {
    icon: FaReact,
    name: "React",
    color: "#61DBFB",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#000000",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
    color: "#68A063",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    color: "#336791",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    icon: FaPython,
    name: "Python",
    color: "#3776AB",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "#181717",
  },
  {
    icon: FaDocker,
    name: "Docker",
    color: "#2496ED",
  },
];

export const Pharmacies = [
  "CVS Pharmacy",
  "Walgreens",
  "Rite Aid",
  "Walmart Pharmacy",
  "Kroger Pharmacy",
  "Albertsons Pharmacy",
  "Publix Pharmacy",
  "Costco Pharmacy",
  "Sam's Club Pharmacy",
  "Hy-Vee Pharmacy",
  "H-E-B Pharmacy",
  "Meijer Pharmacy",
  "Safeway Pharmacy",
  "Fred Meyer Pharmacy",
  "Giant Eagle Pharmacy",
];

export const timelineItems: TimelineItem[] = [
  {
    title: "Streamline Pharmacy Operations Effortlessly",
    description:
      "The system features an automated invoicing function that allows users to scan products using a camera. It instantly generates an invoice with accurate pricing, making the checkout process quick and efficient.",
    icon: MdPointOfSale,
    src: counterSrc,
    direction: "ltr",
    Bgcolor:"bg-cyan-700"
  },
  {
    title: "Automated Invoicing for Faster Transactions",
    description:
      "The system features an automated invoicing function that allows users to scan products using a camera. It instantly generates an invoice with accurate pricing, making the checkout process quick and efficient.",
    icon: FaFileInvoiceDollar,
    src: calculatorSrc,
    direction: "rtl",
    Bgcolor:"bg-cyan-600"
  },
  {
    title: "Intelligent Inventory Management",
    description:
      "With real-time inventory tracking, the system alerts users about low-stock products or overstocked items, helping maintain optimal stock levels. It also notifies users of medicines nearing expiration, reducing waste and financial loss.",
    icon: MdInventory,
    src: storageSrc,
    direction: "ltr",
    Bgcolor:"bg-cyan-500"
  },
  {
    title: "Interactive Dashboard for Performance Insights",
    description:
      "A user-friendly dashboard provides comprehensive reports on daily and monthly sales and profits. This allows pharmacy owners to monitor financial performance effortlessly and make informed business decisions.",
    icon: FaChartLine,
    src: tablet1Src,
    direction: "rtl",
    Bgcolor:"bg-cyan-400"
  },
  {
    title: "Low-Stock Alerts and Supplier Integration",
    description:
      "The system identifies products that need restocking and enables direct order placement from suppliers. This feature helps maintain product availability and prevents stock shortages.",
    src: storageShelfSrc,
    icon: MdWarning,
    direction: "ltr",
    Bgcolor:"bg-cyan-300"
  },
  {
    title: "Secure Employee Management and Access Control",
    description:
      "Pharmacy owners can create employee accounts with customized access permissions, ensuring data security and efficient workflow management while preventing unauthorized access.",
    icon: MdSecurity,
    src: handWithTabletSrc,
    direction: "rtl",
    Bgcolor:"bg-cyan-200"
  },
];
