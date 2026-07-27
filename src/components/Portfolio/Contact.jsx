import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-white">Let's Connect & Collaborate</h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Whether you have a question about my AI/ML projects, want to build an web application together, or discuss opportunities — feel free to send a message!
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800">
                  <Mail size={18} />
                </div>
                <span>chetanreddysai@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800">
                  <MapPin size={18} />
                </div>
                <span>VIT Campus, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Chetanreddysai"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass-card hover:text-cyan-400 border border-slate-800 text-slate-300 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/chetanreddysai"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass-card hover:text-cyan-400 border border-slate-800 text-slate-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:border-cyan-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:border-cyan-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Hi Chetan, I'd like to discuss a project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-100 focus:border-cyan-500 outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
