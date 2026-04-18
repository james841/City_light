import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Lightbulb, Users, Award, Globe } from 'lucide-react';
import useReveal from '../hooks/useReveal';

function ValueCard({ icon: Icon, title, desc }) {
  return (
    <div className="card-dark text-center">
      <div className="w-14 h-14 bg-primary-900/60 border border-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon size={24} className="text-primary-400" />
      </div>
      <h3 className="font-display font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 font-body text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function TeamCard({ name, role, bio, initials }) {
  return (
    <div className="card-dark group text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-display text-xl font-bold">
        {initials}
      </div>
      <h3 className="font-display font-semibold text-white mb-1">{name}</h3>
      <div className="text-primary-400 text-xs font-mono tracking-wide mb-3">{role}</div>
      <p className="text-gray-400 text-sm font-body leading-relaxed">{bio}</p>
    </div>
  );
}

export default function About() {
  const heroRef = useReveal();
  const missionRef = useReveal();
  const valuesRef = useReveal();
  const teamRef = useReveal();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-700/8 rounded-full blur-3xl" />
        </div>
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-tag"><span className="w-2 h-2 bg-primary-400 rounded-full"/>About Citylight</div>
            <h1 className="font-display text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Driven by{' '}
              <span className="gradient-text">Curiosity</span>,<br />
              Powered by{' '}
              <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-gray-400 font-body text-xl leading-relaxed">
              We are a research and technology company committed to delivering rigorous insights and innovative software that make a real difference in organisations across Nigeria and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Story */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={missionRef} className="reveal grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80&auto=format&fit=crop"
            alt="Citylight office team"
            className="rounded-2xl object-cover h-[450px] w-full"
          />
          <div>
            <div className="section-tag"><span className="w-2 h-2 bg-primary-400 rounded-full"/>Our Story</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5">
              From a Shared Vision to a Growing Reality
            </h2>
            <p className="text-gray-400 font-body leading-relaxed mb-4">
              Citylight Research and Technologies was founded by a group of passionate researchers and engineers who believed that African organisations deserve access to world-class research and technology services.
            </p>
            <p className="text-gray-400 font-body leading-relaxed mb-4">
              We saw the gap: many organisations were struggling with outdated methods, poor data infrastructure, and generic software that never quite fit their needs. We built Citylight to close that gap.
            </p>
            <p className="text-gray-400 font-body leading-relaxed mb-8">
              Today, we serve clients from academic institutions and government bodies to startups and established enterprises — always with the same commitment to quality, innovation, and impact.
            </p>
            <Link to="/contact" className="btn-primary">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={valuesRef} className="reveal">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <ValueCard icon={Target} title="Our Mission"
                desc="To provide organisations with rigorous research, advanced data analysis, and custom software that enable data-driven decisions and sustainable growth." />
              <ValueCard icon={Eye} title="Our Vision"
                desc="To be Africa's most trusted partner for research and technology, driving a knowledge-based transformation across industries and institutions." />
              <ValueCard icon={Lightbulb} title="Our Approach"
                desc="We blend academic rigour with practical innovation — combining the best of scientific methodology with agile, user-centred technology development." />
            </div>

            {/* Core values */}
            <h2 className="font-display text-3xl font-bold text-white text-center mb-10">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Award, title: 'Excellence', desc: 'We hold every output to the highest standard, never cutting corners on quality.' },
                { icon: Lightbulb, title: 'Innovation', desc: 'We constantly seek better methods, tools, and approaches to serve our clients.' },
                { icon: Users, title: 'Collaboration', desc: 'We partner closely with clients, treating every project as a shared endeavour.' },
                { icon: Globe, title: 'Impact', desc: 'Our work is measured by real-world outcomes, not just deliverables.' },
                { icon: Target, title: 'Integrity', desc: 'We are transparent, honest, and ethical in all our engagements.' },
                { icon: Eye, title: 'Curiosity', desc: 'We love hard questions — they drive the best research and the best software.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl border border-white/5 hover:border-primary-800 transition-colors">
                  <div className="w-10 h-10 bg-primary-900/50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">{title}</h4>
                    <p className="text-gray-400 text-sm font-body leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={teamRef} className="reveal text-center mb-14">
          <div className="section-tag justify-center"><span className="w-2 h-2 bg-primary-400 rounded-full"/>Our Team</div>
          <h2 className="font-display text-4xl font-bold text-white mb-4">The People Behind the Work</h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Our multidisciplinary team brings together expertise in research, data science, and software engineering.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamCard name="Isaac O. Damola" role="Founder & Lead Researcher" initials="ID"
            bio="Academic researcher and technologist with expertise in data analysis and research methodology." />
          <TeamCard name="Favour Adeyemi" role="Head of Software" initials="FA"
            bio="Full-stack engineer specialising in building custom enterprise software and data-driven applications." />
          <TeamCard name="Amara Chukwu" role="Data Scientist" initials="AC"
            bio="Machine learning expert with a track record of building predictive models across healthcare and finance." />
          <TeamCard name="Bola Osei" role="Research Analyst" initials="BO"
            bio="Business and academic researcher with deep knowledge of qualitative and quantitative methodologies." />
        </div>
      </section>
    </div>
  );
}
