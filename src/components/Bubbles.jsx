import React from "react";
import styles from "./Bubbles.module.css";

const Bubbles = () => {
  const iconData = [
    { src: "/images/love.webp", alt: "love", text: "Love" },
    { src: "/images/kindness.jpeg", alt: "kindness", text: "Kindness" },
    { src: "/images/peace.jpeg", alt: "peace", text: "Peace" },
    { src: "/images/happiness.jpeg", alt: "happiness", text: "Happiness" },
    { src: "/images/progress.jpg", alt: "progress", text: "Progress" },
    { src: "/images/wisdom.jpg", alt: "kindness", text: "Wisdom" },
    { src: "/images/healing.jpeg", alt: "kindness", text: "Healing" },
    { src: "/images/curosity.jpeg", alt: "kindness", text: "Curiosity" },
    { src: "/images/ideas.jpg", alt: "kindness", text: "Ideas" },
  ];

  return (
    <div className={styles.iconContainer}>
        {iconData.map((icon, index) => (
          <div key={index} className={styles.iconWrapper}>
            <img src={icon.src} alt={icon.alt} className={styles.icon} />
            <p className={styles.text}>{icon.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Bubbles;
