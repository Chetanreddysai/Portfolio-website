import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Portfolio/Hero';
import Projects from './components/Portfolio/Projects';
import Skills from './components/Portfolio/Skills';
import Contact from './components/Portfolio/Contact';

import ResumeForm from './components/ResumeBuilder/ResumeForm';
import ATSScoreGauge from './components/ResumeBuilder/ATSScoreGauge';
import ModernTemplate from './components/ResumeTemplates/ModernTemplate';
import ATSTemplate from './components/ResumeTemplates/ATSTemplate';
import { defaultResumeData } from './data/sampleResume';

export default function App() {
  const [activeMode, setActiveMode] = useState('portfolio'); // 'portfolio' | 'builder'
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [template, setTemplate] = useState('modern'); // 'modern' | 'ats'

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onPrint={handlePrint}
        template={template}
        setTemplate={setTemplate}
      />

      <main className="flex-1">
        {activeMode === 'portfolio' ? (
          <div>
            <Hero onSwitchToBuilder={() => setActiveMode('builder')} />
            <Projects />
            <Skills />
            <Contact />
          </div>
        ) : (
          <div className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div>
                <h1 className="font-heading text-xl font-bold text-white">Live ATS Resume Builder</h1>
                <p className="text-xs text-slate-400">Edit fields on the left and see the real-time ATS preview on the right.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Template:</span>
                <button
                  onClick={() => setTemplate('modern')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                    template === 'modern' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Modern Tech
                </button>
                <button
                  onClick={() => setTemplate('ats')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                    template === 'ats' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  ATS Classic
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Form & ATS Score */}
              <div className="lg:col-span-5 space-y-6 no-print">
                <ATSScoreGauge data={resumeData} />
                <ResumeForm data={resumeData} onChange={setResumeData} />
              </div>

              {/* Right Column: Live Printable Preview */}
              <div className="lg:col-span-7 sticky top-24">
                <div className="text-xs font-semibold text-slate-400 mb-2 flex justify-between items-center no-print">
                  <span>Live Preview (A4 Dimensions)</span>
                  <span>Auto-saved locally</span>
                </div>

                <div 
                  id="printable-resume" 
                  className="bg-slate-900 p-2 sm:p-4 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden"
                >
                  {template === 'modern' ? (
                    <ModernTemplate data={resumeData} />
                  ) : (
                    <ATSTemplate data={resumeData} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 no-print">
        <p>© 2026 K. Sai Chetan Reddy. Portfolio & ATS Resume Builder.</p>
      </footer>
    </div>
  );
}
