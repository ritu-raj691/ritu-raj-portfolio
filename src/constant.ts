import { INavbarItems, IContactArray } from "./models/common";
import HTMLImg from "./assets/skills/html.png";
import CSSImg from "./assets/skills/css.png";
import JavaScriptImg from "./assets/skills/javascript.png";
import ReactImg from "./assets/skills/react.png";
import TypeScriptImg from "./assets/skills/typescript.png";
import NextImg from "./assets/skills/next.png";
import GraphQLImg from "./assets/skills/graphql.png";
import NodeImg from "./assets/skills/node.png";
import ExpressImg from "./assets/skills/express.png";
import SQLImg from "./assets/skills/sql.png";
import GitImg from "./assets/skills/git.png";
import TailwindImg from "./assets/skills/tailwind.png";
import InfosysImg from "./assets/history/infosys.png";
import QssImg from "./assets/history/qss.png";
import ProjectImg from "./assets/projects/project.png";
import EmailImg from "./assets/contact/emailIcon.png";
import GitHubImg from "./assets/contact/githubIcon.png";
import LinkedInImg from "./assets/contact/linkedinIcon.png";
import PhoneImg from "./assets/contact/phoneIcon.png";

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
  { key: "next", img: NextImg },
  { key: "graphql", img: GraphQLImg },
  { key: "node", img: NodeImg },
  { key: "express", img: ExpressImg },
  { key: "sql", img: SQLImg },
  { key: "git", img: GitImg },
  { key: "tailwind", img: TailwindImg },
  { key: "infosys", img: InfosysImg },
  { key: "qss", img: QssImg },
  { key: "project", img: ProjectImg },
  { key: "phone", img: PhoneImg },
  { key: "email", img: EmailImg },
  { key: "github", img: GitHubImg },
  { key: "linkedin", img: LinkedInImg },
];

export const contactArray: IContactArray[] = [
  {
    key: "phone",
    label: "Phone",
    imgAlt: "phone icon",
    href: "tel:9507636359",
  },
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
    href: "https://www.linkedin.com/in/ritu-raj-4316a6132/",
  },
];
