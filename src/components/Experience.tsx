import React from "react";
import Timeline from "./shared/Timeline";
import { data } from "@/constant/data/experince";

export default function Experience() {
  return (
    <section className="bg-primary py-20">
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
}
