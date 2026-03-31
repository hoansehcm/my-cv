"use client";

import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    duration: "2018 - 2020",
    location: "New York, NY",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with Honors. Thesis on Machine Learning Applications in Web Development.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Information Technology",
    school: "State University",
    duration: "2014 - 2018",
    location: "San Francisco, CA",
    description: "Core coursework included Data Structures, Algorithms, Database Management, and Web Technologies. Active member of the Coding Club.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="p-4 bg-primary/10 text-primary rounded-xl shrink-0">
                <GraduationCap size={32} />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                  <div className="font-medium text-primary">
                    {edu.school}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
