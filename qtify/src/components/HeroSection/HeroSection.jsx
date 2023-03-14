import React from "react";
import styles from "./HeroSection.module.css";
function HeroSection({ text1, text2 }) {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTextContainer}>
        <div className={styles.heroText1}>{text1}</div>
        <div className={styles.heroText2}>{text2}</div>
      </div>
      <div>
        <img
          className={styles.heroImg}
          src={require("../../assets/hero-image.png")}
          alt="heroimage"
        />
      </div>
    </div>
  );
}

export default HeroSection;
