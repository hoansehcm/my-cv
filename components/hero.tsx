"use client";

import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border w-fit mx-auto lg:mx-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground leading-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Your Name</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Frontend Developer & UI/UX Enthusiast
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build modern, scalable, and user-friendly web applications. Passionate about creating seamless digital experiences that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 w-full sm:w-auto justify-center"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-xl hover:bg-secondary/80 transition-all flex items-center gap-2 border border-border w-full sm:w-auto justify-center"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto lg:ml-auto w-full max-w-md aspect-square z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-bl from-secondary to-transparent rounded-3xl transform -rotate-3 scale-105 -z-10" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-card">
            <Image
              src="https://picsum.photos/seed/avatar/800/800"
              alt="Your Name"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
