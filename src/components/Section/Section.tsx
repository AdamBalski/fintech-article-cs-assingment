import React, {useContext} from "react";
import "./Section.css";
import {ThemeContext} from "../../ThemeContext";

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
  const themeContext: any = useContext(ThemeContext);
  const themeSuffix = themeContext.isDarkMode ? "-dark" : "-light";

  return (
    <div className={`Section Section${themeSuffix}`}>
      <h1 style={{fontSize: props.section["title-font-size"]}}>{props.section.title}</h1>
      <span dangerouslySetInnerHTML={{__html: props.section.text}} style={{fontSize: props.section["title-font-size"]}}/>
    </div>
  );
}

export type { SectionEntity, SectionProps };
export default Section;