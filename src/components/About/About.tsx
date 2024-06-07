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
                I am a passionate Front-End Developer with expertise in HTML,
                CSS, JavaScript, React.js, and Redux, alongside a strong
                knowledge of various other front-end technologies.
              </p>
              <p>
                I have honed my skills in creating dynamic and interactive web
                applications that not only meet but exceed client expectations.
              </p>
              <p>
                In addition to my front-end prowess, I am always eager to
                explore and understand backend technologies, bridging the gap
                between frontend and backend to deliver cohesive and robust
                solutions.
              </p>
              <p>
                Let's connect to discuss how I can bring my unique blend of
                skills and experience to your next project, driving innovation
                and achieving remarkable results.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={ServerImg} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h2>Backend Developer</h2>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs.
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default About;
