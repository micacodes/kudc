import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './pages/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;