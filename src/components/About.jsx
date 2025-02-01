import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              The Debate Association of Kenya (DAK) and the Kenya Universities Debate Championship (KUDC) are dedicated to fostering critical thinking, public speaking, and leadership skills among students and young professionals.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to empower voices and shape futures through the art of debate.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/images/about.jpg" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;