"use client";
import { motion } from "motion/react";
import { Code2, Cloud, Server, Rocket } from "lucide-react";
import { personalInfo } from "../data/personal";
import { SectionTitle } from "../shared/SectionTitle";
import { ScrollReveal } from "../shared/ScrollReveal";

export function AboutSection() {
  const highlights = [
    {
      icon: Server,
      title: "9+ Years",
      description:
        "Experience in Linux production support, reliability engineering, and enterprise operations.",
    },
    {
      icon: Rocket,
      title: "99.9% Uptime",
      description:
        "Improved service availability through monitoring, alerting, and incident management.",
    },
    {
      icon: Code2,
      title: "40% Automation Gain",
      description:
        "Reduced manual operational effort through Bash scripting and operational automation.",
    },
    {
      icon: Cloud,
      title: "1000+ Instances",
      description:
        "Supported validation and migration of large-scale enterprise application environments.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" centered />

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-4 text-muted-foreground">
              {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex items-center space-x-4 pt-6">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm">Available for opportunities</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  📍 {personalInfo.location}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all"
                  >
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { value: "9+", label: "Years Experience" },
              { value: "99.9%", label: "Uptime Achieved" },
              { value: "40%", label: "Operations Automated" },
              { value: "1000+", label: "Instances Supported" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
