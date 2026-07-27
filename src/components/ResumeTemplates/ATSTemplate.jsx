import React from 'react';

export default function ATSTemplate({ data }) {
  const { personalInfo, experience, education, skills, projects, certifications } = data;

  return (
    <div className="p-8 bg-white text-black font-serif text-sm leading-normal max-w-4xl mx-auto border border-gray-300">
      {/* Name & Contact */}
      <div className="text-center border-b border-black pb-3 mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-wide">{personalInfo.fullName || "YOUR NAME"}</h1>
        <p className="text-sm italic">{personalInfo.jobTitle}</p>
        <p className="text-xs mt-1">
          {[personalInfo.email, personalInfo.phone, personalInfo.location, personalInfo.website].filter(Boolean).join(" | ")}
        </p>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black mb-1">SUMMARY</h2>
          <p className="text-xs">{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black mb-2">PROFESSIONAL EXPERIENCE</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between font-bold text-xs">
                <span>{exp.position} — {exp.company}</span>
                <span>{exp.startDate} – {exp.endDate}</span>
              </div>
              <p className="text-xs mt-0.5">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black mb-2">PROJECTS</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2">
              <div className="flex justify-between font-bold text-xs">
                <span>{proj.name}</span>
                {proj.technologies && <span className="italic font-normal">{proj.technologies}</span>}
              </div>
              <p className="text-xs">{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black mb-2">EDUCATION</h2>
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between text-xs mb-1">
              <div>
                <span className="font-bold">{edu.institution}</span>, {edu.degree}
              </div>
              <span>{edu.startDate} – {edu.endDate} {edu.cgpa ? `(CGPA: ${edu.cgpa})` : ''}</span>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black mb-1">TECHNICAL SKILLS</h2>
          <div className="text-xs space-y-1">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <span className="font-bold">{skillGroup.category}:</span> {skillGroup.items?.join(', ')}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
