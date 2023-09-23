import React, { forwardRef } from "react";
import Timeline from "./shared/Timeline";
import { data } from "@/constant/data/experince";

interface ExperiencePropsType {}

const Experience = forwardRef<HTMLElement, ExperiencePropsType>(({}, ref) => {
  return (
    <section className="bg-primary py-20" ref={ref}>
      <div className="container divide">
        <div className="flex-1">
          <h2 className="subtitle">Experience</h2>
        </div>
        <div className="flex-[2]">
          <Timeline items={data} enableRangeDate />
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
