import React from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      title: "SmartHire - Resume Matcher & Career Engine",
      category: "AI / Machine Learning",
      description: "An automated candidate evaluation system built with Python, NLP TF-IDF vectorizers, BERT embeddings, and Scikit-Learn classifiers for scoring resume relevance.",
      tags: ["Python", "NLP", "Scikit-Learn", "BERT", "Streamlit"],
      github: "https://github.com/Chetanreddysai",
      featured: true
    },
    {
      title: "Interactive ATS Resume Builder & Portfolio",
      category: "Web Application",
      description: "A dual-mode developer portfolio and live ATS resume creation suite with real-time score optimization, live template switching, and print PDF export.",
      tags: ["React 19", "Vite", "Tailwind CSS", "Lucide Icons"],
      github: "https://github.com/Chetanreddysai/Portfolio-website",
      featured: true
    },
    {
      title: "Aapda Mitra - Rescuer Emergency Dashboard",
      category: "Full Stack Web App",
      description: "Emergency relief and rescue routing web application with live Geolocation tracking, video status uploads, and real-time alert dispatches.",
      tags: ["JavaScript", "HTML5", "REST API", "Leaflet Maps"],
      github: "https://github.com/Chetanreddysai",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 border-t border-slate-850 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <FolderGit2 className="w-6 h-6 text-cyan-400" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((proj, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                  {proj.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mt-3 mb-2">{proj.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{proj.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((t, i) => (
                    <span key={i} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
