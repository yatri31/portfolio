
import { ExperienceItem, Achievement, Skill, ProjectItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp1',
    company: 'CSRBOX IBM SKILLSBUILD',
    role: 'Internship on Artificial Intelligence',
    period: '02/07/2025 - 16/07/2025'
  },
  {
    id: 'exp2',
    company: 'Sparks To Ideas',
    role: 'Web Designing Internship',
    period: '26/05/2025 - 26/06/2025'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'AI Course Completion and Internship Certificate',
    provider: 'Skill Dunia in association with E-Cell IIT Hyderabad'
  },
  {
    id: 'a2',
    title: 'Web Designing Internship Certificate',
    provider: 'Sparks To Ideas'
  },
  {
    id: 'a3',
    title: 'Advance Course (ML, IOT, Deep learning, Computer Vision) completion certificate',
    provider: 'Edunet Foundation - supported by SAP'
  },
  {
    id: 'a4',
    title: 'AI Internship Certificate',
    provider: 'CSRBOX'
  },
  {
    id: 'a5',
    title: 'Artificial Intelligence course completion Certificate',
    provider: 'IBM SKILLSBUILD'
  },
  {
    id: 'a6',
    title: 'Cloud Computing Fundamentals Certificate',
    provider: 'IBM SKILLSBUILD'
  },
  {
    id: 'a7',
    title: 'Certificate of Participation',
    provider: 'Code Unnati Innovation Marathon'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Prompt Engineering', category: 'AI/ML' },
  { name: 'C', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'Python', category: 'Programming' },
  { name: 'HTML', category: 'Web' },
  { name: 'CSS', category: 'Web' },
  { name: 'PHP', category: 'Web' },
  { name: 'JavaScript', category: 'Web' },
  { name: 'Artificial Intelligence', category: 'AI/ML' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Deep Learning', category: 'AI/ML' },
  { name: 'Computer Vision', category: 'AI/ML' },
  { name: 'Full stack development', category: 'Web' },
  { name: 'AI tools', category: 'AI/ML' },
  { name: 'Data structure and Algorithm', category: 'Core' },
  { name: 'IOT', category: 'Core' }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Car Price Prediction using ML',
    description: 'A sophisticated machine learning model designed to accurately predict automobile market values based on various performance and historical parameters.',
    techStack: ['Python', 'Machine Learning', 'Data Analysis'],
    period: 'Sep 2024 - Sep 2025'
  },
  {
    id: 'p2',
    title: 'MindEase_AI Chatbot',
    description: 'A specialized AI-powered companion providing mental health support through advanced conversational design and prompt engineering.',
    techStack: ['Prompt Engineering', 'AI/LLM', 'Mental Health Tech'],
    link: 'https://www.chatbase.co/chatbot-iframe/WJvQuTS0CdgoZO-PVjJf4',
    period: 'Jul 2025 - Jul 2025'
  },
  {
    id: 'p3',
    title: 'Culture and Heritage Website',
    description: 'An immersive web platform showcasing India\'s rich cultural heritage, traditions, and historical significance.',
    techStack: ['HTML', 'CSS', 'UI Design'],
    period: 'Mar 2025 - Apr 2025'
  },
  {
    id: 'p4',
    title: 'Balance Buzz',
    description: 'A mental health prediction app serving as a first step in encouraging individuals to understand their mental well-being and seek professional guidance through accessible self-assessment.',
    techStack: ['Web Development', 'Health Tech', 'Self-Assessment Tools'],
    period: 'Feb 2025 - Mar 2025'
  }
];

export const LANGUAGES = ['English', 'Gujarati', 'Hindi'];
