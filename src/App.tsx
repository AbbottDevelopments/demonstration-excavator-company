import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
