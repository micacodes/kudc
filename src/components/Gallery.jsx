import React from "react";
import { motion } from "framer-motion";
import debateAction from '../assets/_DSC3930.jpg'
import intenseArgument from '../assets/_DSC3939.jpg'
import closingCeremony from '../assets/IMG_3171 (3).jpg'
import universityDebate from '../assets/IMG_2610.jpg'
import groupPhoto from '../assets/IMG_2585.jpg'
import publicSpeaking from '../assets/IMG_2551.jpg'
import judgesPanel from '../assets/IMG_2309.JPG'
import debateCompetition from '../assets/IMG_2295.JPG'
import judgesScoring from '../assets/IMG_2282.JPG'
import audienceEngagement from '../assets/IMG_1874.jpg'
import speakerEngaging from '../assets/_DSC3937.jpg'
import finalRound from '../assets/IMG_2636.jpg'
import debateTraining from '../assets/IMG_2634.jpg'
import awardCeremony from '../assets/IMG_1869.jpg'

const galleryImages = [
  { id: 1, src: debateAction, title: "Debate in Action" },
  // { id: 2, src: "/images/gallery2.jpg", title: "Panel Discussion" },
  // { id: 3, src: "/images/gallery3.jpg", title: "Champion Team" },
  { id: 4, src: awardCeremony, title: "Award Ceremony" },
  { id: 5, src: judgesPanel, title: "Judges Panel" },
  { id: 6, src: intenseArgument, title: "Intense Argument" },
  { id: 7, src: universityDebate, title: "University Debate" },
  { id: 8, src: publicSpeaking, title: "Public Speaking" },
  // { id: 9, src: "/images/gallery9.jpg", title: "Winners Celebration" },
  // { id: 10, src: "/images/gallery10.jpg", title: "Debate Session" },
  { id: 11, src: speakerEngaging, title: "Speaker Engaging" },
  { id: 12, src: finalRound, title: "Final Round" },
  { id: 13, src: groupPhoto, title: "Group Photo" },
  // { id: 14, src: "/images/gallery14.jpg", title: "Team Discussion" },
  { id: 15, src: debateTraining, title: "Debate Training" },
  // { id: 16, src: "/images/gallery16.jpg", title: "Moderators Panel" },
  { id: 17, src: judgesScoring, title: "Judges Scoring" },
  { id: 18, src: audienceEngagement, title: "Audience Engagement" },
  { id: 19, src: debateCompetition, title: "Debate Competition" },
  { id: 20, src: closingCeremony, title: "Closing Ceremony" },
];

const GalleryPage = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white p-10">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 text-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Debate Gallery
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((item) => (
          <motion.div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-4">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
