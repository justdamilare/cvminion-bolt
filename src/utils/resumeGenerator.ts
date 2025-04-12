import { Profile } from '../types/profile';
import { Application } from '../types/application';

interface ResumeScore {
  score: number;
  matches: string[];
  missing: string[];
}

export const analyzeJobDescription = (jobDescription: string): string[] => {
  // Extract key terms from job description
  const terms = jobDescription.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(term => term.length > 2);

  // Common technical terms and skills
  const keywords = new Set([
    ...terms.filter(term => 
      /^(react|node|javascript|typescript|python|java|sql|aws|azure|docker|kubernetes|agile|scrum)$/i.test(term)
    )
  ]);

  return Array.from(keywords);
};

export const scoreProfile = (profile: Profile, keywords: string[]): ResumeScore => {
  const profileTerms = new Set([
    ...profile.skills.map(s => s.name.toLowerCase()),
    ...profile.experience.flatMap(e => [
      e.position.toLowerCase(),
      e.description.toLowerCase(),
      ...e.highlights.map(h => h.toLowerCase())
    ].join(' ').split(/\s+/))
  ]);

  const matches = keywords.filter(keyword => 
    Array.from(profileTerms).some(term => term.includes(keyword))
  );

  const missing = keywords.filter(keyword => !matches.includes(keyword));

  return {
    score: Math.round((matches.length / keywords.length) * 100),
    matches,
    missing
  };
};

export const generateTailoredResume = (
  profile: Profile,
  application: Application
): string => {
  const keywords = analyzeJobDescription(application.jobDescription);
  const { matches } = scoreProfile(profile, keywords);

  // Prioritize matching experiences
  const sortedExperience = [...profile.experience].sort((a, b) => {
    const aMatches = matches.filter(keyword => 
      a.description.toLowerCase().includes(keyword) ||
      a.highlights.some(h => h.toLowerCase().includes(keyword))
    ).length;
    
    const bMatches = matches.filter(keyword => 
      b.description.toLowerCase().includes(keyword) ||
      b.highlights.some(h => h.toLowerCase().includes(keyword))
    ).length;

    return bMatches - aMatches;
  });

  // Generate resume content
  return `
${profile.fullName}
${profile.title}

${profile.email} | ${profile.phone} | ${profile.location}
${profile.website ? `Website: ${profile.website}` : ''}
${profile.linkedin ? `LinkedIn: ${profile.linkedin}` : ''}
${profile.github ? `GitHub: ${profile.github}` : ''}

PROFESSIONAL SUMMARY
${profile.summary}

EXPERIENCE
${sortedExperience.map(exp => `
${exp.position}
${exp.company}
${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - ${exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Present'}

${exp.description}

Key Achievements:
${exp.highlights.map(h => `• ${h}`).join('\n')}
`).join('\n')}

EDUCATION
${profile.education.map(edu => `
${edu.degree} in ${edu.field}
${edu.school}
${new Date(edu.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - ${edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Present'}
${edu.description ? `\n${edu.description}` : ''}
`).join('\n')}

SKILLS
${profile.skills.map(skill => `${skill.name} (${skill.level})`).join(' • ')}
`.trim();
};