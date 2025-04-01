import {
  calculatorSrc,
  counterSrc,
  handWithTabletSrc,
  storageShelfSrc,
  tablet1Src,
} from "@/assets";

import { MdSecurity, MdWarning, MdPointOfSale } from "react-icons/md";

import {
  FiPackage,
  FiUsers,
  FiShoppingCart,
  FiTrendingUp,
  FiAlertTriangle,
  FiCalendar,
  FiClipboard,
} from "react-icons/fi";

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
    Bgcolor: "bg-cyan-700",
  },
  {
    title: "Automated Invoicing for Faster Transactions",
    description:
      "The system features an automated invoicing function that allows users to scan products using a camera. It instantly generates an invoice with accurate pricing, making the checkout process quick and efficient.",
    icon: FaFileInvoiceDollar,
    src: calculatorSrc,
    direction: "rtl",
    Bgcolor: "bg-cyan-600",
  },

  {
    title: "Interactive Dashboard for Performance Insights",
    description:
      "A user-friendly dashboard provides comprehensive reports on daily and monthly sales and profits. This allows pharmacy owners to monitor financial performance effortlessly and make informed business decisions.",
    icon: FaChartLine,
    src: tablet1Src,
    direction: "ltr",
    Bgcolor: "bg-cyan-400",
  },
  {
    title: "Low-Stock Alerts and Supplier Integration",
    description:
      "The system identifies products that need restocking and enables direct order placement from suppliers. This feature helps maintain product availability and prevents stock shortages.",
    src: storageShelfSrc,
    icon: MdWarning,
    direction: "rtl",
    Bgcolor: "bg-cyan-300",
  },
  {
    title: "Secure Employee Management and Access Control",
    description:
      "Pharmacy owners can create employee accounts with customized access permissions, ensuring data security and efficient workflow management while preventing unauthorized access.",
    icon: MdSecurity,
    src: handWithTabletSrc,
    direction: "ltr",
    Bgcolor: "bg-cyan-200",
  },
  {
    title: "Secure Employee Management and Access Control",
    description:
      "Pharmacy owners can create employee accounts with customized access permissions, ensuring data security and efficient workflow management while preventing unauthorized access.",
    icon: MdSecurity,
    src: handWithTabletSrc,
    direction: "rtl",
    Bgcolor: "bg-cyan-200",
  },
];

export type FeatureCard = {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType;
  src: string;
  Bgcolor: string;
};

