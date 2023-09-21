import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import React from "react";

export default function page() {
  return (
    <div className="min-h-[2000px] relative">
      <Navbar />
      <Hero />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
