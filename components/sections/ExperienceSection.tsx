"use client";
import { motion } from "motion/react";
import { experiences } from "../data/experience";
import { SectionTitle } from "../shared/SectionTitle";
import { TimelineCard } from "../cards/TimelineCard";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <SectionTitle title="Professional Experience" centered />

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform -translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={experience.id}
                    className={`relative flex ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center gap-8`}
                  >
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative"
                      >
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-background shadow-lg" />
                        <div className="absolute inset-0 h-6 w-6 rounded-full bg-blue-500 animate-ping opacity-20" />
                      </motion.div>
                    </div>

                    <div
                      className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                    >
                      <TimelineCard
                        experience={experience}
                        index={index}
                        isLeft={isLeft}
                      />
                    </div>

                    <div className="hidden md:block w-[calc(50%-3rem)]" />
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Career Journey
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  9+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years in DevOps
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">
                  Application Uptime
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Instances Migrated
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  40%
                </div>
                <div className="text-sm text-muted-foreground">
                  Operational Effort Reduced Using Automation
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
