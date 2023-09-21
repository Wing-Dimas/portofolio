import React from "react";

interface HyperlinkPropsType {
  link: string;
  text: string;
}

export default function Hyperlink({ link, text }: HyperlinkPropsType) {
  return (
    <a href={link} className="hyperlink">
      {text}
    </a>
  );
}
