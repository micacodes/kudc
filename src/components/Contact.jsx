import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#FCF9DA] via-[#FFB800] to-[#1F3B53]">
      <div className="container mx-auto px-4 text-center">
        
        <motion.h2
          className="text-5xl font-bold text-[#1F3B53] mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get In Touch With Us
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="https://www.facebook.com/debate_association_of_kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition duration-300"
          >
            <FaFacebook size={40} />
          </a>
          <a
            href="https://twitter.com/kenyaunisdebate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <FaTwitter size={40} />
          </a>
          <a
            href="https://www.instagram.com/debate_association_of_kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition duration-300"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://www.linkedin.com/company/debate_association_of_kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin size={40} />
          </a>
        </motion.div>

        {/* Google Map Location */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.927684569591!2d36.81137092460825!3d-1.2929231820984287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183f1a33618a41a7%3A0x26c4c6ac35d9fd9b!2sStrathmore%20University!5e0!3m2!1sen!2ske!4v1675052566181!5m2!1sen!2ske"
  width="100%"
  height="450"
  style={{ border: "0", borderRadius: "8px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Maps location of Strathmore University"
/>

        </motion.div>

        {/* Contact Details */}
        <div className="text-lg text-[#1F3B53]">
          <p>
            Email:{" "}
            <a
              href="mailto:info@dak.org"
              className="text-blue-700 hover:underline"
            >
              info@dak.org
            </a>
          </p>
          <p>Phone: +25496 057 263</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
