import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Riverside Commercial Complex',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: '15-acre site preparation including grading, utility trenching, and foundation excavation.',
  },
  {
    title: 'Mountain View Subdivision',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Complete land clearing and road grading for a 200-home residential development.',
  },
  {
    title: 'Highway 101 Expansion',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/2489/street-building-construction-industry.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Major earthmoving and grading for a 12-mile highway expansion project.',
  },
  {
    title: 'Lakeside Resort Foundation',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Precision excavation for a luxury resort with complex terrain challenges.',
  },
];

const categories = ['All', 'Commercial', 'Residential', 'Infrastructure'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 ${headerVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Our Work</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Projects That
            <br />
            <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Every project is a testament to our commitment to quality, safety, and precision.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => {
            const { ref, isVisible } = useScrollReveal(0.1);
            return (
              <div
                key={project.title}
                ref={ref}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 rounded-lg bg-primary/20 text-primary text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
