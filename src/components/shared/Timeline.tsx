import ProjectType from "@/types/Project";
import { IconPointFilled } from "@tabler/icons-react";
import React from "react";
import Badge from "./Badge";
import { formatRangeDate } from "@/utils/formatRangeDate";

interface TimelineProps {
  items: ProjectType[];
  enableRangeDate?: boolean;
}

export default function Timeline({
  items,
  enableRangeDate = false,
}: TimelineProps) {
  return (
    <ol className="relative border-l border-light">
      {items.map((item) => (
        <li className="mb-10 ml-6" key={item.id}>
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-9 -left-1.5 border border-light"></div>
          <a
            href={item.link ? item.link : ""}
            className="block p-8 hover:bg-[#7959FF] rounded-3xl"
          >
            <time className=" mb-1 leading-none font-normal text-base text-light ">
              {enableRangeDate &&
                formatRangeDate(
                  item.date_start ? item.date_start : null,
                  item.date_end
                )}
            </time>
            <h3 className="font-semibold text-light text-xl flex items-center">
              {item.title}{" "}
              {item.subtitle && (
                <>⋅ {item.subtitle.map((subtitle) => subtitle)}</>
              )}
            </h3>
            <p className="mb-4 text-base font-medium text-light">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {item.tech_stack &&
                item.tech_stack.map((tech, i) => <Badge text={tech} key={i} />)}
            </div>
          </a>
        </li>
      ))}
    </ol>
  );
}
