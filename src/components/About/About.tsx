import React from "react";
import styles from "./About.module.css";
import AboutImg from "../../assets/about/aboutImage.png";
import CursorImg from "../../assets/about/cursorIcon.png";
import ServerImg from "../../assets/about/serverIcon.png";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={AboutImg}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={CursorImg} alt="cursor-icon" />
            <div className={styles.aboutItemText}>
              <h2>Frontend Developer</h2>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={ServerImg} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h2>Backend Developer</h2>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
