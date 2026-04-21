import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, FlaskConical, Code2, Brain, BarChart3,
  GraduationCap, ChevronRight, Star, Users,
  Mail, MessageCircle
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

/* ── Stat ── */
function Stat({ value, label }) {
  return (
    <div className="text-center p-6 border-r border-gray-100 last:border-0">
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
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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

/* ── Portfolio card ── */
const categoryColors = {
  'Data Analysis':     { bg: 'bg-[#722F37]/10', text: 'text-[#722F37]',  dot: 'bg-[#722F37]' },
  'Business Research': { bg: 'bg-amber-50',     text: 'text-amber-700',  dot: 'bg-amber-500' },
  'Software Dev':      { bg: 'bg-gray-100',     text: 'text-gray-600',   dot: 'bg-gray-400' },
  'Academic Research': { bg: 'bg-rose-50',      text: 'text-rose-700',   dot: 'bg-rose-400' },
  'Training':          { bg: 'bg-[#923E47]/10', text: 'text-[#923E47]',  dot: 'bg-[#923E47]' },
};

function PortfolioCard({ title, category, img, tag, index }) {
  const c = categoryColors[category] || categoryColors['Software Dev'];
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#722F37]/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#722F37]/0 group-hover:bg-[#722F37]/15 transition-colors duration-300" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wide">
          {tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3 ${c.bg} ${c.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
          {category}
        </div>
        <h3 className="font-display font-bold text-gray-900 text-sm leading-snug group-hover:text-[#722F37] transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

const portfolioItems = [
  { title: 'University Performance Analysis',  category: 'Data Analysis',     tag: 'Python · ML',       img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80&auto=format&fit=crop' },
  { title: 'Health Sector Market Research',    category: 'Business Research', tag: 'Healthcare',        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80&auto=format&fit=crop' },
  { title: 'NGO Management Platform',          category: 'Software Dev',      tag: 'React · Node.js',   img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80&auto=format&fit=crop' },
  { title: 'Fintech Customer Study',           category: 'Academic Research', tag: 'Fintech',           img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80&auto=format&fit=crop' },
  { title: 'School ERP System',                category: 'Software Dev',      tag: 'ERP · Education',   img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80&auto=format&fit=crop' },
  { title: 'Research Methods Bootcamp',        category: 'Training',          tag: 'Workshop',          img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80&auto=format&fit=crop' },
  { title: 'Agricultural Yield Forecasting',   category: 'Data Analysis',     tag: 'ML · Agriculture',  img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80&auto=format&fit=crop' },
  { title: 'Policy Impact Evaluation',         category: 'Academic Research', tag: 'Government',        img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&q=80&auto=format&fit=crop' },
  { title: 'E-Commerce Web Platform',          category: 'Software Dev',      tag: 'React · PostgreSQL',img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80&auto=format&fit=crop' },
  { title: 'Startup Market Entry Research',    category: 'Business Research', tag: 'Strategy',          img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80&auto=format&fit=crop' },
  { title: 'Hospital Data Dashboard',          category: 'Data Analysis',     tag: 'Power BI',          img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80&auto=format&fit=crop' },
  { title: 'Corporate Tech Training',          category: 'Training',          tag: 'Enterprise',        img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80&auto=format&fit=crop' },
];

export default function Home() {
  const heroRef    = useReveal();
  const servicesRef = useReveal();
  const statsRef   = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/23407041707321?text=Hello Citylight, I'm interested in your services.`, '_blank');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    // Wire up EmailJS or your backend here
    setTimeout(() => setIsSending(false), 1500);
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
        <div className="absolute top-0 -left-20 w-96 h-96 bg-[#722F37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#722F37]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
          <div ref={heroRef} className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 text-[#722F37] text-xs font-black uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#722F37] animate-pulse" />
              Innovation &amp; Research Hub
            </div>

            <h1 className="font-display text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              Smarter <span className="text-[#722F37]">Software.</span> <br />
              Rigorous <span className="text-[#923E47]">Research.</span>
            </h1>

            <p className="text-gray-600 font-body text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              Bridging the gap between academic excellence and technological innovation. We deliver data-driven results for elite organizations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-black rounded-xl transition-all hover:scale-105 shadow-md"
              >
                <MessageCircle size={20} /> WHATSAPP US
              </button>
              <button
                onClick={() => window.location.href = 'mailto:afolayanshem@gmail.com'}
                className="flex items-center gap-3 px-8 py-4 bg-[#722F37] hover:bg-[#5E262D] text-white font-black rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <Mail size={20} /> SEND EMAIL
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-[#722F37]/10 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
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
          <Stat value="50+"  label="Clients" />
          <Stat value="12+"  label="Industries" />
          <Stat value="5.0"  label="Satisfaction" />
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
          <ServiceCard icon={FlaskConical} title="Academic Research"  color="bg-[#722F37]/10 text-[#722F37]"  desc="Advanced literature reviews, rigorous data collection, and deep statistical reporting." />
          <ServiceCard icon={BarChart3}   title="Business Insights"   color="bg-[#923E47]/10 text-[#923E47]"  desc="Strategic market analysis and intelligence reports for data-backed decision making." />
          <ServiceCard icon={Brain}       title="Data Science & AI"   color="bg-[#722F37]/5  text-[#722F37]"  desc="Custom machine learning models built to solve your organization's specific challenges." />
          <ServiceCard icon={Code2}       title="Software Dev"        color="bg-gray-100 text-gray-600"        desc="Scalable, secure, and modern custom software solutions for web and mobile." />
          <ServiceCard icon={GraduationCap} title="Training"          color="bg-gray-50 text-[#722F37]"        desc="Empowering teams through expert-led workshops on research and tech stacks." />
          <ServiceCard icon={Users}       title="Consultancy"         color="bg-white border border-gray-100 text-gray-500" desc="Expert guidance on technology roadmaps and research design optimization." />
        </div>
      </motion.section>

      {/* ── PORTFOLIO ── */}
      <motion.section
        className="py-24 px-6 lg:px-8 bg-gray-50/70 border-y border-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 text-[#722F37] text-xs font-black uppercase tracking-widest mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#722F37]" />
              Some Examples of Our Work
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              Our Portfolio
            </h2>
            <div className="h-1.5 w-24 bg-[#722F37] mx-auto rounded-full mb-6" />
            <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
              As a top research and technology firm in Nigeria, we present here some examples of our best works across industries and disciplines.
            </p>
          </div>

          {/* 4-col × 3-row grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portfolioItems.map((item, i) => (
              <PortfolioCard key={i} {...item} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#722F37] hover:bg-[#5E262D] text-white font-black rounded-xl transition-all hover:scale-105 shadow-lg uppercase tracking-wide"
            >
              View Full Portfolio <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* ── TESTIMONIALS ── */}
      <motion.section
        className="py-24 px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">What Clients Say</h2>
          <div className="h-1.5 w-24 bg-[#722F37] mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial name="Dr. Adaeze Okonkwo" role="Head of Research" org="Lagos State University"
            text="Citylight's academic research support was exceptional. Their methodology was rigorous and their team was incredibly professional throughout the entire process." />
          <Testimonial name="Emeka Nwosu" role="CEO" org="Novus Fintech Ltd"
            text="They built a custom business intelligence dashboard for us that transformed how we make decisions. The team truly understood our needs and delivered beyond expectations." />
          <Testimonial name="Fatima Bello" role="Data Manager" org="FHI 360 Nigeria"
            text="The training programme on data analysis and research tools was world-class. Our team's productivity has increased significantly since working with Citylight." />
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">FAQ</h2>
            <div className="h-1.5 w-24 bg-[#722F37] mx-auto rounded-full" />
          </div>
          <FAQ q="What types of organisations do you work with?"
            a="We work with academic institutions, private businesses, NGOs, government agencies, and individual researchers — profit or non-profit, any sector." />
          <FAQ q="How does the software development process work?"
            a="We start with a discovery session to understand your needs, then design a tailored solution, develop iteratively, and provide full deployment and support." />
          <FAQ q="Do you provide training services?"
            a="Yes. We offer training programmes in research methodology, data analysis, statistical tools (SPSS, R, Python), and software development for individuals and teams." />
          <FAQ q="Can you handle large-scale data analysis projects?"
            a="Absolutely. Our data team is experienced in handling large, complex datasets using cutting-edge tools and advanced statistical or machine-learning techniques." />
          <FAQ q="How long does a typical research project take?"
            a="Timeline depends on scope, but most projects range from 4 weeks to 6 months. We always define clear milestones and keep you updated throughout." />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <motion.section
        className="pb-32 px-6 pt-24"
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
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 w-full"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 resize-none"
              required
            />
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
