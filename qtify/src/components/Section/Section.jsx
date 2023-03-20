import React from "react";
import styles from "./Section.module.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, dataSource }) {
  const [cardData, setCardData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  // if (title === "Songs") {
  //   setShowAll(false);
  // }
  useEffect(() => {
    dataSource().then((data) => {
      setCardData(data);
    });
  }, []);
  const carouselToggle = () => {
    console.log("fire");
    setShowAll((prevState) => !prevState);
  };
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div style={{ marginTop: "0px" }}>
          <h4>{title}</h4>
          {title === "Songs" && <div>Switcher</div>}
        </div>

        {title !== "Songs" && (
          <div className={styles.showAll} onClick={carouselToggle}>
            {<h4>{!showAll ? "ShowAll" : "Collapase"}</h4>}
          </div>
        )}
      </div>
      {showAll && title !== "Songs" ? (
        <div className={styles.sectionCard}>
          {cardData.map((e) => (
            <Card
              key={e.id}
              data={{
                image: e.image,
                follows: e.follows,
                title: e.title,
              }}
            />
          ))}
        </div>
      ) : (
        <div className={styles.sectionCarousel}>
          <Carousel
            cardData={cardData}
            renderCaraousel={(data) => <Card data={data} />}
          />
        </div>
      )}
    </div>
  );
}

export default Section;
