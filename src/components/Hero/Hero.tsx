import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero/rituraj.png";
import { resumeLink } from "../../constant";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Hi, I'm Ritu Raj</div>
        <p className={styles.description}>
          Experienced front-end developer with 4.9 years of specializing in
          JavaScript, React.js, and other modern front-end technologies,
          dedicated to crafting seamless and efficient user interfaces. Let's
          connect to explore how I can contribute to your next project.
        </p>
        <div className={styles.customButtons}>
          <a
            href={resumeLink}
            className={styles.customBtn}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a href="#contact" className={styles.customBtn} rel="noreferrer">
            Contact Me
          </a>
        </div>
      </div>
      <img src={HeroImg} alt="rituraj.png" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