export const featureCards: FeatureCard[] = [
  {
    title: "Streamline Pharmacy Operations Effortlessly",
    description:
      "The system features an automated invoicing function that allows users to scan products using a camera. It instantly generates an invoice with accurate pricing, making the checkout process quick and efficient.",
    benefits: [
      "Automated invoicing with camera scan",
      "Instant invoice generation",
      "Faster checkout process",
    ],
    icon: MdPointOfSale,
    src: counterSrc,
    Bgcolor: "bg-cyan-700",
  },
  {
    title: "Automated Invoicing for Faster Transactions",
    description:
      "Reduce transaction times with a fully automated invoicing system. Simply scan products to generate invoices instantly, ensuring pricing accuracy and efficiency.",
    benefits: [
      "Quick product scanning",
      "Accurate pricing",
      "Seamless checkout experience",
    ],
    icon: FaFileInvoiceDollar,
    src: calculatorSrc,
    Bgcolor: "bg-cyan-600",
  },
  {
    title: "Interactive Dashboard for Performance Insights",
    description:
      "A user-friendly dashboard provides comprehensive reports on daily and monthly sales and profits. This allows pharmacy owners to monitor financial performance effortlessly and make informed business decisions.",
    benefits: [
      "Real-time sales tracking",
      "Monthly performance reports",
      "Data-driven decision making",
    ],
    icon: FaChartLine,
    src: tablet1Src,
    Bgcolor: "bg-cyan-400",
  },
  {
    title: "Low-Stock Alerts and Supplier Integration",
    description:
      "The system identifies products that need restocking and enables direct order placement from suppliers. This feature helps maintain product availability and prevents stock shortages.",
    benefits: [
      "Automated low-stock alerts",
      "Seamless supplier integration",
      "Prevent stock shortages",
    ],
    icon: MdWarning,
    src: storageShelfSrc,
    Bgcolor: "bg-cyan-300",
  },
  {
    title: "Secure Employee Management and Access Control",
    description:
      "Pharmacy owners can create employee accounts with customized access permissions, ensuring data security and efficient workflow management while preventing unauthorized access.",
    benefits: [
      "Role-based access control",
      "Improved data security",
      "Efficient employee management",
    ],
    icon: MdSecurity,
    src: handWithTabletSrc,
    Bgcolor: "bg-cyan-200",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jeannie Grant",
    date: "June 01, 2023",
    rating: 5,
    text: "FastAF has transformed how we manage prescriptions. The automated refill system saves us hours every week, reducing stress for both staff and customers!",
  },
  {
    id: 2,
    name: "Derval Russell",
    date: "November 09, 2023",
    rating: 5,
    text: "We've been using FastAF for over a year, and the support has been incredible. Their system ensures we stay compliant while making insurance claims seamless.",
  },
  {
    id: 3,
    name: "Sophia Adams",
    date: "October 15, 2023",
    rating: 5,
    text: "FastAF’s customer support is top-notch. Whenever we need help, they respond quickly and ensure our pharmacy operations run smoothly!",
  },
  {
    id: 4,
    name: "Mark Stevenson",
    date: "September 05, 2023",
    rating: 4,
    text: "A great platform for managing patient records and prescriptions. The UI is intuitive, but I'd love to see more integrations in the future.",
  },
  {
    id: 5,
    name: "Emily Carter",
    date: "August 22, 2023",
    rating: 5,
    text: "FastAF has streamlined our workflow significantly. We process prescriptions faster and avoid compliance issues thanks to their automated checks.",
  },
];

export type SidebarLink = {
  title: string;
  path: string;
  icon: IconType;
};

export const sidebarLinks: SidebarLink[] = [
  {
    title: "Inventory",
    path: "inventory",
    icon: FiPackage,
  },
  {
    title: "Employees",
    path: "employees",
    icon: FiUsers,
  },
  {
    title: "Medicine",
    path: "medicine",
    icon: FiClipboard,
  },
  {
    title: "Sales",
    path: "sales",
    icon: FiTrendingUp,
  },
  {
    title: "Reports",
    path: "reports",
    icon: FiShoppingCart,
  },
  {
    title: "Shortage",
    path: "shortage",
    icon: FiAlertTriangle,
  },
  {
    title: "Expiry Warning",
    path: "expiry-warning",
    icon: FiCalendar,
  },
];

export type InventoryItem = {
  drugName: string;
  drugForm: string;
  quantity: number;
  expiryDate: string;
  cost: number;
  price: number;
};

export const inventoryData: InventoryItem[] = [
  {
    drugName: "Paracetamol",
    drugForm: "Tablet",
    quantity: 500,
    expiryDate: "12/12/2026",
    cost: 10,
    price: 15,
  },
  {
    drugName: "Ibuprofen",
    drugForm: "Capsule",
    quantity: 300,
    expiryDate: "06/08/2025",
    cost: 8,
    price: 12,
  },
  {
    drugName: "Amoxicillin",
    drugForm: "Syrup",
    quantity: 150,
    expiryDate: "09/04/2026",
    cost: 20,
    price: 30,
  },
  {
    drugName: "Cetirizine",
    drugForm: "Tablet",
    quantity: 700,
    expiryDate: "11/11/2027",
    cost: 5,
    price: 10,
  },
  {
    drugName: "Metformin",
    drugForm: "Tablet",
    quantity: 250,
    expiryDate: "03/07/2026",
    cost: 12,
    price: 18,
  },
  {
    drugName: "Omeprazole",
    drugForm: "Capsule",
    quantity: 450,
    expiryDate: "02/09/2025",
    cost: 9,
    price: 14,
  },
];
