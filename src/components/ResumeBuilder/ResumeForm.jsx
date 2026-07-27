import React from 'react';
import { Plus, Trash2, RotateCcw, Sparkles } from 'lucide-react';
import { defaultResumeData } from '../../data/sampleResume';

export default function ResumeForm({ data, onChange }) {
  const updatePersonalInfo = (field, value) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    });
  };

  const handleLoadSample = () => {
    onChange(defaultResumeData);
  };

  // Experience handlers
  const addExperience = () => {
    const newExp = { id: Date.now().toString(), company: "", position: "", startDate: "", endDate: "", description: "" };
    onChange({ ...data, experience: [...(data.experience || []), newExp] });
  };
  const updateExperience = (id, field, val) => {
    onChange({
      ...data,
      experience: data.experience.map(e => e.id === id ? { ...e, [field]: val } : e)
    });
  };
  const removeExperience = (id) => {
    onChange({ ...data, experience: data.experience.filter(e => e.id !== id) });
  };

  // Project handlers
  const addProject = () => {
    const newProj = { id: Date.now().toString(), name: "", technologies: "", description: "", link: "" };
    onChange({ ...data, projects: [...(data.projects || []), newProj] });
  };
  const updateProject = (id, field, val) => {
    onChange({
      ...data,
      projects: data.projects.map(p => p.id === id ? { ...p, [field]: val } : p)
    });
  };
  const removeProject = (id) => {
    onChange({ ...data, projects: data.projects.filter(p => p.id !== id) });
  };

  // Education handlers
  const addEducation = () => {
    const newEdu = { id: Date.now().toString(), institution: "", degree: "", startDate: "", endDate: "", cgpa: "" };
    onChange({ ...data, education: [...(data.education || []), newEdu] });
  };
  const updateEducation = (id, field, val) => {
    onChange({
      ...data,
      education: data.education.map(e => e.id === id ? { ...e, [field]: val } : e)
    });
  };
  const removeEducation = (id) => {
    onChange({ ...data, education: data.education.filter(e => e.id !== id) });
  };

  return (
    <div className="space-y-6 text-sm text-slate-200">
      {/* Header & Quick Action Buttons */}
      <div className="flex items-center justify-between bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        <h2 className="font-heading text-lg font-bold text-white flex items-center gap-2">
          <span>Edit Resume Content</span>
        </h2>
        <button
          onClick={handleLoadSample}
          className="px-3 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 text-xs font-semibold border border-cyan-500/30 flex items-center gap-1.5 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Load Sample Preset</span>
        </button>
      </div>

      {/* Personal Info */}
      <section className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider">1. Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 outline-none"
              value={data.personalInfo.fullName || ""}
              onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Target Job Title</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 outline-none"
              value={data.personalInfo.jobTitle || ""}
              onChange={(e) => updatePersonalInfo("jobTitle", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 outline-none"
              value={data.personalInfo.email || ""}
              onChange={(e) => updatePersonalInfo("email", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 outline-none"
              value={data.personalInfo.phone || ""}
              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Location (City, Country)</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 outline-none"
              value={data.personalInfo.location || ""}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">GitHub / Portfolio URL</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:border-cyan-500 outline-none"
              value={data.personalInfo.github || ""}
              onChange={(e) => updatePersonalInfo("github", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Professional Summary</label>
          <textarea
            rows="3"
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-100 focus:border-cyan-500 outline-none resize-none"
            value={data.personalInfo.summary || ""}
            onChange={(e) => updatePersonalInfo("summary", e.target.value)}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider">2. Work Experience</h3>
          <button onClick={addExperience} className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
            <Plus size={14} /> Add Role
          </button>
        </div>
        {data.experience?.map((exp) => (
          <div key={exp.id} className="p-4 bg-slate-950/70 rounded-lg border border-slate-850 relative space-y-3">
            <button onClick={() => removeExperience(exp.id)} className="absolute top-3 right-3 text-slate-500 hover:text-rose-400">
              <Trash2 size={14} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-6">
              <input
                type="text"
                placeholder="Job Title / Role"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
              />
              <input
                type="text"
                placeholder="Company / Organization"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
              />
              <input
                type="text"
                placeholder="Start Date (e.g. Jan 2024)"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
              />
              <input
                type="text"
                placeholder="End Date (or Present)"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
              />
            </div>
            <textarea
              rows="2"
              placeholder="Key achievements and technologies used..."
              className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-100 resize-none"
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
            />
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider">3. Technical Projects</h3>
          <button onClick={addProject} className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
            <Plus size={14} /> Add Project
          </button>
        </div>
        {data.projects?.map((proj) => (
          <div key={proj.id} className="p-4 bg-slate-950/70 rounded-lg border border-slate-850 relative space-y-3">
            <button onClick={() => removeProject(proj.id)} className="absolute top-3 right-3 text-slate-500 hover:text-rose-400">
              <Trash2 size={14} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-6">
              <input
                type="text"
                placeholder="Project Name"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={proj.name}
                onChange={(e) => updateProject(proj.id, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Tech Stack (e.g. Python, React)"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={proj.technologies}
                onChange={(e) => updateProject(proj.id, "technologies", e.target.value)}
              />
            </div>
            <textarea
              rows="2"
              placeholder="Short description of your project..."
              className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-100 resize-none"
              value={proj.description}
              onChange={(e) => updateProject(proj.id, "description", e.target.value)}
            />
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider">4. Education</h3>
          <button onClick={addEducation} className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
            <Plus size={14} /> Add Education
          </button>
        </div>
        {data.education?.map((edu) => (
          <div key={edu.id} className="p-4 bg-slate-950/70 rounded-lg border border-slate-850 relative space-y-3">
            <button onClick={() => removeEducation(edu.id)} className="absolute top-3 right-3 text-slate-500 hover:text-rose-400">
              <Trash2 size={14} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-6">
              <input
                type="text"
                placeholder="Degree / Specialization"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
              />
              <input
                type="text"
                placeholder="Institution / University"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
              />
              <input
                type="text"
                placeholder="Start & End Year"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
              />
              <input
                type="text"
                placeholder="CGPA / Grade (optional)"
                className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100"
                value={edu.cgpa}
                onChange={(e) => updateEducation(edu.id, "cgpa", e.target.value)}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
