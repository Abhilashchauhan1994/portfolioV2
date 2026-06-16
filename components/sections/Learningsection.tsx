"use client";
import { motion } from "motion/react";
import { Mail, Download, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { personalInfo, contactInfo } from "../data/personal";
import { SectionTitle } from "../shared/SectionTitle";
import { GlowButton } from "../shared/GlowButton";
import { LearningCard } from "../cards/learningcard";
import { learning } from "../data/learning";

<section id="learning" className="py-24 md:py-32 border-t border-border">
  <div className="container mx-auto px-4">
    <SectionTitle
      title="Continuous Learning"
      subtitle="Committed to continuous growth through hands-on labs, technical training, and self-paced learning."
      centered
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {learning.map((item, index) => (
        <LearningCard key={item.id} learning={item} index={index} />
      ))}
    </div>
  </div>
</section>;
