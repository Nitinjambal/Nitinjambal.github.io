import React, { useEffect, useState } from "react";

import styles from "./Hero.module.css";
import myImage from "../../assets/hero/myImage.png";

export const Hero = () => {
  const texts = [
    "A Full-Stack Developer",
    "A Tech-Enthusiast",
    "A MERN Stack Developer"
  ];

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    if (currentCharIndex < texts[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + texts[currentIndex][currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      }, 90); // Adjust typing speed here

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCurrentCharIndex(0);
        setCurrentText('');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1000); // Adjust pause between texts here
    }
  }, [currentIndex, currentCharIndex]);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>HI, I AM <br/> NITIN JAMBAL</h1>
        <p className={styles.description}>
        {currentText}{showCaret && <span className="caret">|</span>}
        </p>
        <a href="https://drive.google.com/file/d/1Rp4-H5RhXDDeDT0H37U_N8nBH0dJb3nq/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img  src={myImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
