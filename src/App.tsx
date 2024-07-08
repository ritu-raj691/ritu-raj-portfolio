import React, { lazy, Suspense } from "react";
import styles from "./App.module.css";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <div className={styles.App}>
      <Suspense fallback={<></>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<></>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<></>}>
        <About />
      </Suspense>
      <Suspense fallback={<></>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<></>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<></>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
