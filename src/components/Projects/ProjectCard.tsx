import React from "react";
import styles from "./ProjectCard.module.css";
import { imgArray } from "../../constant";
import { IProject, IProjectCard } from "../../models/common";

const ProjectCard = (props: IProjectCard) => {
  const { title, imageKey, description, skills, demo, source } = props?.project;

  return (
    <div className={styles.container}>
      <img
        src={imgArray.filter((item) => item.key === imageKey)[0]?.img ?? ""}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill: string, id: number) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
