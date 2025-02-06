import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Hero.module.css';

const HeroSection = () => {
  const images = [
    { id: 3, src: "./images/img3.jpg", alt: "Inspiration 3" },
    { id: 4, src: "./images/img4.jpg", alt: "Inspiration 4" },
    { id: 5, src: "./images/img5.jpg", alt: "Inspiration 5" },
    { id: 6, src: "./images/img1.jpg", alt: "Inspiration 6" },
    { id: 1, src: "./images/img6.jpg", alt: "Inspiration 1" },
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 900, // Transition speed (in ms)
    slidesToShow: 1, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Time between each slide (in ms)
  };

  return (
    <div className={styles.herosec}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.imag}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;

