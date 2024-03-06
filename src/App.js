import React from 'react';
import './App.scss'
import BannerSlider from '../src/components/BannerSlider';
import Banner1 from '../src/data/banner/banner1.jpg';
import Banner2 from '../src/data/banner/banner2.jpg';
import Banner3 from '../src/data/banner/banner3.jpg';
import Banner4 from '../src/data/banner/banner4.jpg';

const App = () => {
  const bannerImages = [
    {
      "image": Banner1,
      "title": 'Ten twenty',
      "description": 'Welcome to Ten Twenty'
    },
    {
      "image": Banner2,
      "title": 'DUBAI',
      "description": 'Welcome to DUBAI'
    },
    {
      "image": Banner3,
      "title": 'Lands',
      "description": 'Welcome to Ten Twenty Lands'
    },
    {
      "image": Banner4,
      "title": 'Farms',
      "description": 'Welcome to Ten Twenty Farms'
    }
    
  ];

  return (
    <div>
      <BannerSlider images={bannerImages} />
    </div>
  );
};

export default App;
