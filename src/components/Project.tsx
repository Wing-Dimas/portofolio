import React, { LegacyRef, forwardRef } from "react";
import Timeline from "./shared/Timeline";
import { data } from "@/constant/data/project";

interface ProjectPropsType {}

const Project = forwardRef<HTMLElement, ProjectPropsType>(({}, ref) => {
  return (
    <section className="py-20" ref={ref}>
      <div className="container divide">
        <div className="flex-1">
          <h2 className="subtitle text-primary">Project</h2>
        </div>
        <div className="flex-[2]">
          <Timeline
            items={data}
            variant="primary"
            enableTimeline={false}
            enableRangeDate={false}
          />
        </div>
      </div>
    </section>
  );
});

Project.displayName = "Project";

export default Project;
