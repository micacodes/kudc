import React from 'react';

const Gallery = () => {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ];

  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;