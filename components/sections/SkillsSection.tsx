"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { skillsByCategory } from "../data/skills";
import type { SkillCategory } from "../../types";
import { SectionTitle } from "../shared/SectionTitle";
import { SkillCard } from "../cards/SkillCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export function SkillsSection() {
  const categories = Object.keys(skillsByCategory) as SkillCategory[];
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    categories[0],
  );

  return (
    <section
      id="skills"
      className="py-24 md:py-32 border-t border-border bg-secondary/20"
    >
      <div className="container mx-auto px-4">
        <SectionTitle title="Technical Skills" centered />

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue={categories[0]} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="px-6 py-3 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {skillsByCategory[category].map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              Tech Stack Overview
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(skillsByCategory)
                .flat()
                .slice(0, 20)
                .map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-secondary hover:bg-accent text-sm font-medium transition-colors cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
