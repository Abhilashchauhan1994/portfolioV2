// Core data types for DevOps Portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  avatar?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  proficiency?: number; // 1-100
}

export type SkillCategory =
  | "Cloud Platforms"
  | "Container Orchestration"
  | "Infrastructure as Code"
  | "CI/CD"
  | "Monitoring & Observability"
  | "Programming Languages"
  | "Version Control"
  | "Security";

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  title: string;
  achievements: string[];
  technologies: string[];
  impact?: {
    metric: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export type ProjectCategory =
  | "Infrastructure"
  | "CI/CD"
  | "Kubernetes"
  | "Automation"
  | "Monitoring"
  | "Security"
  | "Platform Engineering";
