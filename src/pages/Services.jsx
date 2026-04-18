import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlaskConical, BarChart3, Brain, Code2, GraduationCap,
  Users, ArrowRight, CheckCircle2, Microscope, Database,
  LineChart, Smartphone, Globe, ServerCog, Sparkles
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

const services = [
  {
    id: 'academic-research',
    icon: FlaskConical,
    color: 'from-blue-600 to-indigo-500',
    title: 'Academic Research',
    tagline: 'High-Precision Methodology',
    desc: 'We conduct peer-review grade academic research utilizing advanced data collection protocols and innovative methodologies across diverse scientific fields.',
    features: [
      'Literature & Theoretical Frameworks',
      'Complex Research Design',
      'Hybrid Data Collection',
      'Advanced Statistical Interpretation',
      'Grant & Dissertation Support',
      'Ethical Compliance Audits',
    ],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'business-research',
    icon: BarChart3,
    color: 'from-emerald-600 to-teal-500',
    title: 'Business Research',
    tagline: 'Strategic Intelligence',
    desc: 'Transform market uncertainties into competitive advantages with intelligence reports that blend consumer psychology with economic forecasting.',
    features: [
      'Market Entry Strategy',
      'Competitor Benchmarking',
      'Consumer Persona Mapping',
      'Feasibility & ROI Modeling',
      'Supply Chain Analytics',
      'Business Case Architecture',
    ],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'data-analysis',
    icon: Brain,
    color: 'from-purple-600 to-pink-500',
    title: 'Data Science & AI',
    tagline: 'Algorithmic Excellence',
    desc: 'Our data engineers deploy custom machine learning models and predictive analytics to uncover the hidden signals within your big data sets.',
    features: [
      'ML & Predictive Modeling',
      'NLP & Sentiment Analysis',
      'Real-time Dashboards',
      'Big Data Processing',
      'SPSS/R/Python Integration',
      'Automated Reporting',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'software-development',
    icon: Code2,
    color: 'from-primary-600 to-emerald-400',
    title: 'Custom Engineering',
    tagline: 'Scalable Ecosystems',
    desc: 'We build high-performance software that integrates seamlessly into your workflow, from enterprise ERPs to specialized mobile applications.',
    features: [
      'Full-Stack Web Apps',
      'Mobile Ecosystems (iOS/Android)',
      'Enterprise ERP Solutions',
      'Custom API Architecture',
      'Cloud Infrastructure',
      'Security Hardening',
    ],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop',
  },
];

const tools = [
  { icon: Database, name: 'SPSS' },
  { icon: LineChart, name: 'R / Python' },
  { icon: Brain, name: 'TensorFlow' },
  { icon: Globe, name: 'React / Next.js' },
  { icon: ServerCog, name: 'Node.js' },
  { icon: Smartphone, name: 'React Native' },
  { icon: Microscope, name: 'NVivo' },
  { icon: BarChart3, name: 'Power BI' },
];

function ServiceRow({ svc, index }) {
  const ref = useReveal();
  const even = index % 2 === 0;
  const Icon = svc.icon;

  return (
    <section id={svc.id} className={`py-24 relative overflow-hidden ${!even ? 'bg-white/[0.01]' : ''}`}>
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-20 items-center ${!even ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Column */}
          <div className={`relative ${!even ? 'lg:order-2' : ''}`}>
            <div className={`absolute -inset-4 bg-gradient-to-tr ${svc.color} opacity-20 blur-2xl rounded-[3rem]`} />
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img src={svc.img} alt={svc.title} className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          {/* Text Column */}
          <div className={!even ? 'lg:order-1' : ''}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${svc.color} flex items-center justify-center text-white shadow-lg`}>
                <Icon size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-400">{svc.tagline}</span>
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
              {svc.title}
            </h2>
            
            <p className="text-gray-400 font-body text-lg leading-relaxed mb-10">
              {svc.desc}
            </p>

            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {svc.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-gray-300 text-sm font-body font-medium">
                  <CheckCircle2 size={16} className="text-primary-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest border-b-2 border-primary-500 pb-2 hover:text-primary-400 transition-colors">
              INQUIRE ABOUT THIS <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const heroRef = useReveal();
  const toolsRef = useReveal();

  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      {/* ── HERO ── */}
      <section className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]" />
        
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-400 text-[10px] font-black uppercase tracking-widest mb-8">
            <Sparkles size={14} /> Specialized Operations
          </div>
          <h1 className="font-display text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
            Research. <span className="text-primary-400 italic">Engineered.</span>
          </h1>
          <p className="text-gray-400 font-body text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            From deep academic inquiries to enterprise-level software deployment, we deliver precision at every stage of the lifecycle.
          </p>
          
          {/* Internal Jump Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {services.map(s => (
                <a key={s.id} href={`#${s.id}`} className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold text-gray-500 hover:border-primary-500 hover:text-white transition-all">
                    {s.title}
                </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE ROWS ── */}
      {services.map((svc, i) => (
        <ServiceRow key={svc.id} svc={svc} index={i} />
      ))}

      {/* ── TOOLBOX SECTION ── */}
      <section className="py-32 bg-[#080808]">
        <div ref={toolsRef} className="reveal max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-black text-white mb-4 uppercase tracking-tighter">Our Infrastructure</h2>
            <p className="text-gray-500 font-body">Elite tools for elite outcomes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map(({ icon: Icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary-500/50 hover:bg-white/[0.04] transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-gray-400 uppercase">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto p-16 rounded-[3rem] bg-gradient-to-br from-primary-500 to-emerald-400 text-center text-black">
          <h2 className="font-display text-5xl font-black mb-8 tracking-tighter uppercase">Ready to optimize?</h2>
          <p className="font-body text-lg font-bold mb-10 opacity-80 max-w-xl mx-auto">
            Our consultants are available to audit your current research protocols or software architecture.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-black text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl">
            SCHEDULE A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}