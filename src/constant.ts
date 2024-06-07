import { INavbarItems, IContactArray } from "./models/common";
import HTMLImg from "./assets/skills/html.png";
import CSSImg from "./assets/skills/css.png";
import JavaScriptImg from "./assets/skills/javascript.png";
import ReactImg from "./assets/skills/react.png";
import TypeScriptImg from "./assets/skills/typescript.png";
import NodeImg from "./assets/skills/node.png";
import GraphQLImg from "./assets/skills/graphql.png";
import InfosysImg from "./assets/history/infosys.png";
import QssImg from "./assets/history/qss.png";
import ProjectImg from "./assets/projects/project.png";
import EmailImg from "./assets/contact/emailIcon.png";
import GitHubImg from "./assets/contact/githubIcon.png";
import LinkedInImg from "./assets/contact/linkedinIcon.png";

export const NavbarItems: INavbarItems[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const imgArray = [
  { key: "html", img: HTMLImg },
  { key: "css", img: CSSImg },
  { key: "javascript", img: JavaScriptImg },
  { key: "react", img: ReactImg },
  { key: "typescript", img: TypeScriptImg },
  { key: "node", img: NodeImg },
  { key: "graphql", img: GraphQLImg },
  { key: "infosys", img: InfosysImg },
  { key: "qss", img: QssImg },
  { key: "project", img: ProjectImg },
  { key: "email", img: EmailImg },
  { key: "github", img: GitHubImg },
  { key: "linkedin", img: LinkedInImg },
];

export const contactArray: IContactArray[] = [
  {
    key: "email",
    label: "Email",
    imgAlt: "email icon",
    href: "mailto:rituraj691@gmail.com",
  },
  {
    key: "github",
    label: "GitHub",
    imgAlt: "github icon",
    href: "https://github.com/ritu-raj691",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    imgAlt: "linkedin icon",
    href: "",
  },
];
