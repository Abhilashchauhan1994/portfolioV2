"use client";
import { motion } from "motion/react";
import { Mail, Download, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { personalInfo, contactInfo } from "../data/personal";
import { SectionTitle } from "../shared/SectionTitle";
import { GlowButton } from "../shared/GlowButton";

export function ContactSection() {
  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: contactInfo.github,
      username: "abhilashchauhan1994",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: contactInfo.linkedin,
      username: "abhilash-chauhan",
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${contactInfo.email}`,
      username: contactInfo.email,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Let's Connect"
          subtitle="Open to new opportunities and collaboration"
          centered
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6"
            >
              <Send className="h-10 w-10 text-blue-400" />
            </motion.div>

            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Interested in Working Together?
            </h3>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently open to DevOps, SRE, and Platform Engineering
              opportunities. Let's discuss how I can help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:abhilashchauhan1994@gmail.com?subject=Portfolio Inquiry">
                <GlowButton variant="primary">Email Me</GlowButton>
              </a>
              <GlowButton
                variant="secondary"
                href="/Abhilash_singh_chauhan_resume.pdf"
              >
                Download Resume
              </GlowButton>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                        {link.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {link.username}
                      </div>
                    </div>
                    <svg
                      className="h-5 w-5 text-muted-foreground group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-semibold text-green-400">
                Available for New Opportunities
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Currently considering full-time roles, contract work, and
              consulting engagements
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
