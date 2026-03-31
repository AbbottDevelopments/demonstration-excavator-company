import React from 'react';
import { ArrowDown, Shield, Clock, Award } from 'lucide-react';

const stats = [
  { icon: Shield, value: '25+', label: 'Years Experience' },
  { icon: Clock, value: '500+', label: 'Projects Completed' },
  { icon: Award, value: '100%', label: 'Client Satisfaction' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2058911/pexels-photo-2058911.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Excavator at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float" aria-hidden="true" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up opacity-0 stagger-1">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-white/80">Now Accepting New Projects for 2025</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 animate-slide-up opacity-0 stagger-2">
            Move Earth.
            <br />
            <span className="gradient-text">Build Futures.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10 animate-slide-up opacity-0 stagger-3">
            From site preparation to precision grading, Ridgeline Earthworks delivers powerful excavation solutions 
            that lay the groundwork for extraordinary construction projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-slide-up opacity-0 stagger-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-primary hover:bg-primary/80 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 flex items-center gap-3"
            >
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 animate-slide-up opacity-0 stagger-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-slide-up opacity-0 stagger-6">
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-white/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
