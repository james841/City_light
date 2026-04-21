import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Target, Eye, Lightbulb, Users, 
  Award, Globe, Sparkles, Fingerprint, Compass 
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

/* ── Value Card ── */
function ValueCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-[#722F37]/20 hover:shadow-xl transition-all duration-500 overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#722F37]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-14 h-14 bg-[#722F37]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon size={28} className="text-[#722F37]" />
      </div>
      <h3 className="font-display font-bold text-slate-900 text-xl mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-600 font-body text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

/* ── Team Card ── */
function TeamCard({ name, role, bio, initials }) {
  return (
    <div className="group p-1">
      <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 h-full transition-all duration-500 hover:shadow-lg hover:border-[#722F37]/30">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#722F37] to-[#9B414B] rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
          <div className="relative inset-0 w-full h-full bg-white rounded-3xl flex items-center justify-center text-[#722F37] font-display text-2xl font-black border border-slate-100 shadow-sm">
            {initials}
          </div>
        </div>
        <h3 className="font-display font-bold text-slate-900 text-lg mb-1 text-center">{name}</h3>
        <div className="text-[#722F37] text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-center">{role}</div>
        <p className="text-slate-500 text-sm font-body leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500 text-center">{bio}</p>
      </div>
    </div>
  );
}

export default function About() {
  const refs = {
    hero: useReveal(),
    mission: useReveal(),
    values: useReveal(),
    team: useReveal(),
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#722F37]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        
        <div ref={refs.hero} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#722F37]/5 border border-[#722F37]/10 text-[#722F37] text-xs font-bold tracking-widest uppercase mb-8">
              <Sparkles size={14} /> The Citylight Identity
            </div>
            <h1 className="font-display text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Driven by <span className="text-[#722F37] italic">Curiosity.</span><br />
              Powered by <span className="text-slate-800 underline decoration-[#722F37]">Logic.</span>
            </h1>
            <p className="text-slate-600 font-body text-xl lg:text-2xl leading-relaxed max-w-2xl">
              A high-precision research and technology firm engineering modern solutions for the continent’s most ambitious organisations.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="py-24 relative bg-stone-50">
        <div ref={refs.mission} className="reveal max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#722F37]/10 rounded-[3rem] blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop"
              alt="Team collaboration"
              className="relative rounded-[2rem] object-cover h-[500px] w-full border border-white shadow-2xl transition-all duration-700"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight">The <span className="text-[#722F37]">Vision</span> Behind The Code</h2>
            <div className="space-y-6 text-slate-600 font-body text-lg leading-relaxed">
              <p>
                Citylight was born from a simple realization: technical skill without research is aimless, and research without technology is stagnant. 
              </p>
              <p>
                We built this firm to bridge that gap, providing African institutions with the same level of rigorous data infrastructure and custom engineering found in the world’s leading tech hubs.
              </p>
              <p className="text-slate-900 font-bold italic border-l-4 border-[#722F37] pl-6 py-2">
                "We don't just build apps; we build engines of growth."
              </p>
            </div>
            <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#722F37] text-white font-black rounded-full hover:bg-slate-900 transition-all group shadow-lg shadow-[#722F37]/20">
                    WORK WITH US <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION BENTO ── */}
      <section className="py-24 bg-white">
        <div ref={refs.values} className="reveal max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            <ValueCard 
              icon={Target} 
              title="Our Mission" 
              desc="To arm organizations with high-rigor research and custom-engineered software that turns data into a decisive competitive advantage." 
            />
            <ValueCard 
              icon={Eye} 
              title="Our Vision" 
              desc="To be the primary catalyst for Africa’s knowledge-based transformation, setting the standard for research and tech integration." 
            />
            <ValueCard 
              icon={Compass} 
              title="Our Approach" 
              desc="Agile, scientific, and user-centric. We apply the scientific method to software development and data science." 
            />
          </div>

          {/* Core Values Minimalist List */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-black text-slate-900 uppercase tracking-widest">Core DNA</h2>
            <div className="h-1.5 w-20 bg-[#722F37] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Fingerprint, title: 'Uniqueness', desc: 'Every solution is bespoke. No generic templates, no shortcuts.' },
              { icon: Sparkles, title: 'Elegance', desc: 'Complexity made simple. We strive for beauty in our code and reports.' },
              { icon: Users, title: 'Unity', desc: 'We operate as an extension of your own internal team.' },
              { icon: Globe, title: 'Local Context', desc: 'Global standards applied with a deep understanding of the African market.' },
              { icon: Award, title: 'Rigor', desc: 'Statistical significance is our baseline, not our goal.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Constant R&D ensures you always have the latest tech stack.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:bg-stone-50 transition-all">
                <Icon size={20} className="text-[#722F37] shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">{title}</h4>
                  <p className="text-slate-500 text-xs font-body leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8 bg-stone-50 rounded-[3rem] my-10">
        <div ref={refs.team} className="reveal text-center mb-20">
          <h2 className="font-display text-5xl lg:text-6xl font-black text-slate-900 mb-6">The Architects.</h2>
          <p className="text-slate-500 font-body text-lg max-w-xl mx-auto">
            A specialized collective of researchers, engineers, and data scientists.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TeamCard name="Isaac O. Damola" role="Lead Researcher" initials="ID"
            bio="Strategic academic technologist focusing on research methodology and advanced data structures." />
          <TeamCard name="Favour Adeyemi" role="Head of Software" initials="FA"
            bio="Architecting enterprise-grade full-stack applications with a focus on scalability and security." />
          <TeamCard name="Amara Chukwu" role="Data Scientist" initials="AC"
            bio="Building high-precision predictive models and machine learning pipelines for complex industries." />
          <TeamCard name="Bola Osei" role="Research Analyst" initials="BO"
            bio="Expert in qualitative and quantitative business insights, translating data into human strategy." />
        </div>
      </section>

      {/* ── FOOTER-ISH CTA ── */}
      <section className="py-20 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <h2 className="font-display text-3xl font-black text-slate-900">Have a project in mind?</h2>
            <Link to="/contact" className="px-12 py-5 bg-[#722F37] text-white font-black rounded-full hover:scale-105 transition-transform text-center shadow-lg shadow-[#722F37]/30">
                LET'S TALK RESEARCH
            </Link>
        </div>
      </section>
    </div>
  );
}