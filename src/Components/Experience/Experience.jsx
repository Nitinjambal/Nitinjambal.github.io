import React from "react";

import styles from "./Experience.module.css";

const logoImages = [
  { title: "HTML", imageSrc: "https://img.icons8.com/color/256/html-5.png" },
  { title: "CSS", imageSrc: "https://img.icons8.com/color/256/css3.png" },
  {
    title: "Javascript",
    imageSrc: "https://img.icons8.com/color/256/javascript.png",
  },
  {
    title: "React",
    imageSrc: "https://img.icons8.com/color/256/react-native.png",
  },
  { title: "Redux", imageSrc: "https://img.icons8.com/color/256/redux.png" },

  {
    title: "Chakra UI",
    imageSrc: "https://img.icons8.com/color/256/chakra-ui.png",
  },
  {
    title: "Bootstrap",
    imageSrc: "https://img.icons8.com/color/256/bootstrap.png",
  },
  {
    title: "Github",
    imageSrc: "https://img.icons8.com/glyph-neue/256/github.png",
  },

  { title: "Node.js", imageSrc: "https://img.icons8.com/color/256/nodejs.png" },
  {
    title: "MongoDB",
    imageSrc:
      "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
  },

  {
    title: "Express.js",
    imageSrc: "https://img.icons8.com/ios/256/express-js.png",
  },

  {
    title: "Mongoose",
    imageSrc: "https://img.icons8.com/color/256/mongoose.png",
  },

  { title: "Git", imageSrc: "https://img.icons8.com/color/256/git.png" },

  { title: "npm", imageSrc: "https://img.icons8.com/color/256/npm.png" },
  {
    title: "vercel",
    imageSrc: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
  },
  {
    title: "Netlify",
    imageSrc:
      "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
  },
  {
    title: "TypeScript",
    imageSrc: "https://img.icons8.com/color/256/typescript.png",
  },
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>TECHNICAL SKILLS</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {logoImages.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
