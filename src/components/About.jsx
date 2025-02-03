import React from "react";
import { FaChess, FaBullhorn, FaHandsHelping,  FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";
import activeDebate from "../assets/IMG_2320.JPG";
import engagedAudience from "../assets/IMG_2287.JPG";
import publicSpeakingImage from "../assets/IMG_3182.jpg";

const About = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title with Animation */}
        <motion.h2
          className="text-5xl font-bold text-blue-900 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className="text-lg text-gray-800 leading-relaxed space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>
              <strong>The Debate Association of Kenya (DAK)</strong> and <strong>The Kenya Universities Debate Championship (KUDC)</strong> are dedicated to fostering critical thinking, structured argumentation, and effective public speaking. Through debate, we encourage students and professionals to engage in meaningful discussions on global and national issues.
            </p>
            <p>
              Debate is more than a competition; it is an intellectual sport that enhances analytical thinking, confidence, and persuasion skills. Whether it's British Parliamentary Debate (BP) which tests teamwork, rebuttals, and structured reasoning or Public Forum Debate, where speakers articulate their perspectives to a broader audience, our platforms cultivate leaders of tomorrow.
            </p>
            <motion.img
              src={activeDebate}
              alt="Students actively debating"
              className="rounded-lg shadow-2xl w-full md:w-3/4 transform hover:scale-105 transition duration-500"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Second Column */}
          <motion.div
            className="text-lg text-gray-800 leading-relaxed space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>
              <strong>Why Debate?</strong> Engaging in structured debate sharpens persuasion, research skills, and the ability to think on one's feet. Participants develop the ability to formulate strong arguments, counter opposing viewpoints, and present their case convincingly.
            </p>
            <p>
              Our mission is not only to create the next generation of elite debaters but also to equip young minds with leadership and advocacy skills. Many of our alumni go on to become policymakers, lawyers, journalists, and thought leaders across various industries.
            </p>
            <motion.img
              src={engagedAudience}
              alt="Engaged debate audience"
              className="rounded-lg shadow-2xl w-full md:w-3/4 transform hover:scale-105 transition duration-500"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </div>

        {/* Public Speaking Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-lg text-gray-800 leading-relaxed space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-blue-900">Public Speaking</h3>
            <p>
              Public speaking is at the heart of our mission. We empower individuals to articulate their ideas with confidence, clarity, and impact. Whether delivering keynote speeches, panel discussions, or persuasive presentations, mastering public speaking is a crucial skill for leaders and changemakers.
            </p>
            <p>
              Through workshops, coaching, and practice sessions, we help individuals refine their delivery, control stage presence, and engage audiences effectively. Our goal is to make every speaker a powerful communicator.
            </p>
          </motion.div>
          <motion.img
            src={publicSpeakingImage}
            alt="Public speaking session"
            className="rounded-lg shadow-2xl w-full md:w-3/4 transform hover:scale-105 transition duration-500"
            whileHover={{ scale: 1.1 }}
          />
        </div>

        {/* Icons Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[{ icon: FaChess, title: "British Parliamentary Debate", desc: "A team-based debate format where logic, quick thinking, and strategic argumentation define success." },
            { icon: FaBullhorn, title: "Public Forum Debate", desc: "Designed to connect with general audiences, this debate format emphasizes clarity and persuasion." },
            { icon: FaHandsHelping, title: "Leadership & Collaboration", desc: "Debate fosters leadership by teaching persuasion, diplomacy, and critical reasoning." },
            { icon: FaMicrophone, title: "Public Speaking", desc: "Refining stage presence, confidence, and impactful communication for all audiences." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-blue-900 p-6 shadow-lg rounded-lg bg-white transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <item.icon size={50} className="mb-4" />
              <h3 className="font-semibold text-xl text-center">{item.title}</h3>
              <p className="text-center mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-xl text-gray-700 italic font-semibold">
            "Debate is not about winning arguments; it's about learning, understanding, and shaping a better world."
          </p>
          <p className="text-lg text-gray-500 mt-2">- Debate Association of Kenya (DAK)</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
