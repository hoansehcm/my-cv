"use client";

import { motion } from "motion/react";
import { Award, Calendar } from "lucide-react";

const certificationsData = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "August 2023",
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "March 2022",
  },
  {
    id: 3,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "November 2021",
  },
  {
    id: 4,
    name: "Certified ScrumMaster (CSM)",
    issuer: "Scrum Alliance",
    date: "July 2020",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Certifications & Awards</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Continuous learning and professional recognition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="p-4 bg-primary/10 text-primary rounded-full mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="text-sm text-primary font-medium mb-4">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
