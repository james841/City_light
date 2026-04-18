import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, Send } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface border-t border-white/5">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-900/60 via-primary-800/40 to-primary-900/60 border-b border-primary-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
              Ready to bring your idea to life?
            </h3>
            <p className="text-gray-400 font-body">
              Let's build something meaningful together.
            </p>
          </div>
          <Link to="/contact" className="btn-primary px-8 py-3.5 text-base whitespace-nowrap">
            Start a Project
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-gray-400 font-body text-sm leading-relaxed mt-4 mb-6">
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
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-600 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(l => (
                <li key={l}>
                  <Link to={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 text-sm font-body transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {['Academic Research', 'Business Research', 'Data Analysis', 'Software Development', 'Training & Education'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 hover:text-primary-400 text-sm font-body transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm font-body">
                <MapPin size={16} className="text-primary-400 mt-0.5 shrink-0" />
                Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-body">
                <Mail size={16} className="text-primary-400 shrink-0" />
                <a href="mailto:hello@citylightrt.com" className="hover:text-primary-400 transition-colors">
                  hello@citylightrt.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-body">
                <Phone size={16} className="text-primary-400 shrink-0" />
                <a href="tel:+234000000000" className="hover:text-primary-400 transition-colors">
                  +234 000 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-body">
            © {year} Citylight Research and Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-sm font-body cursor-pointer hover:text-gray-300 transition-colors">Privacy Policy</span>
            <span className="text-gray-500 text-sm font-body cursor-pointer hover:text-gray-300 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
