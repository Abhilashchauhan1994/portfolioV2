"use client";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { contactInfo } from "../data/personal";

export function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: contactInfo.github, label: "GitHub" },
    { icon: FaLinkedin, href: contactInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
    ...(contactInfo.twitter
      ? [{ icon: FaXTwitter, href: contactInfo.twitter, label: "Twitter" }]
      : []),
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Abhilash Singh Chauhan
            </h3>
            <p className="text-muted-foreground">
              Site Reliability Engineer (SRE) | DevOps Engineer
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#professional-projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Abhilash Singh Chauhan. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
