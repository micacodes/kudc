import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Events />
      <Gallery />
    </div>
  );
};

export default Home;