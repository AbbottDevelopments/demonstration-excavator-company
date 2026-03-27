import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Torres',
    role: 'General Contractor, Torres Construction',
    text: 'TerraForce transformed our 20-acre site in record time. Their precision grading saved us weeks on the foundation phase. Absolutely top-tier work.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Project Manager, Horizon Developments',
    text: 'We\'ve worked with many excavation companies, but TerraForce stands apart. Their communication, safety record, and attention to detail are unmatched.',
    rating: 5,
  },
  {
    name: 'David Blackwell',
    role: 'Owner, Blackwell Homes',
    text: 'From the initial estimate to final cleanup, TerraForce was professional and efficient. They handled our complex hillside excavation flawlessly.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="relative py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 ${headerVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Trusted by
            <br />
            <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const { ref, isVisible } = useScrollReveal(0.1);
            return (
              <div
                key={t.name}
                ref={ref}
                className={`relative p-8 rounded-3xl glass hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-8">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
