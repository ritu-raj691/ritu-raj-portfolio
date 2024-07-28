import React, { lazy, Suspense } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { IProject } from "../../models/common";
import { resumeLink } from "../../constant";
const ProjectCard = lazy(() => import("./ProjectCard"));

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.description}>
        In addition to my professional work, I have undertaken various practice
        projects to sharpen my skills and explore new technologies,
        demonstrating my commitment to continuous learning and innovation. To
        see details of my professional work, please view my{" "}
        <a href={resumeLink} target="_blank" rel="noreferrer">
          CV
        </a>
        .
      </p>
      <div className={styles.projects}>
        {projects.map((project: IProject, id: number) => {
          return (
            <Suspense fallback={<></>} key={id + Date.now()}>
              <ProjectCard key={id} project={project} />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
