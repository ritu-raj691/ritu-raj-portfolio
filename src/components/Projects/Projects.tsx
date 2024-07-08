import React, { lazy, Suspense } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { IProject } from "../../models/common";
const ProjectCard = lazy(() => import("./ProjectCard"));

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project: IProject, id: number) => {
          return (
            <Suspense fallback={<></>}>
              <ProjectCard key={id} project={project} />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
