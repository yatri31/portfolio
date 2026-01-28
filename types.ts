
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
}

export interface Achievement {
  id: string;
  title: string;
  provider: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Web' | 'AI/ML' | 'Core';
}

// Fix: Added missing period property to ProjectItem interface to match usage in constants.tsx and App.tsx
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  period: string;
}