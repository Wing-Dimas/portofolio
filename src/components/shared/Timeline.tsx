import ProjectType from "@/types/Project";
import React from "react";
import Badge from "./Badge";
import { formatRangeDate } from "@/utils/formatRangeDate";
import Link from "next/link";

type Variant = "light" | "dark" | "primary";

interface TimelineProps {
  items: ProjectType[];
  enableRangeDate?: boolean;
  enableHover?: boolean;
  enableTimeline?: boolean;
  variant?: Variant;
}

export default function Timeline({
  items,
  enableRangeDate = false,
  enableHover = true,
  enableTimeline = true,
  variant = "light",
}: TimelineProps) {
  return (
    <ol
      className={`relative ${enableTimeline && "border-l"}  ${
        variant == "light" ? "border-light" : "border-dark"
      }`}
    >
      {items.map((item) => (
        <li className="mb-10 ml-2 sm:ml-6" key={item.id}>
          <div
            className={`absolute w-3 h-3 ${
              enableTimeline &&
              `bg-gray-200 rounded-full mt-9 -left-1.5 border border-${variant}`
            } `}
          ></div>
          <Link
            href={item.link ? item.link : ""}
            className={`block p-8 px-4 sm:px-8 rounded-3xl ${
              enableHover && variant == "light"
                ? "hover:bg-[#7959FF]"
                : "hover:bg-[#E0D1FF]"
            }`}
          >
            <time
              className={`mb-1 leading-none font-normal text-base text-${variant}`}
            >
              {enableRangeDate &&
                formatRangeDate(item.date_start ?? null, item.date_end)}
            </time>
            <h3
              className={`font-semibold text-${variant} text-xl flex items-center`}
            >
              {item.title}{" "}
              {item.subtitle && (
                <>⋅ {item.subtitle.map((subtitle) => subtitle)}</>
              )}
            </h3>
            <p className={`mb-4 text-base font-medium text-${variant}`}>
              {item.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {item.tech_stack &&
                item.tech_stack.map((tech, i) => <Badge text={tech} key={i} />)}
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
