import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, Send } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#722F37] border-t border-white/10">
      {/* ── CTA BANNER ── */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl lg:text-3xl font-black text-white mb-2 tracking-tighter">
              READY TO BRING YOUR IDEA TO LIFE?
            </h3>
            <p className="text-white/60 font-body font-medium">
              Let's build something meaningful together.
            </p>
          </div>
          <Link to="/contact" className="bg-white text-[#722F37] font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-stone-100 transition-all shadow-2xl">
            Start a Project
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="brightness-0 invert">
               <Logo />
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed mt-6 mb-6">
              We conduct research and develop software solutions that empower organisations to thrive in a data-driven world.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: '#' },
                { Icon: Share2, href: '#' },
                { Icon: MessageCircle, href: '#' },
                { Icon: Send, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-[#722F37] hover:bg-white hover:border-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-black text-white mb-6 text-[10px] uppercase tracking-[0.2em] opacity-50">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(l => (
                <li key={l}>
                  <Link to={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
                    className="text-white/70 hover:text-white text-sm font-body font-medium transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-black text-white mb-6 text-[10px] uppercase tracking-[0.2em] opacity-50">Expertise</h4>
            <ul className="space-y-3">
              {['Academic Research', 'Business Strategy', 'Data Analysis', 'Custom Software', 'Technical Training'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-white/70 hover:text-white text-sm font-body font-medium transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-black text-white mb-6 text-[10px] uppercase tracking-[0.2em] opacity-50">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm font-body">
                <MapPin size={16} className="text-white shrink-0 mt-0.5" />
                Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm font-body">
                <Mail size={16} className="text-white shrink-0" />
                <a href="mailto:hello@citylightrt.com" className="hover:text-white transition-colors">
                  hello@citylightrt.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm font-body">
                <Phone size={16} className="text-white shrink-0" />
                <a href="tel:+234000000000" className="hover:text-white transition-colors">
                  +234 000 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body uppercase tracking-widest">
            © {year} Citylight Research and Technologies.
          </p>
          <div className="flex gap-8">
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}