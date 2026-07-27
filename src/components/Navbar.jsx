import React from 'react';
import { Sparkles, Layout, Printer, Download, Github, Code2 } from 'lucide-react';

export default function Navbar({ activeMode, setActiveMode, onPrint, template, setTemplate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => setActiveMode('portfolio')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Code2 size={20} />
          </div>
          <div>
            <span className="font-heading text-base font-extrabold text-white tracking-tight">Chetan Reddy</span>
            <span className="text-[10px] block font-mono text-cyan-400 font-medium">AI & Web Developer</span>
          </div>
        </div>

        {/* Mode Switcher Pills */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveMode('portfolio')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeMode === 'portfolio'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layout size={14} />
            <span className="hidden sm:inline">Portfolio</span>
          </button>
          <button
            onClick={() => setActiveMode('builder')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeMode === 'builder'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles size={14} />
            <span>Resume Builder</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          {activeMode === 'builder' ? (
            <>
              {/* Template Picker */}
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="bg-slate-900 text-slate-200 border border-slate-800 rounded-lg text-xs px-2.5 py-1.5 font-medium outline-none"
              >
                <option value="modern">Modern Tech</option>
                <option value="ats">ATS Classic</option>
              </select>

              <button
                onClick={onPrint}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all no-print"
              >
                <Printer size={14} />
                <span className="hidden sm:inline">Print / Download PDF</span>
              </button>
            </>
          ) : (
            <a
              href="https://github.com/Chetanreddysai/Portfolio-website"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg glass-card hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-800 flex items-center gap-1.5 transition-colors"
            >
              <Github size={15} />
              <span className="hidden sm:inline">GitHub Repo</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
