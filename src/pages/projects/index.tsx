import { motion } from "framer-motion";

// assets
import NextDash from "@/assets/projects/next-dash.png";
import Landing from "@/assets/projects/landing.png";
import ReactIcon from "@/assets/skills/react.svg?react";
import HTMLIcon from "@/assets/skills/html.svg?react";
import CSSIcon from "@/assets/skills/css.svg?react";
import TSIcon from "@/assets/skills/typescript.svg?react";
import TailwindIcon from "@/assets/skills/ui_lib/Tailwind.svg?react";
import ShadcnIcon from "@/assets/skills/ui_lib/Shadcn.svg";
import NextIcon from "@/assets/skills/next.svg?react";

// components
import ProjectCard from "./project-card";

const PROJECTS = [
  {
    image: NextDash,
    title: "Json Placeholder UI",
    text: "This project is using the jsonplaceholder.typicode.com fake API. The point is how you can manage server data in UI with React-Query (Tanstack-Query). If you open a page, data that belongs to that page will be cached. If you leave the page and come back, instead of loading, you will see cached data. It will remain until new data replaces it (if the data has changed).",
    liveLink: "https://nextjs-dashboard-hossein.vercel.app",
    gitHubLink: "https://github.com/hossein-jorfi/nextjs-dashboard",
    skills: [
      <HTMLIcon />,
      <CSSIcon />,
      <TSIcon />,
      <ReactIcon />,
      <NextIcon />,
      <TailwindIcon />,
      <img src={ShadcnIcon} alt="shadcn" />,
    ],
  },
  {
    image: NextDash,
    title: "Next.js Dashboard",
    text: "This is the dashboard from the official Next.js website course, which covers significant topics and features of Next.js, such as the various types of server-side rendering applicable in different scenarios, authorization, authentication, navigation, and more. Upon completing the course, I enhanced the aesthetics of the dashboard by utilizing Shadcn UI and developed loading skeletons for the components.",
    liveLink: "https://nextjs-dashboard-hossein.vercel.app",
    gitHubLink: "https://github.com/hossein-jorfi/nextjs-dashboard",
    skills: [
      <HTMLIcon />,
      <CSSIcon />,
      <TSIcon />,
      <ReactIcon />,
      <NextIcon />,
      <TailwindIcon />,
      <img src={ShadcnIcon} alt="shadcn" />,
    ],
  },
  {
    image: Landing,
    title: "Landing page",
    text: "This project involves the creation of a straightforward landing page that does not incorporate any data fetching or complex tasks. The primary objective is to practice styling and ensuring responsiveness in web pages. For this Project, I utilized React and Tailwind CSS.",
    liveLink: "https://landing-page-neon-five.vercel.app",
    gitHubLink: "https://github.com/hossein-jorfi/landing-page",
    skills: [<HTMLIcon />, <CSSIcon />, <ReactIcon />, <TailwindIcon />],
  },
];

const Projects = () => {
  return (
    <div className="text-primary px-3 space-y-10 mt-5">
      {PROJECTS.map((project, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: (index + 0.5) / 3,
          }}
          key={index}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
