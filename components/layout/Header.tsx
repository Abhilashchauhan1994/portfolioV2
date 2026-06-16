"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#professional-projects" },
  // { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center"
          >
            <a
              href="#"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Abhilash Chauhan
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-foreground hover:bg-accent"
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Button
              asChild
              variant="outline"
              className="border-blue-500/50 hover:bg-blue-500/10"
            >
              <a href="/Abhilash_singh_chauhan_resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="justify-start text-foreground/80 hover:text-foreground"
              >
                {item.name}
              </Button>
            ))}
            <Button
              asChild
              variant="outline"
              className="justify-start border-blue-500/50 hover:bg-blue-500/10"
            >
              <a href="/Abhilash_singh_chauhan_resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
