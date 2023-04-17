import {
  react,
  web,
  fullstack,
  testing,
  infosys,
  revature,
  portfolio,
  powermeet,
  mtu,
  recur,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Testing",
    icon: testing,
  },
  {
    title: "React",
    icon: react,
  },
  {
    title: "Full Stack",
    icon: fullstack,
  },
  {
    title: "Web",
    icon: web,
  },
];

const experiences = [
  {
    title: "Software Engineer II - QA",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#077CC3",
    date: "October 2022 - Present",
    points: [
      "Prevent defects from reaching production via development & debugging of 200+ automated test cases",
      "Ensure compliance to security requirements by implementing and maintaining Hitachi PAMUtil integration with all automated test cases",
      "Lead 3 QA Engineers through the initial testing lifecycle of enhancements to a client-facing API",
      "Facilitate cross-functional communication as the main point of contact for QA on two projects",
      "Awarded with the Infosys RISE Rookie of the Quarter Award in Q4 of 2022",
    ],
  },
  {
    title: "Software Engineer I - QA",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#077CC3",
    date: "April 2021 - October 2022",
    points: [
      "Implemented simultaneous execution of 20+ automated test cases within a Jenkins pipeline via Selenium Grid",
      "Executed functional, automated, smoke, and black box testing within a 6-week regression / release cycle",
      "Prevented unnecessary access to client PII through use of CA TDM to create 4 large test data sets",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Revature",
    icon: revature,
    iconBg: "#F26926",
    date: "January 2021 - April 2021",
    points: [
      "Created three full-stack web applications including a surveying & data analysis dashboard, an e-commerce website, and a reimbursement management application",
      "Worked individually and in groups of 3 to 22 engineers to study software engineering principles and build full-stack web applications",
      "Awarded with the Most Helpful Developer Award for assisting in planning and development across the tech stack",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "The page you're on! Built with React, Vite, Three.js, and Tailwind. Click the GitHub icon in the top right of this card to see the source code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "web dev",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/bhsimon97/3d-portfolio",
    hasGithub: true,
  },
  {
    name: "PowerMeet",
    description:
      "Web application that scrapes data from powerlifting federations and allows users to search and register for powerlifting meets. Built with React, JS, Bootstrap, and Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "web scraping",
        color: "pink-text-gradient",
      },
    ],
    image: powermeet,
    source_code_link: "http://www.powermeet.xyz",
    hasGithub: false,
  },
  {
    name: "Margin Transit Utility",
    description:
      "MTU is an application owned by an Infosys client, DTCC, which allows users to validate, enrich, settle, report, and monitor matched collateral calls globally.",
    tags: [
      {
        name: "testing",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: mtu,
    source_code_link: "https://www.dtcc.com/",
    hasGithub: false,
  },
  {
    name: "Recur",
    description:
      "Recur is a learning-to-code application built by Formation.dev using React and Material-UI. I built small features and fixed production bugs as needed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: recur,
    source_code_link: "https://www.recurcode.com",
    hasGithub: false,
  },
];

export { services, experiences, projects };
