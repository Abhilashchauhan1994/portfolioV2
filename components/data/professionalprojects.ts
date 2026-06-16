import { ProfessionalProject } from "../../types";

export const professionalProjects: ProfessionalProject[] = [
  {
    id: "proj-1",
    title: "Docker Instance Roll Automation",
    category: "Automation",
    duration: "Feb 2026 - Mar 2026",
    description:
      "Developed automation tooling to perform rolling restarts of Docker instances during migration activities, enabling rapid testing and production validation.",
    highlights: [
      "Reduced validation effort from 2 hours to 30 minutes",
      "Automated Docker instance rollout process",
      "Improved rollback readiness during migration windows",
      "Accelerated deployment testing and service validation",
      "Enhanced migration efficiency and operational reliability",
    ],
    technologies: ["Docker", "Linux", "Bash", "Shell Scripting"],
    impact: [
      {
        metric: "Validation Time Saved",
        value: "75%",
      },
      {
        metric: "Manual Effort",
        value: "2h → 30m",
      },
    ],
  },
  {
    id: "proj-2",
    title: "Enterprise Data Center Migration",
    category: "Reliability Engineering",
    duration: "Feb 2025- May 2026",
    description:
      "Played a key role in a large-scale Data Center migration initiative involving monitoring, validation, deployment readiness, and production go-live support for enterprise applications and Java microservices.",
    highlights: [
      "Validated and monitored 1000+ application instances",
      "Performed production go-live readiness assessments",
      "Executed deployment and post-migration health validation",
      "Collaborated with Infrastructure, Engineering, and Application teams",
      "Ensured minimal downtime during production cutover activities",
      "Resolved migration-related configuration and availability issues",
    ],
    technologies: [
      "Linux",
      "Java Microservices",
      "Grafana",
      "Prometheus",
      "Nagios",
      "Kibana",
    ],
    impact: [
      {
        metric: "Instances Supported",
        value: "1000+",
      },
      {
        metric: "Migration Type",
        value: "Production DC Migration",
      },
    ],
  },
  {
    id: "proj-3",
    title: "Configuration Validation Automation",
    category: "Automation",
    duration: "March 2026",
    description:
      "Built an automated configuration validation utility to detect missing or inconsistent configuration files during application migration across data centers.",
    highlights: [
      "Automated configuration comparison between environments",
      "Detected missing and inconsistent configuration files",
      "Reduced migration-related configuration issues",
      "Improved deployment consistency and reliability",
      "Enhanced operational efficiency during migration activities",
    ],
    technologies: ["Linux", "Bash", "Shell Scripting"],
    impact: [
      {
        metric: "Efficiency Improvement",
        value: "25%",
      },
      {
        metric: "Migration Reliability",
        value: "Improved",
      },
    ],
  },
  {
    id: "proj-4",
    title: "Load Balancer Health Check Automation",
    category: "Observability",
    duration: "Dec 2025 - Jan 2026",
    description:
      "Developed automated health-check tooling to validate load balancer availability and backend service health during migration and production cutover activities.",
    highlights: [
      "Automated load balancer health validation",
      "Verified backend service availability",
      "Improved issue detection during migration windows",
      "Enabled proactive troubleshooting",
      "Reduced manual validation effort during production cutovers",
    ],
    technologies: ["Linux", "Bash", "Monitoring Tools"],
    impact: [
      {
        metric: "Manual Validation Reduced",
        value: "30%",
      },
      {
        metric: "Issue Detection",
        value: "Faster",
      },
    ],
  },
];
