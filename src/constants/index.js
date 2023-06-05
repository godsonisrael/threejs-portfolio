import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  full,
  lazzire,
  free,
  mannai,
  mern,
  sweep,
  confid,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer Intern",
    company_name: "Full Creative",
    icon: full,
    iconBg: "#383E56",
    date: "Feb 2019 - Mar 2019",
    points: [
      "Accomplished the tasks assigned around software development and learned about being productive.",
      "Engaged with teams that worked with multiple products to gain hands-on experience working with real-time software products.",
      "As a Java developer intern, I added to the team's software development efforts for a month.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Business Development Manager",
    company_name: "Lazzire Events",
    icon: lazzire,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Nov 2021",
    points: [
      "Hosted a live music gathering, fundraiser, and workshop for a meditation program in different regions.",
      "Generated and acquired 30% of business leads, via networking and an advertisement system.",
      "Developed and implemented an aggressive action plan for addressing pressing cost control needs and slashed vendor costs by 20%.",
      "A high success rate of 90% was achieved by identifying and qualifying customer needs, and negotiating and closing profitable projects.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelancer",
    icon: free,
    iconBg: "#383E56",
    date: "Dec 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Mannai Tech",
    icon: mannai,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Developing and maintaining mobile applications using React native and other related technologies.",
      "Developing web application using laravel framework along with other front-end stacks like vuejs and reactjs.",
      "Maintaining other projects of our firm and improvising the functionality of the mobile and web applications.",
      "Collabrating with other teammates and worked together on optimizing applications.",
    ],
  },
];

const interests = [
  {
    interest:
      "Software technologies have captivated my interest with their limitless potential to shape the digital landscape. The art of crafting elegant code and creating innovative solutions has become my passion, driving me to constantly learn, experiment, and contribute to the ever-expanding realm of software development.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },

  {
    interest:
      "The financial sector has always intrigued me, with its intricate web of markets, investments, and economic dynamics. Exploring the world of finance is like embarking on a never-ending quest for knowledge, fueled by the pursuit of financial literacy and the potential to make informed decisions that shape our financial future.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    interest:
      "Video games have always captivated me, but Valorant's intense gameplay and strategic depth have elevated my passion to new heights, making it an exhilarating journey of teamwork, skill, and endless possibilities.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "MERN Social media",
    description:
      "Web-based platform that allows users to create, search, upload, and manage their pictures, providing a convenient and efficient solution for sharing their creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mern,
    source_code_link: "https://github.com/godsonisrael/MERN-PicVi",
  },
  {
    name: "Sweep",
    description:
      "Sweep is a all-in-one cleaning service application. The goal is to provide best user experience, and connecting the users with the quality vendors through this platform.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "iOS",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: sweep,
    source_code_link:
      "https://apps.apple.com/us/app/sweep-services/id1635789990",
  },
  {
    name: "NASS",
    description:
      "NASS admin dashboard allows the team to manage and maintain the assignments of their clientele with ease. NASS aims to give modern yet optimized user experience.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: confid,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, interests, projects };
