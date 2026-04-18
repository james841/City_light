import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlaskConical, BarChart3, Brain, Code2, GraduationCap,
  Users, ArrowRight, CheckCircle2, Microscope, Database,
  LineChart, Smartphone, Globe, ServerCog
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

const services = [
  {
    id: 'academic-research',
    icon: FlaskConical,
    color: 'text-primary-400 bg-primary-900/50',
    title: 'Academic Research',
    tagline: 'Rigorous. Methodical. Impactful.',
    desc: 'We conduct comprehensive academic research utilizing advanced technologies and innovative methodologies across various fields. Our team handles every stage of the research lifecycle.',
    features: [
      'Literature review & theoretical framework',
      'Research design & methodology',
      'Data collection (qualitative & quantitative)',
      'Statistical analysis & interpretation',
      'Research report writing & formatting',
      'Thesis & dissertation support',
    ],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'business-research',
    icon: BarChart3,
    color: 'text-emerald-400 bg-emerald-900/50',
    title: 'Business Research',
    tagline: 'Data-driven strategy starts here.',
    desc: 'We help businesses make smarter decisions with comprehensive market analysis, competitive intelligence, and customer insights powered by cutting-edge methodologies.',
    features: [
      'Market research & analysis',
      'Competitive intelligence',
      'Consumer behaviour studies',
      'Feasibility studies',
      'Industry trend analysis',
      'Business case development',
    ],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'data-analysis',
    icon: Brain,
    color: 'text-teal-400 bg-teal-900/50',
    title: 'Data Analysis & AI',
    tagline: 'Turn raw data into clear insight.',
    desc: 'Our data scientists and analysts apply advanced statistical techniques and machine learning to help you understand your data, identify patterns, and make confident decisions.',
    features: [
      'Exploratory data analysis',
      'Statistical modelling (SPSS, R, Python)',
      'Machine learning & predictive analytics',
      'Data visualisation & dashboards',
      'Survey data analysis',
      'Big data processing',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'software-development',
    icon: Code2,
    color: 'text-green-400 bg-green-900/50',
    title: 'Custom Software Development',
    tagline: 'Software that fits — not forces.',
    desc: 'We build tailor-made software solutions for academic institutions, businesses, NGOs, and government organisations — from web platforms to mobile apps to enterprise systems.',
    features: [
      'Web application development',
      'Mobile app development',
      'Enterprise resource planning (ERP)',
      'Database design & management',
      'API development & integration',
      'Ongoing maintenance & support',
    ],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'training',
    icon: GraduationCap,
    color: 'text-lime-400 bg-lime-900/50',
    title: 'Training & Education',
    tagline: 'Skills that last beyond the project.',
    desc: 'We offer hands-on training programmes for individuals and teams in research methodology, data analysis tools, and software development fundamentals.',
    features: [
      'Research methodology bootcamps',
      'Data analysis with SPSS, R & Python',
      'Introduction to machine learning',
      'Software development fundamentals',
      'Academic writing & reporting',
      'Corporate training programmes',
    ],
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'consultancy',
    icon: Users,
    color: 'text-cyan-400 bg-cyan-900/50',
    title: 'Research & Tech Consultancy',
    tagline: 'Expert guidance at every step.',
    desc: "Not sure where to start? Our consultants help you define your research strategy, choose the right technologies, and build a roadmap for long-term success.",
    features: [
      'Research strategy development',
      'Technology selection & roadmap',
      'Data infrastructure planning',
      'Grant writing support',
      'Project scoping & management',
      'Institutional capacity building',
    ],
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop',
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

/* Sub-component so useReveal hook is valid per React rules */
function ServiceRow({ svc, index }) {
  const ref = useReveal();
  const even = index % 2 === 0;
  const Icon = svc.icon;
  return (
    <section className={`py-20 ${index % 2 === 1 ? 'bg-surface' : ''}`}>
      <div ref={ref} className="reveal max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {even && (
            <img src={svc.img} alt={svc.title}
              className="rounded-2xl object-cover h-[380px] w-full" />
          )}
          <div>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${svc.color}`}>
              <Icon size={26} />
            </div>
            <p className="text-primary-400 font-mono text-xs tracking-widest uppercase mb-2">{svc.tagline}</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">{svc.title}</h2>
            <p className="text-gray-400 font-body leading-relaxed mb-6">{svc.desc}</p>
            <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
              {svc.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-gray-300 text-sm font-body">
                  <CheckCircle2 size={14} className="text-primary-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">
              Enquire About This Service <ArrowRight size={16} />
            </Link>
          </div>
          {!even && (
            <img src={svc.img} alt={svc.title}
              className="rounded-2xl object-cover h-[380px] w-full" />
          )}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const heroRef = useReveal();
  const toolsRef = useReveal();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-800/8 rounded-full blur-3xl" />
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-tag justify-center">
            <span className="w-2 h-2 bg-primary-400 rounded-full" />
            Our Services
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Research</span>{' '}
            &amp;{' '}
            <span className="gradient-text">Build</span>
          </h1>
          <p className="text-gray-400 font-body text-xl max-w-3xl mx-auto">
            From initial research concept to fully deployed software, we handle the complete lifecycle with expertise and precision.
          </p>
        </div>
      </section>

      {/* Services — each row is a component so hooks are legal */}
      {services.map((svc, i) => (
        <ServiceRow key={svc.id} svc={svc} index={i} />
      ))}

      {/* Tech stack */}
      <section className="py-20 bg-surface">
        <div ref={toolsRef} className="reveal max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-tag justify-center">
            <span className="w-2 h-2 bg-primary-400 rounded-full" />
            Technologies We Use
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-10">Our Toolbox</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map(({ icon: Icon, name }) => (
              <div key={name}
                className="flex items-center gap-3 bg-card border border-white/5 rounded-xl px-5 py-3 hover:border-primary-700 transition-colors">
                <Icon size={18} className="text-primary-400" />
                <span className="font-mono text-sm text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
