import type { PersonalProject } from "../../types";

export const projects: PersonalProject[] = [
  {
    id: "proj-1",
    name: "Kubernetes Autopilot",
    description:
      "Automated Kubernetes cluster provisioning and lifecycle management platform",
    longDescription:
      "A comprehensive platform for automated Kubernetes cluster provisioning, upgrades, and lifecycle management across multiple cloud providers. Features include automated cert rotation, node scaling, and disaster recovery.",
    technologies: ["Kubernetes", "Go", "Terraform", "AWS", "Azure", "Helm"],
    category: "Kubernetes",
    githubUrl: "https://github.com/alexmorgan-devops/k8s-autopilot",
    highlights: [
      "Manages 50+ production Kubernetes clusters across AWS and Azure",
      "Automated zero-downtime cluster upgrades with rollback capability",
      "Built-in security scanning and compliance checks",
      "Custom operator pattern for cluster lifecycle management",
    ],
    metrics: [
      { label: "Clusters Managed", value: "50+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Time Saved", value: "200hrs/month" },
    ],
  },
  {
    id: "proj-2",
    name: "GitOps Pipeline Framework",
    description:
      "Declarative GitOps framework for multi-environment deployments",
    longDescription:
      "An opinionated GitOps framework built on ArgoCD and Terraform, enabling teams to manage infrastructure and applications declaratively through Git. Supports multi-tenancy and environment promotion workflows.",
    technologies: [
      "ArgoCD",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Helm",
      "Kustomize",
    ],
    category: "CI/CD",
    githubUrl: "https://github.com/alexmorgan-devops/gitops-framework",
    highlights: [
      "Enables declarative infrastructure and application management",
      "Automated environment promotion with approval gates",
      "Built-in secrets management with Sealed Secrets",
      "Comprehensive audit trail for all infrastructure changes",
    ],
    metrics: [
      { label: "Deployments/Day", value: "100+" },
      { label: "Teams Using", value: "15" },
      { label: "Deployment Success Rate", value: "99.7%" },
    ],
  },
  {
    id: "proj-3",
    name: "Cloud Cost Optimizer",
    description: "Automated cloud cost optimization and recommendation engine",
    longDescription:
      "A machine learning-powered tool that analyzes cloud resource usage patterns and provides actionable cost optimization recommendations. Supports AWS, Azure, and GCP with automated remediation capabilities.",
    technologies: ["Python", "AWS", "Azure", "GCP", "Terraform", "PostgreSQL"],
    category: "Automation",
    githubUrl: "https://github.com/alexmorgan-devops/cloud-cost-optimizer",
    highlights: [
      "Analyzes $2M+ in monthly cloud spend",
      "Identifies 30-40% cost reduction opportunities on average",
      "Automated right-sizing and reserved instance recommendations",
      "Real-time Slack notifications for cost anomalies",
    ],
    metrics: [
      { label: "Cost Savings", value: "$800K/year" },
      { label: "Resources Analyzed", value: "10K+" },
      { label: "Recommendations", value: "500+/month" },
    ],
  },
  {
    id: "proj-4",
    name: "Observability Stack",
    description:
      "Production-ready observability platform with metrics, logs, and traces",
    longDescription:
      "A comprehensive observability solution combining Prometheus, Grafana, Loki, and Jaeger. Features pre-configured dashboards, intelligent alerting, and automated anomaly detection.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Jaeger",
      "Kubernetes",
      "Python",
    ],
    category: "Monitoring",
    githubUrl: "https://github.com/alexmorgan-devops/observability-stack",
    highlights: [
      "Pre-built dashboards for common infrastructure patterns",
      "Intelligent alert routing and aggregation",
      "Distributed tracing for microservices",
      "Custom exporters for business metrics",
    ],
    metrics: [
      { label: "Metrics/Second", value: "1M+" },
      { label: "Services Monitored", value: "200+" },
      { label: "MTTR Reduction", value: "65%" },
    ],
  },
  {
    id: "proj-5",
    name: "Infrastructure as Code Library",
    description:
      "Reusable Terraform modules for enterprise cloud infrastructure",
    longDescription:
      "A collection of production-tested Terraform modules for common infrastructure patterns. Includes networking, security, databases, and Kubernetes with built-in best practices.",
    technologies: ["Terraform", "AWS", "Azure", "GCP", "Packer"],
    category: "Infrastructure",
    githubUrl: "https://github.com/alexmorgan-devops/terraform-modules",
    highlights: [
      "Over 50 reusable Terraform modules",
      "Automated testing with Terratest",
      "Comprehensive documentation and examples",
      "Security and compliance built-in",
    ],
    metrics: [
      { label: "Modules", value: "50+" },
      { label: "Downloads", value: "10K+" },
      { label: "Contributors", value: "25" },
    ],
  },
  {
    id: "proj-6",
    name: "CI/CD Security Scanner",
    description: "Automated security scanning integrated into CI/CD pipelines",
    longDescription:
      "A security scanning tool that integrates with GitHub Actions, GitLab CI, and Jenkins to perform automated vulnerability scanning, secrets detection, and compliance checks.",
    technologies: ["Go", "GitHub Actions", "Trivy", "Docker", "Kubernetes"],
    category: "Security",
    githubUrl: "https://github.com/alexmorgan-devops/cicd-security-scanner",
    highlights: [
      "Scans for vulnerabilities, secrets, and misconfigurations",
      "Integrates with major CI/CD platforms",
      "Policy-as-code for security compliance",
      "Detailed remediation guidance",
    ],
    metrics: [
      { label: "Scans/Day", value: "1000+" },
      { label: "Vulnerabilities Found", value: "5K+" },
      { label: "False Positives", value: "<2%" },
    ],
  },
  {
    id: "proj-7",
    name: "Developer Portal",
    description: "Self-service platform for developers to provision resources",
    longDescription:
      "An internal developer platform built with Backstage that enables developers to self-service infrastructure, create environments, and access documentation and tooling.",
    technologies: [
      "Backstage",
      "Kubernetes",
      "Terraform",
      "TypeScript",
      "PostgreSQL",
    ],
    category: "Platform Engineering",
    githubUrl: "https://github.com/alexmorgan-devops/developer-portal",
    highlights: [
      "Self-service environment provisioning in under 5 minutes",
      "Centralized service catalog and documentation",
      "Automated onboarding workflows",
      "Integration with existing DevOps tooling",
    ],
    metrics: [
      { label: "Active Users", value: "500+" },
      { label: "Services Cataloged", value: "300+" },
      { label: "Time Saved", value: "150hrs/week" },
    ],
  },
  {
    id: "proj-8",
    name: "Disaster Recovery Automation",
    description:
      "Automated backup, restore, and disaster recovery orchestration",
    longDescription:
      "A comprehensive disaster recovery solution that automates backups, performs regular restore testing, and orchestrates failover procedures for critical infrastructure.",
    technologies: ["Python", "Kubernetes", "Terraform", "AWS", "Bash"],
    category: "Automation",
    githubUrl: "https://github.com/alexmorgan-devops/dr-automation",
    highlights: [
      "Automated daily backups with retention policies",
      "Monthly automated restore testing",
      "One-click disaster recovery failover",
      "RTO reduced from 4 hours to 15 minutes",
    ],
    metrics: [
      { label: "RTO", value: "15 min" },
      { label: "RPO", value: "1 hour" },
      { label: "Success Rate", value: "100%" },
    ],
  },
];

// Helper function to filter projects by category
export const getProjectsByCategory = (
  category: PersonalProject["category"],
) => {
  return projects.filter((project) => project.category === category);
};

// Get all unique technologies used across projects
export const getAllTechnologies = () => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};
