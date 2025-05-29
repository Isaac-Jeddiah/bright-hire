import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Services from './pages/Services';
import EmployersPage from './pages/Employers';
import CandidatesPage from './pages/Candidates';
import TestimonialsPage from './pages/Testimonials';
import Contact from './pages/Contact';
import BlogSection from './pages/Blog';
import TawkMessenger from './components/TawkMessenger';

import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50">
        <Header />
        </div>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/candidates" element={<CandidatesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogSection />} />
          </Routes>
        </main>
        <Footer />
        <TawkMessenger />
     
      </div>
    </Router>
  );
}

export default App;