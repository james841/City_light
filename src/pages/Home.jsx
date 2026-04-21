import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  ArrowRight, FlaskConical, Code2, Brain, BarChart3,
  GraduationCap, ChevronRight, Star, Users, Award,
  Microscope, Cpu, Mail, MessageCircle
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

/* ── Stat ── */
function Stat({ value, label }) {
  return (
    <div className="text-center p-6 border-r border-gray-100 last:border-0">
      {/* Wine color for stats */}
      <div className="font-display text-4xl font-black text-[#722F37] mb-1">{value}</div>
      <div className="text-gray-400 font-body text-xs uppercase tracking-[0.2em] font-bold">{label}</div>
    </div>
  );
}

/* ── Service card ── */
function ServiceCard({ icon: Icon, title, desc, color }) {
  return (
    <motion.div 
      className="group relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#722F37]/50 transition-all duration-300 shadow-sm"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ring-2 ring-gray-200 ${color}`}>
        <Icon size={26} />
      </div>
      <h3 className="font-display font-bold text-gray-950 text-xl mb-3">{title}</h3>
      <p className="text-gray-700 font-body text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center gap-2 text-[#722F37] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
        LEARN MORE <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

/* ── Testimonial ── */
function Testimonial({ name, role, org, text }) {
  return (
    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
      <div className="flex gap-1 mb-4 text-[#722F37]">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <p className="text-gray-700 font-body leading-relaxed mb-6 italic text-lg">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 bg-[#722F37] rounded-full" />
        <div>
          <div className="font-display font-bold text-gray-900 text-sm uppercase">{name}</div>
          <div className="text-gray-500 text-xs font-body">{role} • {org}</div>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ item ── */
function FAQ({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mb-4 rounded-xl border border-gray-100 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-display font-bold text-gray-900">{q}</span>
        <ChevronRight size={20} className={`text-[#722F37] transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 font-body text-sm leading-relaxed border-t border-gray-50 pt-4 bg-gray-50/50">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const heroRef = useReveal();
  const aboutRef = useReveal();
  const servicesRef = useReveal();
  const statsRef = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/23407041707321?text=Hello Citylight, I'm interested in your services.`, '_blank');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    // ... existing EmailJS logic
    setIsSending(false);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* ── HERO ── */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Soft Wine/Burgundy Blur Orbs */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-[#722F37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#722F37]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
          <div ref={heroRef} className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 text-[#722F37] text-xs font-black uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#722F37] animate-pulse" />
              Innovation & Research Hub
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              Smarter <span className="text-[#722F37]">Software.</span> <br />
              Rigorous <span className="text-[#923E47]">Research.</span>
            </h1>
            
            <p className="text-gray-600 font-body text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              Bridging the gap between academic excellence and technological innovation. We deliver data-driven results for elite organizations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* WhatsApp kept Green */}
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-black rounded-xl transition-all hover:scale-105 shadow-md"
              >
                <MessageCircle size={20} /> WHATSAPP US
              </button>
              <button 
                onClick={() => window.location.href = "mailto:afolayanshem@gmail.com"}
                className="flex items-center gap-3 px-8 py-4 bg-[#722F37] hover:bg-[#5E262D] text-white font-black rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <Mail size={20} /> SEND EMAIL
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-[#722F37]/10 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
              alt="Research Tech"
              className="relative rounded-2xl w-full object-cover h-[550px] border border-gray-100 shadow-xl"
            />
          </div>
        </div>
      </motion.section>

      {/* ── STATS BAR ── */}
      <motion.section 
        className="border-y border-gray-100 bg-gray-50/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div ref={statsRef} className="reveal max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 py-0">
          <Stat value="100+" label="Projects" />
          <Stat value="50+" label="Clients" />
          <Stat value="12+" label="Industries" />
          <Stat value="5.0" label="Satisfaction" />
        </div>
      </motion.section>

      {/* ── SERVICES ── */}
      <motion.section 
        className="py-24 px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div ref={servicesRef} className="reveal text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Core Capabilities</h2>
            <div className="h-1.5 w-24 bg-[#722F37] mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={FlaskConical} title="Academic Research" color="bg-[#722F37]/10 text-[#722F37]" desc="Advanced literature reviews, rigorous data collection, and deep statistical reporting." />
          <ServiceCard icon={BarChart3} title="Business Insights" color="bg-[#923E47]/10 text-[#923E47]" desc="Strategic market analysis and intelligence reports for data-backed decision making." />
          <ServiceCard icon={Brain} title="Data Science & AI" color="bg-[#722F37]/5 text-[#722F37]" desc="Custom machine learning models built to solve your organization's specific challenges." />
          <ServiceCard icon={Code2} title="Software Dev" color="bg-gray-100 text-gray-600" desc="Scalable, secure, and modern custom software solutions for web and mobile." />
          <ServiceCard icon={GraduationCap} title="Training" color="bg-gray-50 text-[#722F37]" desc="Empowering teams through expert-led workshops on research and tech stacks." />
          <ServiceCard icon={Users} title="Consultancy" color="bg-white border border-gray-100 text-gray-500" desc="Expert guidance on technology roadmaps and research design optimization." />
        </div>
      </motion.section>

      {/* ── FINAL CTA ── */}
      <motion.section 
        className="pb-32 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-[#722F37] text-center shadow-2xl">
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Ready to start?</h2>
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 resize-none"
                required
              ></textarea>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="px-10 py-5 bg-white text-[#722F37] font-black rounded-xl hover:scale-105 transition-transform"
                >
                  {isSending ? 'SENDING...' : 'SEND EMAIL'}
                </button>
                <button 
                  type="button"
                  onClick={handleWhatsApp} 
                  className="px-10 py-5 bg-[#25D366] text-white font-black rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  MESSAGE WHATSAPP
                </button>
              </div>
            </form>
        </div>
      </motion.section>
    </div>
  );
}