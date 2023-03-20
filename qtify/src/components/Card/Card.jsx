import React from "react";
import styles from "./Card.module.css";
function Card({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={data.image} alt="album" loading="lazy" width={160} />
        <div className={styles.cardLabel}>
          <div className={styles.cardPill}>
            <p>{data.follows} Follows</p>
          </div>
        </div>
      </div>
      <div className={styles.cardTitle}>
        <p>{data.title}</p>
      </div>
    </div>
  );
}

export default Card;
