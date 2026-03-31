"use client";

import { motion } from "motion/react";

const skillsData = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Figma", "Docker", "Jest", "Webpack", "NPM/Yarn"],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability", "Leadership"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive overview of my technical expertise and professional skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
