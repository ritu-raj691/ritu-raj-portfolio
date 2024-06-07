import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero/heroImage.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ritu Raj</h1>
        <p className={styles.description}>
          I am a FrontEnd developer with 4.9 years of experience using ReactJs.
          Please reach out to me if you'd like to know more!{" "}
        </p>
        <a href="mailto:rituraj691@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={HeroImg} alt="rituraj.png" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
