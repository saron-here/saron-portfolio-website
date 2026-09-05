export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  shortDescription: string;
  fullOverview: string;
  problem: string;
  solution: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  visualType: 'powerbi' | 'ai' | 'finance' | 'vision' | 'health';
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  highlight?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialBadge: string;
  year?: string;
  category: 'AI & Data' | 'Finance' | 'Language' | 'Professional';
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  category: string;
}

export interface CursorState {
  x: number;
  y: number;
  text?: string;
  variant: 'default' | 'pointer' | 'project' | 'button' | 'hidden' | 'nav';
}
