import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const heroRef = useReveal();
  const formRef = useReveal();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // In production, connect to your backend or email service
    setSent(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-800/8 rounded-full blur-3xl" />
        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-tag justify-center"><span className="w-2 h-2 bg-primary-400 rounded-full"/>Contact Us</div>
          <h1 className="font-display text-5xl lg:text-6xl font-black text-white mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-gray-400 font-body text-xl max-w-2xl mx-auto">
            Have a project in mind? Need a research partner? Ready to train your team? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={formRef} className="reveal grid lg:grid-cols-5 gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">Get in Touch</h2>
              <p className="text-gray-400 font-body leading-relaxed">
                Fill out the form and our team will respond within 24 hours. Or reach us directly using the details below.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'hello@citylightrt.com', href: 'mailto:hello@citylightrt.com' },
                { icon: Phone, label: 'Phone', value: '+234 000 000 0000', href: 'tel:+234000000000' },
                { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: null },
                { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9am – 6pm WAT', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary-900/50 border border-primary-800 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-mono uppercase tracking-wide mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-gray-200 font-body hover:text-primary-400 transition-colors">{value}</a>
                    ) : (
                      <span className="text-gray-200 font-body">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Services quick list */}
            <div className="card-dark">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={16} className="text-primary-400" />
                <span className="font-display font-semibold text-white text-sm">What can we help with?</span>
              </div>
              {['Academic Research', 'Business Research', 'Data Analysis', 'Software Development', 'Training & Education', 'Consultancy'].map(s => (
                <div key={s} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                  <CheckCircle2 size={12} className="text-primary-500" />
                  <span className="text-gray-400 text-sm font-body">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="card-dark text-center py-16">
                <div className="w-16 h-16 bg-primary-900/50 border border-primary-700 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-primary-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Message Received!</h3>
                <p className="text-gray-400 font-body">
                  Thank you for reaching out. We'll review your enquiry and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark space-y-5">
                <h3 className="font-display text-xl font-bold text-white mb-2">Send Us a Message</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-mono uppercase tracking-wide mb-2">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-gray-600 focus:outline-none focus:border-primary-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-mono uppercase tracking-wide mb-2">Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-gray-600 focus:outline-none focus:border-primary-600 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-mono uppercase tracking-wide mb-2">Organisation / Institution</label>
                  <input name="org" value={form.org} onChange={handleChange}
                    placeholder="Where do you work or study?"
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-gray-600 focus:outline-none focus:border-primary-600 transition-colors" />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-mono uppercase tracking-wide mb-2">Service of Interest *</label>
                  <select name="service" required value={form.service} onChange={handleChange}
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-primary-600 transition-colors">
                    <option value="" disabled>Select a service...</option>
                    <option>Academic Research</option>
                    <option>Business Research</option>
                    <option>Data Analysis & AI</option>
                    <option>Software Development</option>
                    <option>Training & Education</option>
                    <option>Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-mono uppercase tracking-wide mb-2">Your Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-gray-600 focus:outline-none focus:border-primary-600 transition-colors resize-none" />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
