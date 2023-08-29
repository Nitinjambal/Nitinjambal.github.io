import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"
import linkdinIcon from "../../assets/contact/linkdinIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:nitinjam8800@gmail.com">nitinjam8800@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkdinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nitinjambal/">linkedin.com/nitinjambal</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/Nitinjambal">github.com/nitinjambal</a>
        </li>
      </ul>
    </footer>
  );
};