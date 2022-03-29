import React, {useCallback, useContext} from "react";
import {useEffect, useState} from "react";
import {SectionEntity} from "../Section/Section";
import Section from "../Section/Section";
import "./Content.css";
import {ThemeContext} from "../../ThemeContext";
import {Link} from "react-router-dom";
import Button from "../../visual/Button/Button";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
const hostname = document.location.origin;

function useFetchSections() {
  const [sections, setSections] = useState<Array<SectionEntity>>([]);
  const addSection = (section: SectionEntity) => {
    setSections(prevSections => [...prevSections, section].sort((a, b) => a.order - b.order));
  };

  const fetchSection = useCallback((sectionString: string): void => {
    fetch(hostname + "/sections/" + sectionString, {headers})
      .then(response => response.json())
      .then(responseJson => addSection(responseJson));
  }, []);

  const fetchContent: () => void = () => {
    fetch(hostname + "/sections/main.json", {headers})
      .then(response => response.json())
      .then(responseJson => responseJson.map(fetchSection));
  }
  useEffect(fetchContent, [fetchSection]);

  return sections;
}

function Content() {
  const sections = useFetchSections();

  const themeContext: any = useContext(ThemeContext);
  const themeSuffix = themeContext.isDarkMode ? "-dark" : "-light";

  return (
    <div className={`Content Content${themeSuffix}`}>
      <Link to={"/audio"}>
        <Button text={"Posłuchaj w formie podcastu ▶"}/>
      </Link>
      {sections.map((section) => {
        return (<Section section={section} key={section.order}/>);
      })}
    </div>
  );
}

export default Content;