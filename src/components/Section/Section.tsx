import React from "react";
import "./Section.css";

interface SectionEntity {
  order: number,
  "title-font-size": number,
  "text-font-size": number,
  title: string,
  text: string
}

interface SectionProps {
  section: SectionEntity
}

function Section(props: SectionProps) {
  return (
    <div className="Section">
      <h1 style={{fontSize: props.section["title-font-size"]}}>{props.section.title}</h1>
      <span dangerouslySetInnerHTML={{__html: props.section.text}} style={{fontSize: props.section["title-font-size"]}}/>
    </div>
  );
}

export type { SectionEntity, SectionProps };
export default Section;