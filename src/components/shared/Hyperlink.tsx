import Link from "next/link";
import React from "react";

interface HyperlinkPropsType {
  link: string;
  text: string;
}

export default function Hyperlink({ link, text }: HyperlinkPropsType) {
  return (
    <Link href={link} className="hyperlink">
      {text}
    </Link>
  );
}
