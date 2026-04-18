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
    <div className="text-center p-6 border-r border-white/5 last:border-0">
      <div className="font-display text-4xl font-black text-primary-400 mb-1">{value}</div>
      <div className="text-gray-500 font-body text-xs uppercase tracking-[0.2em] font-bold">{label}</div>
    </div>
  );
}

/* ── Service card ── */
function ServiceCard({ icon: Icon, title, desc, color }) {
  return (
    <motion.div 
      className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary-500/50 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ring-1 ring-white/10 ${color}`}>
        <Icon size={26} />
      </div>
      <h3 className="font-display font-bold text-white text-xl mb-3">{title}</h3>
      <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center gap-2 text-primary-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
        LEARN MORE <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

/* ── Testimonial ── */
function Testimonial({ name, role, org, text }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5">
      <div className="flex gap-1 mb-4 text-primary-400">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <p className="text-gray-300 font-body leading-relaxed mb-6 italic text-lg">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 bg-primary-500 rounded-full" />
        <div>
          <div className="font-display font-bold text-white text-sm uppercase">{name}</div>
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
    <div className="mb-4 rounded-xl border border-white/5 bg-white/[0.01] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="font-display font-bold text-white">{q}</span>
        <ChevronRight size={20} className={`text-primary-400 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-400 font-body text-sm leading-relaxed border-t border-white/5 pt-4 bg-black/20">
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

  // Functional Logic for buttons
  const handleWhatsApp = () => {
    window.open(`https://wa.me/23407041707321?text=Hello Citylight, I'm interested in your services.`, '_blank');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Check if environment variables are set
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID ||
        !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
        !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      alert('EmailJS configuration is missing. Please check your .env.local file.');
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'afolayanshem@gmail.com',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      alert('🎉 Thank you! Your message has been sent successfully. We\'ll get back to you soon!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      let errorMessage = 'Failed to send email. ';

      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please check your EmailJS configuration and try again.';
      }

      alert(errorMessage);
    }
    setIsSending(false);
  };

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* ── HERO ── */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Orbs */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
          <div ref={heroRef} className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-black uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              Innovation & Research Hub
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
              Smarter <span className="text-primary-400">Software.</span> <br />
              Rigorous <span className="text-emerald-400">Research.</span>
            </h1>
            
            <p className="text-gray-400 font-body text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              Bridging the gap between academic excellence and technological innovation. We deliver data-driven results for elite organizations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-black font-black rounded-xl transition-all hover:scale-105"
              >
                <MessageCircle size={20} /> WHATSAPP US
              </button>
              <button 
                onClick={() => window.location.href = "mailto:afolayanshem@gmail.com?subject=Inquiry about Research/Technology Services"}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black rounded-xl transition-all hover:scale-105"
              >
                <Mail size={20} /> SEND EMAIL
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop"
              alt="Research Tech"
              className="relative rounded-2xl w-full object-cover h-[550px] border border-white/10"
            />
          </div>
        </div>
      </motion.section>

      {/* ── STATS BAR ── */}
      <motion.section 
        className="border-y border-white/5 bg-white/[0.02]"
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
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Core Capabilities</h2>
            <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full" />
        </div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServiceCard icon={FlaskConical} title="Academic Research" color="bg-primary-500/10 text-primary-400" desc="Advanced literature reviews, rigorous data collection, and deep statistical reporting." />
          <ServiceCard icon={BarChart3} title="Business Insights" color="bg-emerald-500/10 text-emerald-400" desc="Strategic market analysis and intelligence reports for data-backed decision making." />
          <ServiceCard icon={Brain} title="Data Science & AI" color="bg-teal-500/10 text-teal-400" desc="Custom machine learning models built to solve your organization's specific challenges." />
          <ServiceCard icon={Code2} title="Software Dev" color="bg-blue-500/10 text-blue-400" desc="Scalable, secure, and modern custom software solutions for web and mobile." />
          <ServiceCard icon={GraduationCap} title="Training" color="bg-lime-500/10 text-lime-400" desc="Empowering teams through expert-led workshops on research and tech stacks." />
          <ServiceCard icon={Users} title="Consultancy" color="bg-cyan-500/10 text-cyan-400" desc="Expert guidance on technology roadmaps and research design optimization." />
        </motion.div>
      </motion.section>

      {/* ── ABOUT SNIPPET ── */}
      <motion.section 
        className="py-24 bg-white/[0.01]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div ref={aboutRef} className="reveal max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary-500/30 rounded-2xl" />
              <img
                src="/tech.jpg"
                alt="About"
                className="relative rounded-2xl object-cover h-[450px] w-full"
              />
           </div>
           <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-black text-white mb-6 uppercase tracking-tight">Built on <span className="text-primary-400">Excellence.</span></h2>
              <p className="text-gray-400 font-body mb-8 leading-relaxed text-lg">
                Citylight is more than a technology firm. We are a multidisciplinary team of data scientists, software engineers, and research veterans dedicated to solving complex problems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Microscope, text: 'Elite Research' },
                  { icon: Cpu, text: 'Tech Innovation' },
                  { icon: Brain, text: 'Advanced Analytics' },
                  { icon: Award, text: 'Quality Guaranteed' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 text-gray-200">
                    <Icon size={18} className="text-primary-400" />
                    <span className="font-bold text-sm">{text}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </motion.section>

      {/* ── TESTIMONIALS ── */}
      <motion.section 
        className="py-24 px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-4xl font-black text-white text-center mb-16 uppercase tracking-tight">Trusted Voices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial name="Dr. Adaeze Okonkwo" role="Head of Research" org="LASU" text="Citylight's academic research support was exceptional. Their methodology was rigorous." />
          <Testimonial name="Emeka Nwosu" role="CEO" org="Novus Fintech" text="They built a custom dashboard that transformed our decisions. Truly understood our needs." />
          <Testimonial name="Fatima Bello" role="Data Manager" org="FHI 360" text="The training programme was world-class. Our team's productivity has increased significantly." />
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <motion.section 
        className="py-24 max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl font-black text-white text-center mb-12 uppercase tracking-tight">Common Inquiries</h2>
        <FAQ q="What types of organisations do you work with?" a="We partner with academic institutions, private firms, NGOs, and government agencies across all sectors." />
        <FAQ q="How does the software development process work?" a="We use an agile process: Discovery, Iterative Design, Development, and full Deployment with support." />
        <FAQ q="Do you provide training services?" a="Yes. We offer training in research methodology, SPSS, R, Python, and modern software development." />
      </motion.section>

      {/* ── FINAL CTA ── */}
      <motion.section 
        className="pb-32 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-primary-500 text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-black text-black mb-8 uppercase tracking-tighter">Ready to start?</h2>
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/40"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/40"
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/40 resize-none"
              ></textarea>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="px-10 py-5 bg-black text-white font-black rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'SENDING...' : 'SEND EMAIL'}
                </button>
                <button 
                  type="button"
                  onClick={handleWhatsApp} 
                  className="px-10 py-5 bg-white text-black font-black rounded-xl hover:scale-105 transition-transform shadow-xl"
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