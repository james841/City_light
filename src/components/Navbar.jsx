import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#722F37] border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="hover:opacity-90 transition-opacity brightness-0 invert">
            {/* Logo is inverted to white to pop against the wine background */}
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs font-black uppercase tracking-widest transition-all duration-300 hover:text-white/70 
                  ${location.pathname === l.to ? 'text-white border-b-2 border-white pb-1' : 'text-white/60'}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="bg-white text-[#722F37] text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-stone-100 transition-all shadow-xl">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white hover:text-white/80 p-2 transition-colors">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#722F37] border-b border-white/10 px-6 pb-8 pt-2 shadow-2xl">
          {navLinks.map(l => (
            <Link 
              key={l.to} 
              to={l.to}
              className={`block py-4 border-b border-white/5 font-display font-black text-sm uppercase tracking-widest transition-colors
                ${location.pathname === l.to ? 'text-white' : 'text-white/50'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="flex bg-white text-[#722F37] text-[10px] font-black uppercase tracking-widest py-4 mt-6 justify-center rounded-xl shadow-lg">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}