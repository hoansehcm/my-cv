"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const strengths = [
    "Problem Solving",
    "Clean Code",
    "UI/UX Design",
    "Agile Methodology",
    "Team Collaboration",
    "Continuous Learning"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate Frontend Developer with a strong foundation in modern web technologies. 
            My goal is to build applications that are not only visually appealing but also highly performant and accessible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Career Objective</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              To leverage my expertise in React, Next.js, and modern CSS frameworks to contribute to innovative projects. 
              I am eager to join a forward-thinking team where I can continue to grow my skills while delivering exceptional value to users and the business.
            </p>
            <h3 className="text-2xl font-bold mb-4">What I Bring</h3>
            <p className="text-muted-foreground leading-relaxed">
              A blend of technical proficiency and an eye for design. I understand the importance of user experience and strive to bridge the gap between design and engineering. I communicate effectively and thrive in collaborative environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6">Core Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
