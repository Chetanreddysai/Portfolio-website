import React from 'react';
import { Cpu, Code2, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Data Science",
      icon: Cpu,
      skills: ["Python", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "NLP / TF-IDF"]
    },
    {
      title: "Web Development",
      icon: Code2,
      skills: ["React.js 19", "Vite", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Databases & Backend",
      icon: Database,
      skills: ["Node.js", "Express", "Oracle DB", "MySQL", "PL/SQL"]
    },
    {
      title: "DevOps & Cloud",
      icon: Wrench,
      skills: ["Git & GitHub", "GitHub Actions CI/CD", "Docker", "VS Code", "Postman", "AWS / Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-16 border-t border-slate-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-200 text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-slate-900 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-800 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
