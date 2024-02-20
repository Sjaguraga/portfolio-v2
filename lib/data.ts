import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Flatiron bootcamp",
    location: "New York, NY",
    description:
      "I graduated after 3 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "01/ 22 - 05/22",
  },
  {
    title: "Merge",
    location: "Remote",
    description:
      "Completed a Software Engineering Apprenticeship involving API-scraping, debugging, writing maintainable code, and collaborating in code reviews.",
    icon: React.createElement(FaReact),
    date: "07/22 - 4/23",
  },
  {
    title: "JP Morgan Chase Hack For Good Hackathon",
    location: "Remote",
    description:
      "Collaborated on a React and Java app for beach cleanups, focusing on user-friendly interface and environmental impact.",
    icon: React.createElement(CgWorkAlt),
    date: "09/22",
  },
  {
    title: "Onramp",
    location: "Remote",
    description:
      "Participated in a part-time mentoring program, focusing on code quality, career development, and mastering software engineering interviews.",
    icon: React.createElement(CgWorkAlt),
    date: "11/23 - 1/24",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommern",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Mood",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Rails",
  "MongoDB",
  "SQL",
  "Python",
  "Git",
  "Github",
  "React Native",
  "Node",
  "Next.js",
  "Tailwind",
  "Prisma",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
