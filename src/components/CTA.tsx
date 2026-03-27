import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      >
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1400&h=600&fit=crop"
              alt="Construction site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/70" />
          </div>

          <div className="relative z-10 px-8 sm:px-16 py-20 text-center">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 text-white">
              Your Next Project Starts Here
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Get a free, detailed estimate for your excavation project. Our team is ready to move earth and make your vision a reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-primary font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
