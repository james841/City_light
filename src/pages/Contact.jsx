import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Send, Phone, Mail, MapPin,
  Clock, CheckCircle2
} from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const heroRef = useReveal();
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Development',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');

    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID ||
        !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
        !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      alert('EmailJS configuration is missing. Please check your .env.local file.');
      setFormState('idle');
      return;
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'afolayanshem@gmail.com',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setFormState('success');
      setFormData({ name: '', email: '', subject: 'Software Development', message: '' });
    } catch (error) {
      alert('Failed to send message. Please check your connection.');
      setFormState('idle');
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(114,47,55,0.05)_0%,_transparent_50%)]" />
        
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#722F37]/5 border border-[#722F37]/10 text-[#722F37] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#722F37] animate-pulse" />
              Direct Connection
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Let’s Solve <span className="text-[#722F37] italic">Complex</span> Problems.
            </h1>
            <p className="text-slate-600 font-body text-xl leading-relaxed">
              Whether you need rigorous academic data or a scalable software ecosystem, our engineers and researchers are ready to deploy.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* ── LEFT: CONTACT INFO ── */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="font-display text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Our Channels</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email Us', val: 'info@citylightresearch.com', sub: 'We respond within 24 hours.' },
                  { icon: Phone, label: 'Call Support', val: '+234 (0) XXX XXX XXXX', sub: 'Mon-Fri, 9am - 5pm.' },
                  { icon: MapPin, label: 'Visit HQ', val: 'Lagos, Nigeria', sub: 'Innovation Hub, Victoria Island.' },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-6 p-6 rounded-2xl border border-slate-100 bg-stone-50 hover:border-[#722F37]/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-all shadow-sm">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</div>
                      <div className="text-slate-900 font-bold text-lg mb-1">{item.val}</div>
                      <div className="text-slate-500 text-sm font-body">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Status Card */}
            <div className="p-8 rounded-[2rem] bg-[#722F37] text-white shadow-2xl shadow-[#722F37]/20">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-white/80" />
                <span className="font-black uppercase tracking-widest text-[10px]">Live Status</span>
              </div>
              <h4 className="font-display text-2xl font-black mb-2">Systems Operational.</h4>
              <p className="font-body font-medium text-sm opacity-90 leading-relaxed">
                Our research and dev teams are currently active. Current inquiry response time: <span className="underline font-bold text-white">2 hours.</span>
              </p>
            </div>
          </div>

          {/* ── RIGHT: CONTACT FORM ── */}
          <div className="lg:col-span-7">
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-slate-100 to-transparent">
              <div className="bg-white border border-slate-100 rounded-[2.4rem] p-8 lg:p-12 shadow-sm">
                {formState === 'success' ? (
                  <motion.div
                    className="py-20 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 bg-[#722F37] rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-[#722F37]/30">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="font-display text-3xl font-black text-slate-900 mb-4">🎉 Message Received!</h2>
                    <p className="text-slate-600 font-body mb-8">Thank you! An expert from Citylight will reach out to you soon.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="text-[#722F37] font-black text-sm uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-stone-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:border-[#722F37] focus:bg-white transition-all placeholder:text-slate-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-stone-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:border-[#722F37] focus:bg-white transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Subject / Interest</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-stone-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-600 focus:outline-none focus:border-[#722F37] transition-all appearance-none cursor-pointer"
                      >
                        <option>Software Development</option>
                        <option>Academic Research</option>
                        <option>Data Analysis</option>
                        <option>Professional Training</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Message Detail</label>
                      <textarea
                        required
                        rows="5"
                        placeholder="Tell us about your project requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-stone-50 border border-slate-200 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:border-[#722F37] focus:bg-white transition-all placeholder:text-slate-300 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full flex items-center justify-center gap-3 py-5 bg-[#722F37] hover:bg-slate-900 disabled:bg-stone-200 disabled:text-stone-400 text-white font-black rounded-2xl transition-all shadow-xl shadow-[#722F37]/20"
                    >
                      {formState === 'sending' ? (
                        'TRANSMITTING...'
                      ) : (
                        <>SEND MESSAGE <Send size={18} /></>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-slate-400 font-body uppercase tracking-tighter">
                      By submitting, you agree to our data handling and privacy protocols.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}