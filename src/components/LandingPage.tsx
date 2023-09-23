"use client";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import React, { useRef } from "react";

export default function LandingPage() {
  const experienceRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-[2000px] relative">
      <Navbar
        experinceRef={experienceRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Hero />
      <Experience ref={experienceRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
    </div>
  );
}
