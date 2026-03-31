"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    duration: "Jan 2023 - Present",
    location: "San Francisco, CA",
    responsibilities: [
      "Led the frontend development of a high-traffic SaaS platform using Next.js and Tailwind CSS.",
      "Improved application performance by 40% through code splitting and lazy loading.",
      "Mentored junior developers and established best practices for React development.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Digital Agency",
    duration: "Jun 2020 - Dec 2022",
    location: "New York, NY",
    responsibilities: [
      "Developed responsive and interactive websites for various clients across different industries.",
      "Collaborated closely with UI/UX designers to implement pixel-perfect designs.",
      "Integrated third-party APIs and payment gateways.",
    ],
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Startup Hub",
    duration: "Jan 2020 - May 2020",
    location: "Remote",
    responsibilities: [
      "Assisted in building internal tools using React and Node.js.",
      "Participated in daily stand-ups and agile development processes.",
      "Fixed bugs and improved the accessibility of existing web applications.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A timeline of my professional journey and the impact I&apos;ve made along the way.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row w-full mb-12 ${
                index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-6 md:mt-0 md:top-8" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative">
                  {/* Arrow for desktop */}
                  <div
                    className={`hidden md:block absolute top-8 w-4 h-4 bg-card border-b border-l border-border transform rotate-45 ${
                      index % 2 === 0 ? "-left-2" : "-right-2 border-t border-r border-b-0 border-l-0"
                    }`}
                  />
                  
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1 font-medium text-primary">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        <span className="text-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
