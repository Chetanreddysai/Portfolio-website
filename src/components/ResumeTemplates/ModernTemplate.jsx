import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

export default function ModernTemplate({ data }) {
  const { personalInfo, experience, education, skills, projects, certifications } = data;

  return (
    <div className="p-8 bg-white text-slate-800 font-sans text-sm leading-relaxed max-w-4xl mx-auto shadow-xl rounded-lg">
      {/* Header */}
      <header className="border-b-2 border-indigo-600 pb-6 mb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{personalInfo.fullName || "Your Name"}</h1>
        <p className="text-lg font-semibold text-indigo-600 mt-1">{personalInfo.jobTitle || "Job Title"}</p>
        
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-600">
          {personalInfo.email && (
            <span className="flex items-center gap-1.5"><Mail size={14} className="text-indigo-600"/>{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-indigo-600"/>{personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-indigo-600"/>{personalInfo.location}</span>
          )}
          {personalInfo.website && (
            <span className="flex items-center gap-1.5"><Globe size={14} className="text-indigo-600"/>{personalInfo.website}</span>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 border-b border-indigo-100 pb-1">Professional Summary</h2>
          <p className="text-slate-700 text-xs leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3 border-b border-indigo-100 pb-1">Work & Leadership Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 text-sm">{exp.position}</h3>
                  <span className="text-xs font-medium text-slate-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className="text-xs font-semibold text-indigo-600 mb-1">{exp.company}</div>
                <p className="text-xs text-slate-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3 border-b border-indigo-100 pb-1">Key Projects</h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 text-xs">{proj.name}</h3>
                  {proj.technologies && (
                    <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{proj.technologies}</span>
                  )}
                </div>
                <p className="text-xs text-slate-600 mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Skills Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Education */}
        {education && education.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 border-b border-indigo-100 pb-1">Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="font-bold text-slate-900 text-xs">{edu.degree}</div>
                  <div className="text-xs text-indigo-600">{edu.institution}</div>
                  <div className="text-[11px] text-slate-500">{edu.startDate} - {edu.endDate} {edu.cgpa ? `| CGPA: ${edu.cgpa}` : ''}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 border-b border-indigo-100 pb-1">Skills</h2>
            <div className="space-y-2">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <span className="text-[11px] font-bold text-slate-700">{skillGroup.category}: </span>
                  <span className="text-[11px] text-slate-600">{skillGroup.items?.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2 border-b border-indigo-100 pb-1">Certifications</h2>
          <div className="flex flex-wrap gap-4 text-xs">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
                <span className="font-semibold text-slate-800">{cert.name}</span> — <span className="text-indigo-600">{cert.issuer} ({cert.year})</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
