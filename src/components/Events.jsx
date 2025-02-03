import React, { useState } from "react";
import imageClimate from '../assets/IMG_1876.jpg'
import imageAI from '../assets/IMG_2350.JPG'
import educationForum from '../assets/IMG_3196.JPG'

const eventsData = [
  {
    id: 1,
    title: "Climate Change: Is It Too Late?",
    date: "February 10, 2025",
    time: "6:00 PM",
    location: "Virtual",
    description: "Join experts as they debate the urgency of climate action.",
    image: imageClimate,
    registrationLink: 'https://docs.google.com/forms/u/0/d/1ytmZ_7BFwbC2vCJhab1Mna4Qk3ijI58QmbtL2UIkNIw/viewform',
  },
  {
    id: 2,
    title: "AI Ethics: Who Decides?",
    date: "February 15, 2025",
    time: "7:30 PM",
    location: "Kenyatta University",
    description: "Exploring the moral implications of artificial intelligence.",
    image: imageAI,
    registrationLink: 'https://docs.google.com/forms/u/0/d/1ytmZ_7BFwbC2vCJhab1Mna4Qk3ijI58QmbtL2UIkNIw/viewform',
  },
  {
    id: 3,
    title: "Education Reform: What's Next?",
    date: "February 20, 2025",
    time: "5:00 PM",
    location: "Strathmore University",
    description: "Debating the future of global education systems.",
    image: educationForum,
    registrationLink: 'https://docs.google.com/forms/u/0/d/1ytmZ_7BFwbC2vCJhab1Mna4Qk3ijI58QmbtL2UIkNIw/viewform',
  },
];

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = eventsData.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Upcoming Debate Events
          </h1>
          <p className="text-gray-600">Join the conversation on pressing topics.</p>
        </div>

        {/* Search Bar (Limited Width) */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mustard"
          />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-contain" // Fixed cropping issue
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                </div>
                <button
                  onClick={() => window.open(event.registrationLink, "_blank")}
                  className="w-full bg-mustard text-blue-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
