import React from 'react';
import { Shovel, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  Services: ['Site Excavation', 'Grading & Leveling', 'Trenching', 'Demolition', 'Foundation Work', 'Land Clearing'],
  Company: ['About Us', 'Our Team', 'Careers', 'Safety Record', 'Equipment Fleet'],
  Resources: ['Blog', 'Project Gallery', 'FAQs', 'Service Areas', 'Permits Guide'],
};

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Shovel className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Ridgeline <span className="text-primary">Earthworks</span>
              </span>
            </a>
            <p className="text-white/40 leading-relaxed mb-6 max-w-sm">
              Professional excavation services built on 25+ years of experience, safety, and precision. 
              Licensed, bonded, and fully insured.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            © 2025 Ridgeline Earthworks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
