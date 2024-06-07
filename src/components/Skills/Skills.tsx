import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { imgArray } from "../../constant";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={
                      imgArray.filter(
                        (img) => img.key === skill.imageNameKey
                      )[0]?.img ?? ""
                    }
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
