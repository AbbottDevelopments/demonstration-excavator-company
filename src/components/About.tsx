import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, Users, Truck, HardHat } from 'lucide-react';

const highlights = [
  { icon: Users, value: '50+', label: 'Skilled Operators' },
  { icon: Truck, value: '30+', label: 'Heavy Machines' },
  { icon: HardHat, value: '0', label: 'Safety Incidents' },
];

const features = [
  'Licensed, bonded & fully insured',
  'GPS-guided precision grading',
  'Environmental compliance certified',
  'On-time project delivery guarantee',
  '24/7 emergency response available',
  'Free on-site project estimates',
];

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            ref={leftRef}
            className={`relative ${leftVisible ? 'animate-slide-in' : 'opacity-0'}`}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Excavator operator at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 lg:right-[-2rem] glass rounded-2xl p-6 animate-pulse-glow">
              <div className="flex gap-8">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <h.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-black">{h.value}</div>
                    <div className="text-xs text-white/50">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            ref={rightRef}
            className={`${rightVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">About Ridgeline Earthworks</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Built on Strength.
              <br />
              <span className="gradient-text">Driven by Precision.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              For over 25 years, Ridgeline Earthworks has been the trusted name in excavation services across the region. 
              Our team combines cutting-edge technology with decades of hands-on experience to deliver results 
              that exceed expectations—on time and on budget.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/80 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              Work With Us
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
