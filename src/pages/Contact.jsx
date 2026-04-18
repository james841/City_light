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

    // Check if environment variables are set
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
      let errorMessage = 'Failed to send message. ';

      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please check your EmailJS configuration and try again.';
      }

      alert(errorMessage);
      setFormState('idle');
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(34,197,94,0.08)_0%,_transparent_50%)]" />
        
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              Direct Connection
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              Let’s Solve <span className="text-primary-400 italic">Complex</span> Problems.
            </h1>
            <p className="text-gray-400 font-body text-xl leading-relaxed">
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
              <h3 className="font-display text-2xl font-black text-white mb-8 uppercase tracking-tight">Our Channels</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email Us', val: 'info@citylightresearch.com', sub: 'We respond within 24 hours.' },
                  { icon: Phone, label: 'Call Support', val: '+234 (0) XXX XXX XXXX', sub: 'Mon-Fri, 9am - 5pm.' },
                  { icon: MapPin, label: 'Visit HQ', val: 'Lagos, Nigeria', sub: 'Innovation Hub, Victoria Island.' },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary-500/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-black transition-all">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{item.label}</div>
                      <div className="text-white font-bold text-lg mb-1">{item.val}</div>
                      <div className="text-gray-500 text-sm font-body">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Status Card */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary-600 to-emerald-500 text-black">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="animate-spin-slow" />
                <span className="font-black uppercase tracking-widest text-[10px]">Live Status</span>
              </div>
              <h4 className="font-display text-2xl font-black mb-2">Systems Operational.</h4>
              <p className="font-body font-bold text-sm opacity-80 leading-relaxed">
                Our research and dev teams are currently active. Current inquiry response time: <span className="underline">2 hours.</span>
              </p>
            </div>
          </div>

          {/* ── RIGHT: CONTACT FORM ── */}
          <div className="lg:col-span-7">
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
              <div className="bg-[#0A0A0A] rounded-[2.4rem] p-8 lg:p-12">
                {formState === 'success' ? (
                  <motion.div
                    className="py-20 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-8 text-black shadow-[0_0_40px_rgba(34,197,94,0.4)]">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="font-display text-3xl font-black text-white mb-4">🎉 Message Received!</h2>
                    <p className="text-gray-400 font-body mb-8">Thank you! An expert from Citylight will reach out to you soon.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="text-primary-400 font-black text-sm uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Subject / Interest</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-gray-400 focus:outline-none focus:border-primary-500/50 transition-all appearance-none"
                      >
                        <option className="bg-[#0A0A0A]">Software Development</option>
                        <option className="bg-[#0A0A0A]">Academic Research</option>
                        <option className="bg-[#0A0A0A]">Data Analysis</option>
                        <option className="bg-[#0A0A0A]">Professional Training</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Message Detail</label>
                      <textarea
                        required
                        rows="5"
                        placeholder="Tell us about your project requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-gray-700 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full flex items-center justify-center gap-3 py-5 bg-primary-500 hover:bg-primary-400 disabled:bg-gray-800 disabled:text-gray-600 text-black font-black rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)]"
                    >
                      {formState === 'sending' ? (
                        'TRANSMITTING...'
                      ) : (
                        <>SEND MESSAGE <Send size={18} /></>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-gray-600 font-body uppercase tracking-tighter">
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