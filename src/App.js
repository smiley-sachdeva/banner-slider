import React from 'react';
import './App.scss'
import BannerSlider from '../src/components/BannerSlider';
import Banner1 from '../src/data/banner/banner1.jpg';
import Banner2 from '../src/data/banner/banner2.jpg';
import Banner3 from '../src/data/banner/banner3.jpg';
import Banner4 from '../src/data/banner/banner4.jpg';

const App = () => {
  const bannerImages = [
    Banner1,
    Banner2,
    Banner3,
    Banner4
  ];

  return (
    <div>
      <BannerSlider images={bannerImages} />
    </div>
  );
};

export default App;
