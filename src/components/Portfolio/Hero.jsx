import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

export default function Hero({ onSwitchToBuilder }) {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>AI/ML & Full Stack Developer</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]">
          Building Intelligent Systems & <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Modern Web Experiences
          </span>
        </h1>

        <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          Hi, I'm <strong className="text-white">K. Sai Chetan Reddy</strong>. I specialize in Machine Learning algorithms, NLP resume screeners, real-time alert systems, and modern React web applications.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <button
            onClick={onSwitchToBuilder}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch ATS Resume Builder</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://github.com/Chetanreddysai"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 flex items-center gap-2 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub</span>
          </a>
        </div>

        {/* Floating Metrics Badge */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="font-heading font-extrabold text-2xl text-cyan-400">94.2%</div>
            <div className="text-xs text-slate-400 font-medium">ATS Match Precision</div>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="font-heading font-extrabold text-2xl text-indigo-400">10+</div>
            <div className="text-xs text-slate-400 font-medium">Completed Projects</div>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="font-heading font-extrabold text-2xl text-emerald-400">React 19</div>
            <div className="text-xs text-slate-400 font-medium">Modern Tech Stack</div>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-800">
            <div className="font-heading font-extrabold text-2xl text-sky-400">VIT</div>
            <div className="text-xs text-slate-400 font-medium">CSE (AI & ML)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
