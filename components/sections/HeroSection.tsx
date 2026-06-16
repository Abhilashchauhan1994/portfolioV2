"use client";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { personalInfo, contactInfo } from "../data/personal";
import { GradientOrbs } from "../animations/GradientOrbs";
import { GridBackground } from "../animations/GridBackground";
import { GlowButton } from "../shared/GlowButton";

export function HeroSection() {
  const scrollToProjects = () => {
    document
      .querySelector("#professional-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GridBackground />
      <GradientOrbs />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-6"
          >
            <span className="text-sm font-mono text-muted-foreground">
              $ whoami{"  -> "}
              <span className="text-foreground font-semibold">
                DevOps Engineer
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-foreground/90"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {["Linux", "Bash", "Grafana", "Docker", "Jenkins", "Kibana"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GlowButton variant="primary" onClick={scrollToProjects}>
              View Projects
            </GlowButton>
            <GlowButton variant="secondary" onClick={scrollToContact}>
              Contact Me
            </GlowButton>
            {/* <GlowButton variant="secondary">Resume</GlowButton> */}
            <motion.a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
