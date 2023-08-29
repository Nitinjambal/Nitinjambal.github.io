import React, { useState } from "react";

import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.jpg";
import closeIcon from "../../assets/nav/closeIcon.jpg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      NITIN <code>&lt;/&gt;</code>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.resumeBtn}>
            <a href="https://drive.google.com/file/d/1Rp4-H5RhXDDeDT0H37U_N8nBH0dJb3nq/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
