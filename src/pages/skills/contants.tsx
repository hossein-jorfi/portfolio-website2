import HTMLContetnt from "./skill-contents/html-content";
import TypeScriptContetnt from "./skill-contents/typescript-content";
import CssContent from "./skill-contents/css-content";
import JavascriptContent from "./skill-contents/javascript-content";
import ReactContent from "./skill-contents/react-content";
import NextContent from "./skill-contents/next-content";
import GitContent from "./skill-contents/git-content";
import WebsocketContent from "./skill-contents/websocket-content";

export const SKILLS = [
  {
    id: 0,
    title: "HTML",
    content: <HTMLContetnt />,
  },
  {
    id: 1,
    title: "CSS",
    content: <CssContent />,
  },
  {
    id: 2,
    title: "Javascript",
    content: <JavascriptContent />,
  },
  {
    id: 3,
    title: "Typescript",
    content: <TypeScriptContetnt />,
  },
  {
    id: 5,
    title: "React.js",
    content: <ReactContent />,
  },
  {
    id: 6,
    title: "Next.js",
    content: <NextContent />,
  },
  {
    id: 7,
    title: "Web Socket",
    content: <WebsocketContent />,
  },
  {
    id: 11,
    title: "API",
  },
  {
    id: 9,
    title: "State Managers",
  },
  {
    id: 10,
    title: "UI Libraries",
  },
  {
    id: 8,
    title: "Git & Github",
    content: <GitContent />,
  },
];
