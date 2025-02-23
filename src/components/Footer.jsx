import React from 'react';
import { FaTiktok, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
        <a
    href="https://www.tiktok.com/@kenyaunisdebate"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    className="hover:text-yellow-500"
  >
     <FaTiktok size={24} />
</a>
<a href="https://x.com/kenyaunisdebate/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-500">
  <FaXTwitter size={24} />
</a>
<a href="https://www.instagram.com/kenyaunisdebate/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-500">
  <FaInstagram size={24} />
</a>

        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Debate Association of Kenya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
