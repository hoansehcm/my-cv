"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager at Tech Innovators",
    content: "Working with them was a game-changer for our product. Their attention to detail and ability to translate complex requirements into intuitive user interfaces is unmatched. Highly recommended!",
    image: "https://picsum.photos/seed/user1/150/150",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO at Startup Hub",
    content: "An exceptional developer who consistently delivers high-quality code. They not only meet deadlines but also proactively suggest improvements to the architecture. A true asset to any engineering team.",
    image: "https://picsum.photos/seed/user2/150/150",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Designer at Creative Agency",
    content: "It's rare to find a developer who truly understands design principles. They brought our Figma prototypes to life with pixel-perfect accuracy and smooth animations. A pleasure to collaborate with.",
    image: "https://picsum.photos/seed/user3/150/150",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            What colleagues and clients say about my work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={48} />
              
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
