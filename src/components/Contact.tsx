import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Location', value: '1234 Industrial Blvd, Denver, CO 80202' },
  { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'info@terraforce.com' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 6AM – 6PM' },
];

export default function Contact() {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={formRef}
          className={`${formVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Get In Touch</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Ready to Break
              <br />
              <span className="gradient-text">New Ground?</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              Tell us about your project and get a free, no-obligation estimate within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 mb-1">{item.label}</div>
                    <div className="text-white/80 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 h-48">
                <img
                  src="https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                  alt="Service area"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Service Needed</label>
                  <select
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white/70 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-300 appearance-none"
                  >
                    <option value="" className="bg-surface">Select a service</option>
                    <option value="excavation" className="bg-surface">Site Excavation</option>
                    <option value="grading" className="bg-surface">Grading & Leveling</option>
                    <option value="trenching" className="bg-surface">Trenching & Utilities</option>
                    <option value="demolition" className="bg-surface">Hauling & Demolition</option>
                    <option value="foundation" className="bg-surface">Foundation Work</option>
                    <option value="clearing" className="bg-surface">Land Clearing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 ${
                    submitted
                      ? 'bg-success'
                      : 'bg-primary hover:bg-primary/80 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5'
                  }`}
                >
                  {submitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Free Estimate
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
