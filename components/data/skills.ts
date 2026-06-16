import type { Skill } from "../../types";

export const skills: Skill[] = [
  // Linux & Production Support
  {
    name: "Linux Administration",
    category: "Linux & Production Support",
    proficiency: 92,
  },
  {
    name: "Production Support (L2/L3)",
    category: "Linux & Production Support",
    proficiency: 95,
  },
  {
    name: "Incident Management",
    category: "Linux & Production Support",
    proficiency: 90,
  },
  {
    name: "Root Cause Analysis",
    category: "Linux & Production Support",
    proficiency: 92,
  },
  {
    name: "Log Analysis",
    category: "Linux & Production Support",
    proficiency: 90,
  },

  // Monitoring & Observability
  {
    name: "Grafana",
    category: "Monitoring & Observability",
    proficiency: 88,
  },
  {
    name: "Prometheus",
    category: "Monitoring & Observability",
    proficiency: 85,
  },
  {
    name: "Datadog",
    category: "Monitoring & Observability",
    proficiency: 90,
  },
  {
    name: "Nagios",
    category: "Monitoring & Observability",
    proficiency: 85,
  },
  {
    name: "Kibana",
    category: "Monitoring & Observability",
    proficiency: 88,
  },
  {
    name: "Big Panda",
    category: "Monitoring & Observability",
    proficiency: 80,
  },

  // Automation & Scripting
  {
    name: "Bash/Shell Scripting",
    category: "Automation & Scripting",
    proficiency: 90,
  },

  {
    name: "Cron Jobs",
    category: "Automation & Scripting",
    proficiency: 85,
  },

  {
    name: "Jenkins",
    category: "DevOps & CI/CD",
    proficiency: 85,
  },
  {
    name: "CI/CD Pipelines",
    category: "DevOps & CI/CD",
    proficiency: 82,
  },
  {
    name: "Release Validation",
    category: "DevOps & CI/CD",
    proficiency: 88,
  },
  {
    name: "Deployment Support",
    category: "DevOps & CI/CD",
    proficiency: 90,
  },

  {
    name: "AWS",
    category: "Cloud & Infrastructure",
    proficiency: 70,
  },
  {
    name: "Docker",
    category: "Cloud & Infrastructure",
    proficiency: 75,
  },
  {
    name: "Infrastructure Monitoring",
    category: "Cloud & Infrastructure",
    proficiency: 85,
  },
  {
    name: "Java Microservices",
    category: "Application Support",
    proficiency: 80,
  },

  {
    name: "Java Debugging",
    category: "Application Support",
    proficiency: 75,
  },

  {
    name: "Git",
    category: "Version Control",
    proficiency: 82,
  },
  {
    name: "GitHub",
    category: "Version Control",
    proficiency: 80,
  },

  // Reliability Engineering
  {
    name: "SRE Practices",
    category: "Reliability Engineering",
    proficiency: 85,
  },
  {
    name: "Service Reliability",
    category: "Reliability Engineering",
    proficiency: 88,
  },
  {
    name: "Incident Response",
    category: "Reliability Engineering",
    proficiency: 90,
  },
  {
    name: "Operational Excellence",
    category: "Reliability Engineering",
    proficiency: 88,
  },
  {
    name: "Migration Support",
    category: "Reliability Engineering",
    proficiency: 90,
  },
];

// Group skills by category for easier rendering
export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<string, Skill[]>,
);
