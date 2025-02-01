import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import dakLogo from '../assets/DAK-logo.pdf'
import kudcLogo from '../assets/KUDC-2.pdf';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={dakLogo} alt="Debate Association of Kenya" className="h-12" />
          <img src={kudcLogo} alt="Kenya Universities Debate Championship" className="h-12" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-mustard-500">Home</Link>
          <Link to="/about" className="hover:text-mustard-500">About</Link>
          <Link to="/events" className="hover:text-mustard-500">Events</Link>
          <Link to="/gallery" className="hover:text-mustard-500">Gallery</Link>
          <Link to="/contact" className="hover:text-mustard-500">Contact</Link>
        </nav>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-800 p-4">
          <Link to="/" className="block py-2 hover:text-mustard-500">Home</Link>
          <Link to="/about" className="block py-2 hover:text-mustard-500">About</Link>
          <Link to="/events" className="block py-2 hover:text-mustard-500">Events</Link>
          <Link to="/gallery" className="block py-2 hover:text-mustard-500">Gallery</Link>
          <Link to="/contact" className="block py-2 hover:text-mustard-500">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;