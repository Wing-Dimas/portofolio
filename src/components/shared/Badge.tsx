import React from "react";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="text-center font-semibold text-base text-light p-[10px] bg-secondary rounded-full">
      {text}
    </div>
  );
}
