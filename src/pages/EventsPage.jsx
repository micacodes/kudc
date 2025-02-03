import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEvent } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  {
    id: 1,
    title: "Debate Championship 2025",
    description: "Join us for the national debate championship, showcasing top university teams.",
    date: "2025-03-15",
  },
  {
    id: 2,
    title: "Public Speaking Workshop",
    description: "A workshop to enhance your public speaking skills, open to all ages.",
    date: "2025-04-20",
  },
  {
    id: 3,
    title: "Annual Debate Conference",
    description: "A major conference where industry leaders and debaters discuss the future of debate.",
    date: "2025-05-05",
  },
];

const EventsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter events by selected date
  const filteredEvents = events.filter(
    (event) => new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="py-16 bg-gradient-to-r from-[#FCF9DA] via-[#FFB800] to-[#1F3B53]">
      <div className="container mx-auto px-4 text-center">
        {/* Title with Animation */}
        <motion.h2
          className="text-5xl font-bold text-[#1F3B53] mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Upcoming Events
        </motion.h2>

        {/* Calendar */}
        <div className="mb-12 flex justify-center">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="text-[#1F3B53] border-[#FFB800] bg-[#FCF9DA] rounded-lg shadow-lg"
          />
        </div>

        {/* Display the selected date */}
        <motion.p
          className="text-2xl font-semibold text-[#1F3B53] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Events on {selectedDate.toLocaleDateString()}
        </motion.p>

        {/* Events List */}
        {filteredEvents.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-[#1F3B53]">{event.title}</h3>
                <p className="text-lg mt-2 text-[#333333]">{event.description}</p>
                <p className="text-sm mt-4 font-semibold text-[#FFB800]">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <div className="mt-4 text-[#FFB800] flex items-center space-x-2 cursor-pointer hover:text-[#1F3B53]">
                  <MdEvent size={20} />
                  <span>View Event</span>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <p className="text-lg text-[#1F3B53] mt-8">No events scheduled for this day. Please select a different date.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
