import React, { useState } from 'react';
import { ArrowRight, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const categories = ['All', 'Research', 'Software', 'Data Analysis', 'Training'];

const projects = [
  {
    title: 'University Performance Analysis',
    category: 'Data Analysis',
    tags: ['Python', 'ML', 'Academic'],
    desc: 'Predictive modeling for retention rates in Lagos-based higher education.',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Health Sector Market Research',
    category: 'Research',
    tags: ['Healthcare', 'Strategy'],
    desc: 'Comprehensive analysis of the Nigerian private healthcare sector.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'NGO Management Platform',
    category: 'Software',
    tags: ['React', 'Node.js'],
    desc: 'Custom web platform for managing international grants across 5 states.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Fintech Adoption Study',
    category: 'Research',
    tags: ['Fintech', 'Behavioral'],
    desc: 'Digital payment patterns among low-income earners in SW Nigeria.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'School ERP System',
    category: 'Software',
    tags: ['Education', 'SaaS'],
    desc: 'Full-featured management system for private secondary networks.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Research Methods Bootcamp',
    category: 'Training',
    tags: ['Bootcamp', 'Academic'],
    desc: 'Intensive research methodology training for postgraduate scholars.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Agricultural Yield Forecasting',
    category: 'Data Analysis',
    tags: ['AI', 'AgriTech'],
    desc: 'Machine-learning models to predict and optimize crop production.',
    img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Policy Impact Report',
    category: 'Research',
    tags: ['Policy', 'Government'],
    desc: 'Evaluation of federal youth employment policies for the National Assembly.',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const heroRef = useReveal();
  const gridRef = useReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#722F37]/5 to-transparent blur-[120px]" />
        
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-slate-100 text-[#722F37] text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
            Case Studies & Outcomes
          </div>
          <h1 className="font-display text-6xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
            Impact <span className="text-[#722F37] italic">Visualized.</span>
          </h1>
          <p className="text-slate-600 font-body text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            From algorithmic optimization to socio-economic research, we turn complex challenges into documented success stories.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <Filter size={16} className="text-[#722F37] mr-2 hidden md:block" />
                {categories.map(c => (
                <button 
                    key={c} 
                    onClick={() => setActive(c)}
                    className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300
                    ${active === c
                        ? 'bg-[#722F37] text-white shadow-lg shadow-[#722F37]/20'
                        : 'text-slate-500 hover:text-[#722F37] border border-transparent hover:border-slate-200 bg-stone-50'
                    }`}
                >
                    {c}
                </button>
                ))}
            </div>
            <div className="relative w-full md:w-64">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                    type="text" 
                    placeholder="Search Projects..." 
                    className="w-full bg-stone-50 border border-slate-200 rounded-full py-2 pl-12 pr-4 text-sm text-slate-900 focus:outline-none focus:border-[#722F37] transition-all"
                />
            </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={gridRef} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, idx) => (
            <div 
              key={p.title} 
              className={`group relative bg-stone-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:border-[#722F37]/30 hover:shadow-2xl transition-all duration-500 ${p.featured ? 'lg:col-span-2' : ''}`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${p.featured ? 'h-[400px]' : 'h-[300px]'}`}>
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6">
                    <span className="bg-[#722F37] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                        {p.category}
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold text-[#722F37] bg-white px-2 py-0.5 rounded-md border border-[#722F37]/20 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className={`font-display font-black text-white leading-tight mb-3 ${p.featured ? 'text-3xl' : 'text-xl'}`}>
                    {p.title}
                </h3>
                <p className="text-slate-300 text-sm font-body leading-relaxed max-w-md line-clamp-2 group-hover:line-clamp-none transition-all">
                    {p.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ArrowRight size={14} className="text-[#722F37] bg-white rounded-full p-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FINAL CALL TO ACTION ── */}
        <div className="mt-32 relative rounded-[3rem] overflow-hidden border border-slate-100 bg-stone-50 p-12 lg:p-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#722F37]/10 blur-[100px]" />
          <h2 className="relative z-10 font-display text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
            Start Your <span className="text-[#722F37]">Project</span>
          </h2>
          <p className="relative z-10 text-slate-600 font-body text-xl max-w-2xl mx-auto mb-12">
            Have a complex research question or a software vision? Let’s engineer the solution together.
          </p>
          <Link 
            to="/contact" 
            className="relative z-10 inline-flex items-center gap-4 px-12 py-5 bg-[#722F37] text-white font-black rounded-full hover:bg-slate-900 transition-all hover:scale-105 shadow-xl shadow-[#722F37]/20"
          >
            GET IN TOUCH <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}