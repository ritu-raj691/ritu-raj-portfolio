import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { imgArray } from "../../constant";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={
                    imgArray.filter(
                      (img) => img.key === historyItem.imageNameKey
                    )[0]?.img ?? ""
                  }
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h2>{historyItem.role}</h2>
                  <h3>{historyItem.organisation}</h3>
                  <h4>{`${historyItem.startDate} - ${historyItem.endDate}`}</h4>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
