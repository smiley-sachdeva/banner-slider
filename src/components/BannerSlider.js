import React, { useState, useEffect } from 'react';
import './BannerSlider.scss';
import BannerInfo from './BannerInfo';
import BannerThumbnail from './BannerThumbnail';
import BannerNav from './BannerNav';

const BannerSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="banner-slider">
      <button className="arrow prev" onClick={handlePrev}>&lt;</button>
      <img className="banner-image" src={images[currentIndex]["image"]} alt={`Banner ${currentIndex + 1}`} />
      <button className="arrow next" onClick={handleNext}>&gt;</button>
      <BannerInfo title={images[currentIndex]["title"]} description={images[currentIndex]["description"]} />
      <BannerThumbnail img={images[(currentIndex + 1) % images.length]["image"]} onNext={handleNext} />
      <BannerNav currentItem={(currentIndex + 1)} total={images.length} />
    </div>
  );
};

export default BannerSlider;
