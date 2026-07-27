import React from 'react';
import { CheckCircle2, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function ATSScoreGauge({ data }) {
  const calculateATS = () => {
    let score = 0;
    const feedback = [];

    // Personal Info check (25 pts)
    const { personalInfo, experience, education, skills, projects } = data;
    if (personalInfo.fullName) score += 5;
    if (personalInfo.email) score += 5;
    if (personalInfo.phone) score += 5;
    if (personalInfo.location) score += 5;
    if (personalInfo.github || personalInfo.linkedin || personalInfo.website) score += 5;
    else feedback.push("Add GitHub or LinkedIn links for tech roles.");

    // Summary check (15 pts)
    if (personalInfo.summary && personalInfo.summary.length > 50) score += 15;
    else feedback.push("Professional summary should be at least 50 characters.");

    // Experience check (25 pts)
    if (experience && experience.length >= 1) {
      score += 15;
      const hasActionVerbs = experience.some(e => 
        /\b(built|designed|developed|deployed|engineered|led|integrated|architected|created|optimized)\b/i.test(e.description)
      );
      if (hasActionVerbs) score += 10;
      else feedback.push("Use strong action verbs (built, designed, engineered) in experience descriptions.");
    } else {
      feedback.push("Add at least 1 work or leadership experience.");
    }

    // Skills check (15 pts)
    const totalSkills = skills ? skills.reduce((acc, s) => acc + (s.items ? s.items.length : 0), 0) : 0;
    if (totalSkills >= 8) score += 15;
    else if (totalSkills >= 4) score += 8;
    else feedback.push("List at least 8 key technical skills across categories.");

    // Projects (10 pts)
    if (projects && projects.length >= 2) score += 10;
    else if (projects && projects.length === 1) score += 5;
    else feedback.push("Add 2 or more projects showcasing your tech stack.");

    // Education (10 pts)
    if (education && education.length >= 1) score += 10;
    else feedback.push("Add your degree and university details.");

    return { score: Math.min(100, score), feedback };
  };

  const { score, feedback } = calculateATS();

  const getScoreColor = (s) => {
    if (s >= 85) return "text-emerald-400 border-emerald-500 bg-emerald-500/10";
    if (s >= 65) return "text-amber-400 border-amber-500 bg-amber-500/10";
    return "text-rose-400 border-rose-500 bg-rose-500/10";
  };

  return (
    <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <h3 className="font-heading font-bold text-slate-200 text-base">ATS Compatibility Optimizer</h3>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-extrabold flex items-center gap-1.5 ${getScoreColor(score)}`}>
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{score}/100 ATS Score</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>

      {/* Feedback Checklist */}
      <div className="space-y-2 pt-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Optimization Suggestions ({feedback.length})</p>
        {feedback.length === 0 ? (
          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/50">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Excellent! Your resume passes key ATS screening checks with high keyword density and structure.</span>
          </div>
        ) : (
          <ul className="space-y-2">
            {feedback.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-amber-300 bg-amber-950/30 p-2 rounded border border-amber-900/40">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
