import React, { useState, useEffect, useCallback } from 'react';

// Import images for the carousel
import image1 from '../assets/angie.jpeg';
import image3 from '../assets/_DSC3886.jpg';
import image4 from '../assets/_DSC3895.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false); // For fade transition effect

  // Image array with imported images
  const images = [image1, image3, image4];

  // Function to handle the next image in the carousel
  const handleNext = useCallback(() => {
    setFade(true); // Trigger the fade-out effect before changing the image
    setTimeout(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false); // Trigger the fade-in effect after the image has changed
    }, 500); // Match this delay to the duration of the fade effect
  }, [images.length]); // Memoize handleNext so it doesn't change unless images array length changes

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [handleNext]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <div
        className={`flex-1 h-[50vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center relative transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {/* Fallback image to ensure smooth mobile responsiveness */}
        <img
          src={images[currentImage]}
          alt="Hero"
          className="absolute w-full h-full object-cover sm:object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
