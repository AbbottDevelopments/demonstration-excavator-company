import React from 'react';
import { Shovel, Mountain, Droplets, Truck, Building2, TreePine } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Shovel,
    title: 'Site Excavation',
    description: 'Complete site clearing and excavation for residential, commercial, and industrial projects of any scale.',
    color: 'from-primary to-purple-400',
  },
  {
    icon: Mountain,
    title: 'Grading & Leveling',
    description: 'Precision land grading to ensure proper drainage, foundation stability, and optimal site preparation.',
    color: 'from-secondary to-cyan-400',
  },
  {
    icon: Droplets,
    title: 'Trenching & Utilities',
    description: 'Expert trenching for water, sewer, gas, and electrical utility installations with minimal disruption.',
    color: 'from-accent to-rose-400',
  },
  {
    icon: Truck,
    title: 'Hauling & Demolition',
    description: 'Efficient debris removal, material hauling, and controlled demolition services for clean project sites.',
    color: 'from-warning to-amber-400',
  },
  {
    icon: Building2,
    title: 'Foundation Work',
    description: 'Basement and foundation excavation with precise depth control and structural support preparation.',
    color: 'from-success to-emerald-400',
  },
  {
    icon: TreePine,
    title: 'Land Clearing',
    description: 'Comprehensive land clearing including tree removal, stump grinding, and brush clearing for development.',
    color: 'from-primary to-secondary',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-3xl glass hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-white/50 leading-relaxed">{service.description}</p>
      <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </div>
  );
}

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 ${headerVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">What We Do</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Powerful Solutions for
            <br />
            <span className="gradient-text">Every Terrain</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Our fleet of heavy equipment and experienced operators handle projects from small residential 
            digs to massive commercial developments with precision and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
