import React from "react";

import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About ME</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                A passionate MERN Stack Developer. My coding
                journey began with a curiosity about technology's inner
                workings, which has now evolved into a passion for crafting
                seamless digital experiences. Specializing in both front-end and
                back-end, I create interactive, responsive websites that excel
                in both design and performance. Proficient in the MERN stack, I
                engineer end-to-end solutions, from database design to user
                interfaces. Beyond coding, I'm dedicated to exploring tech
                trends, collaborating with fellow developers, and continuous
                learning, always pushing my development boundaries.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
