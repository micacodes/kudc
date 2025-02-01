import React, { useState, useEffect, useCallback } from 'react';

// Import images for the carousel
import image1 from '../assets/angie.jpeg';
import image2 from '../assets/_DSC3937.jpg';
import image3 from '../assets/_DSC3886.jpg';
import image4 from '../assets/_DSC3895.jpg';

// Import Footer
import Footer from './Footer';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false); // For fade transition effect

  // Image array with imported images
  const images = [image1, image2, image3, image4];

  // Function to handle the next image in the carousel
  const handleNext = useCallback(() => {
    setFade(true); // Trigger the fade out effect before changing the image
    setTimeout(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false); // Trigger the fade in effect after image has changed
    }, 500); // Match this delay to the duration of the fade effect
  }, [images.length]); // Memoize handleNext so it doesn't change unless images array length changes

  // Automatically change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [handleNext]); // Add handleNext as a dependency

  return (
    <div className="overflow-hidden h-screen flex flex-col justify-between bg-black">
      {/* Hero Section */}
      <div
        className={`h-full flex items-center justify-center bg-cover bg-center relative transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
