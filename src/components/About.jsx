import React from "react";
import { FaChess, FaBullhorn, FaHandsHelping, FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";
import activeDebate from "../assets/IMG_2320.JPG";
import engagedAudience from "../assets/IMG_2287.JPG";
import publicSpeakingImage from "../assets/IMG_3182.jpg";

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-200 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-blue-900 mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-lg text-gray-800 leading-relaxed space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gray-700 text-lg">The Debate Association of Kenya (DAK) is a youth-led organization dedicated to fostering intellectual discourse, empowering youth voices, and shaping transformative advocacy. Through a rich tapestry of programs, including debate and public speaking training, thematic tournaments, and youth empowerment initiatives, DAK strives to amplify audacious voices for societal change.</p>
            <motion.img
              src={activeDebate}
              alt="Students actively debating"
              className="rounded-xl shadow-lg w-full md:w-3/4 transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="text-lg text-gray-800 leading-relaxed space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-blue-900">Vision & Mission</h3>
            <p><strong className="text-indigo-700">Vision:</strong> "Empowering Audacious Youth Voices for Transformative Advocacy"</p>
            <p><strong className="text-indigo-700">Mission:</strong> "Cultivating Fearless Advocates to nurture the Intersection of Activism and Debate"</p>
            <motion.img
              src={engagedAudience}
              alt="Engaged debate audience"
              className="rounded-xl shadow-lg w-full md:w-3/4 transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Public Speaking Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-lg text-gray-800 leading-relaxed space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-blue-900">Public Speaking</h3>
            <p>Public speaking is at the heart of our mission. We empower individuals to articulate their ideas with confidence, clarity, and impact.</p>
            <p>Through workshops, coaching, and practice sessions, we help individuals refine their delivery, control stage presence, and engage audiences effectively.</p>
          </motion.div>
          <motion.img
            src={publicSpeakingImage}
            alt="Public speaking session"
            className="rounded-xl shadow-lg w-full md:w-3/4 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Icons Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
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
              className="flex flex-col items-center text-blue-900 p-6 shadow-md rounded-lg bg-white transition-transform duration-300 hover:scale-105"
            >
              <item.icon size={50} className="mb-4 text-indigo-600" />
              <h3 className="font-semibold text-xl text-center">{item.title}</h3>
              <p className="text-center mt-2 text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="mt-20 text-center bg-gray-100 p-8 rounded-lg shadow-md"
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
