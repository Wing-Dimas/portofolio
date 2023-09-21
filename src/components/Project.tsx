import React from "react";
import Timeline from "./shared/Timeline";
import { data } from "@/constant/data/project";

export default function Project() {
  return (
    <section className="py-20">
      <div className="container md:px-32 flex justify-between mx-auto relative min-h-[80vh]">
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
}
