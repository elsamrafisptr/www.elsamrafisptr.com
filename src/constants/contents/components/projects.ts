import { ReactNode } from "react";

export interface ProjectCardProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  dateRange: string;
  active: boolean;
  stacks: string[];
  navigation?: NavigationProps[];
  details: {
    shortDesc: string;
  };
}

export interface NavigationProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export const PROJECTSDATA: ProjectCardProps[] = [
  {
    title: "Arnawa Digital Website Application",
    image: {
      src: "/webb.png",
      alt: "Bingung di Bandung Projects",
    },
    dateRange: "Jan 2024 - Feb 2024",
    active: true,
    stacks: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Nest JS", "Supabase"],
    navigation: [
      {
        label: "Website",
        href: "",
        icon: "",
      },
    ],
    details: {
      shortDesc:
        "Arnawa Digital is Creative Design and Tech Development Agency that the website will show the all projects and information from the agency, the website is also provide transaction and management system that needs by Arnawa Digital Agency.",
    },
  },
  {
    title: "Personal Portfolio Website",
    image: {
      src: "/webb.png",
      alt: "Bingung di Bandung Projects",
    },
    dateRange: "Jan 2024 - Feb 2024",
    active: true,
    stacks: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Strapi CMS"],
    navigation: [
      {
        label: "Website",
        href: "",
        icon: "",
      },
    ],
    details: {
      shortDesc:
        "My Personal Website provide informations of myself, my projects, and some features for self development and management. This website is also integrated with custom CMS by Strapi.",
    },
  },
  {
    title: "SiKasir Point of Sales Website",
    image: {
      src: "/pos.png",
      alt: "Bingung di Bandung Projects",
    },
    dateRange: "Jan 2024 - Feb 2024",
    active: true,
    stacks: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI"],
    navigation: [
      {
        label: "Website",
        href: "",
        icon: "",
      },
    ],
    details: {
      shortDesc:
        "Point of Sales Apps based on Website is able to access by all people from the website URL, point of sales features is such as inventory management, employee management, and transactions between customer and the owner.",
    },
  },
  {
    title: "Healthcare Registration System Website",
    image: {
      src: "/webb.png",
      alt: "Bingung di Bandung Projects",
    },
    dateRange: "Jan 2024 - Feb 2024",
    active: true,
    stacks: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Flask", "Firebase"],
    navigation: [
      {
        label: "Website",
        href: "",
        icon: "",
      },
    ],
    details: {
      shortDesc:
        "This Website Healthcare Registration System is used for healtcare, hospital, clinic, and another medical place. It's also for managed by admin in the dashboard to check up every transaction and cycle in the medical place. The website will ease the client/patient to use medical place.",
    },
  },
  {
    title: "Bingung di Bandung Multi Platform",
    image: {
      src: "/bingung.png",
      alt: "Bingung di Bandung Projects",
    },
    dateRange: "Jan 2024 - Feb 2024",
    active: true,
    stacks: ["Next.js", "Typescript", "TailwindCSS", "Flutter", "Laravel", "Firebase"],
    navigation: [
      {
        label: "Website",
        href: "",
        icon: "",
      },
    ],
    details: {
      shortDesc:
        "Multi Platform projects (Website & Mobile Apps) that provided to ease the tourist in Bandung City, Indonesia. It will help them to search all the places that they don't know to avoid scam and low review. There is also using machine learning to get recommendation for the user.",
    },
  },
  {
    title: "Fashion E-Commerce Website",
    image: {
      src: "/webb.png",
      alt: "Bingung di Bandung Projects",
    },
    dateRange: "Jan 2024 - Feb 2024",
    active: true,
    stacks: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Firebase"],
    navigation: [
      {
        label: "Website",
        href: "",
        icon: "",
      },
    ],
    details: {
      shortDesc:
        "E-Commerce Projects to learn how to build an e-commerce from scratch to be like woo-commerce. It's being my boilerplate to build e-commerce to my freelance client.",
    },
  },
];
