import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import dakLogo from '../assets/dak.jpeg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src={dakLogo} 
            alt="Debate Association of Kenya" 
            className="h-16 md:h-20 rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">About</Link>
          <Link to="/events" className="hover:text-yellow-400 transition-colors duration-300">Events</Link>
          <Link to="/gallery" className="hover:text-yellow-400 transition-colors duration-300">Gallery</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-yellow-400 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-blue-800 p-6 text-center space-y-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block py-2 text-lg font-semibold hover:text-yellow-400 transition-all duration-300">Home</Link>
        <Link to="/about" className="block py-2 text-lg font-semibold hover:text-yellow-400 transition-all duration-300">About</Link>
        <Link to="/events" className="block py-2 text-lg font-semibold hover:text-yellow-400 transition-all duration-300">Events</Link>
        <Link to="/gallery" className="block py-2 text-lg font-semibold hover:text-yellow-400 transition-all duration-300">Gallery</Link>
        <Link to="/contact" className="block py-2 text-lg font-semibold hover:text-yellow-400 transition-all duration-300">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
