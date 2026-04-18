import React from 'react';

export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: { outer: 28, inner: 18, text: 'text-lg' },
    md: { outer: 36, inner: 22, text: 'text-xl' },
    lg: { outer: 48, inner: 30, text: 'text-2xl' },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <svg width={s.outer} height={s.outer} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#22c55e" strokeWidth="2" />
        <circle cx="24" cy="24" r="14" fill="#162018" />
        {/* Light rays */}
        <line x1="24" y1="2" x2="24" y2="8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="40" x2="24" y2="46" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        <line x1="2" y1="24" x2="8" y2="24" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        <line x1="40" y1="24" x2="46" y2="24" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
        <line x1="7.5" y1="7.5" x2="11.7" y2="11.7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
        <line x1="36.3" y1="36.3" x2="40.5" y2="40.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
        <line x1="40.5" y1="7.5" x2="36.3" y2="11.7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
        <line x1="11.7" y1="36.3" x2="7.5" y2="40.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
        {/* Inner light bulb shape */}
        <circle cx="24" cy="22" r="6" fill="#22c55e" opacity="0.9"/>
        <rect x="21" y="28" width="6" height="2" rx="1" fill="#22c55e" opacity="0.7"/>
        <rect x="21" y="31" width="6" height="1.5" rx="0.75" fill="#22c55e" opacity="0.5"/>
      </svg>
      <div>
        <div className={`font-display font-bold ${s.text} leading-tight text-white`}>
          Citylight<span className="text-primary-400">.</span>
        </div>
        <div className="text-xs text-primary-600 font-mono tracking-wider -mt-0.5">RESEARCH & TECH</div>
      </div>
    </div>
  );
}
