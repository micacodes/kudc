import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="5"></textarea>
          </div>
          <button className="bg-mustard-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-mustard-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;