import type { Experience } from "../../types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "HCL Technologies",
    position: "Senior Specialist",
    location: "India",
    startDate: "Jan-2025",
    endDate: "Present",
    title: "Data Center Migration & Production Go-Live Support",
    description:
      "Played a key role in a large-scale Data Center migration initiative involving validation, monitoring, and production readiness of enterprise applications and Java microservices.",

    achievements: [
      "Supported migration and validation of 1000+ application instances across production environments.",
      "Performed deployment verification, service readiness checks, and post-migration health validation.",
      "Collaborated with Infrastructure, Engineering, LME, and Application teams during critical migration windows.",
      "Identified and resolved configuration, deployment, and application availability issues before production cutover.",
      "Ensured high service availability and minimal downtime throughout migration activities.",
    ],

    technologies: [
      "Linux",
      "Bash",
      "Grafana",
      "Prometheus",
      "Nagios",
      "Kibana",
      "Bitbucket",
      "Java Microservices",
    ],

    impact: [
      { metric: "Application Instances", value: "1000+" },
      { metric: "Production Systems", value: "Large Scale" },
      { metric: "Migration Focus", value: "High Availability" },
    ],
  },
  {
    id: "exp-2",
    company: "HCL Technologies",
    position: "Senior Specialist",
    location: "India",
    startDate: "Oct-2021",
    endDate: "Dec-2024",
    title: "Production Support",
    description:
      "Supporting enterprise-scale production environments with a focus on reliability engineering, observability, incident management, automation, and large-scale migration initiatives.",

    achievements: [
      "Improved application uptime to 99.9% through proactive monitoring, alert optimization, and observability best practices.",
      "Reduced MTTR by 30% by troubleshooting critical incidents across Linux servers, Java microservices, Jenkins pipelines, and monitoring platforms.",
      "Automated operational workflows using Bash scripting, reducing manual effort by 40% and improving team efficiency.",
      "Built and maintained monitoring dashboards and alerting solutions using Grafana, Prometheus, Datadog, Nagios, and Kibana.",
      "Played a key role in a Data Center migration project involving validation and monitoring of 1000+ application instances and Java microservices.",
      "Collaborated with Infrastructure, Engineering, and Application teams to ensure successful production deployments and migration readiness.",
      "Mentored junior engineers on Linux troubleshooting, monitoring tools, and production debugging methodologies.",
    ],

    technologies: [
      "Linux",
      "Bash",
      "Grafana",
      "Prometheus",
      "Nagios",
      "Kibana",
      "Jenkins",
      "Bitbucket",
      "Java Microservices",
    ],

    impact: [
      { metric: "Application Uptime", value: "99.9%" },
      { metric: "MTTR Reduction", value: "30%" },
      { metric: "Manual Effort Reduced", value: "40%" },
    ],
  },

  {
    id: "exp-3",
    company: "Tata Consultancy Services",
    position: "Technical Support Engineer",
    location: "India",
    startDate: "Jul-2016",
    endDate: "Oct-2021",
    title: "Application Support",
    description:
      "Provided L2/L3 production support for mission-critical enterprise applications, focusing on incident management, troubleshooting, monitoring, and operational excellence.",

    achievements: [
      "Delivered 24x7 production support for enterprise applications, ensuring service stability and availability.",
      "Reduced recurring production incidents by 25% through detailed root cause analysis and collaboration with development teams.",
      "Monitored application and infrastructure health using Datadog and internal monitoring platforms.",
      "Performed troubleshooting using SQL queries, Linux commands, application logs, and debugging techniques.",
      "Supported production releases, deployment validation, environment checks, and issue triaging activities.",
      "Participated in migration initiatives from legacy systems to microservices-based architecture.",
      "Created operational runbooks, troubleshooting guides, and knowledge-sharing documentation for support teams.",
      "Conducted internal training sessions on incident management, monitoring practices, and production troubleshooting.",
    ],

    technologies: [
      "Linux",
      "SQL",
      "Datadog",
      "Git",
      "Java",
      "Application Monitoring",
      "Incident Management",
      "Microservices",
    ],

    impact: [
      { metric: "Years Supported", value: "5+" },
      { metric: "Incident Reduction", value: "25%" },
      { metric: "Support Model", value: "24x7" },
    ],
  },
];
