import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const categories = ['All', 'Research', 'Software', 'Data Analysis', 'Training'];

const projects = [
  {
    title: 'University Student Performance Analysis',
    category: 'Data Analysis',
    tags: ['Python', 'ML', 'Academic'],
    desc: 'Developed a predictive model for a Lagos-based university to identify at-risk students early and improve retention rates by 28%.',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Health Sector Market Research Report',
    category: 'Research',
    tags: ['Business Research', 'Healthcare'],
    desc: 'Comprehensive market analysis of the Nigerian private healthcare sector for a leading hospital group, enabling strategic expansion decisions.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'NGO Management Platform',
    category: 'Software',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'Custom web platform for an international NGO managing grants, beneficiaries, and field operations across 5 Nigerian states.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Fintech Customer Behaviour Study',
    category: 'Research',
    tags: ['Business Research', 'Fintech'],
    desc: 'In-depth qualitative and quantitative research on digital payment adoption patterns among low-income earners in Southwest Nigeria.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'School ERP System',
    category: 'Software',
    tags: ['Software', 'Education', 'ERP'],
    desc: 'Full-featured school management system covering admissions, fees, results, timetables, and communications for a private secondary school network.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Research Methods Bootcamp',
    category: 'Training',
    tags: ['Training', 'Research'],
    desc: 'Delivered an intensive 3-day research methodology bootcamp for 60 postgraduate students at a federal university, covering both qualitative and quantitative approaches.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Agricultural Yield Forecasting Model',
    category: 'Data Analysis',
    tags: ['Python', 'Time Series', 'Agriculture'],
    desc: 'Built a machine-learning forecasting model for a farming cooperative to predict crop yields, optimise resource allocation, and reduce waste.',
    img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Government Policy Impact Report',
    category: 'Research',
    tags: ['Academic', 'Policy', 'Government'],
    desc: 'Rigorous impact evaluation of a federal youth employment policy using mixed-methods research, presented to the National Assembly.',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&q=80&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const heroRef = useReveal();
  const gridRef = useReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary-800/8 rounded-full blur-3xl" />
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-tag justify-center"><span className="w-2 h-2 bg-primary-400 rounded-full"/>Our Work</div>
          <h1 className="font-display text-5xl lg:text-6xl font-black text-white mb-6">
            Projects We're <span className="gradient-text">Proud Of</span>
          </h1>
          <p className="text-gray-400 font-body text-xl max-w-2xl mx-auto">
            A selection of research, software, and training projects that demonstrate our capability and impact.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="flex justify-center gap-3 flex-wrap px-6 mb-12">
        {categories.map(c => (
          <button key={c} onClick={() => setActive(c)}
            className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200
              ${active === c
                ? 'bg-primary-500 text-dark'
                : 'border border-white/10 text-gray-400 hover:border-primary-600 hover:text-primary-400'
              }`}>
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="pb-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={gridRef} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.title} className="card-dark group overflow-hidden p-0">
              <div className="overflow-hidden h-48">
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs font-mono text-primary-400 bg-primary-900/40 px-2.5 py-0.5 rounded-full border border-primary-800/50">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-white mb-2 text-lg leading-tight">{p.title}</h3>
                <p className="text-gray-400 text-sm font-body leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 font-body mb-6">Want to see your project here?</p>
          <Link to="/contact" className="btn-primary px-8 py-3.5">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
