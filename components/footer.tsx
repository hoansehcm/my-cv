"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold tracking-tight mb-6 inline-block">
              Your<span className="text-primary/70">Name</span>.
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A passionate Frontend Developer dedicated to building modern, scalable, and user-friendly web applications. Let&apos;s create something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground">Socials</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={18} /> Twitter
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <span className="text-red-500">♥</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
