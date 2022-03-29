import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Button from "../../visual/Button/Button";
import "../Content/Content.css";
import {ThemeContext} from "../../ThemeContext";

const AudioContent = () => {
  const themeContext: any = useContext(ThemeContext);
  const darkMode = themeContext.isDarkMode;
  const themeSuffix = darkMode ? "-dark" : "-light";

  return (
    <div className={`Content Content${themeSuffix}`}>
      <Link to={"/"}>
        <Button text={"Przeczytaj artykuł"}/>
      </Link>
      <iframe style={{borderRadius: 12, marginTop: 20}}
              src={"https://open.spotify.com/embed/episode/3DRgBLnoxBeOUIkgb7gXWU?utm_source=generator" + (darkMode ? "" : "&theme=0")}
              width="100%" height="232" frameBorder="0" allowFullScreen={undefined}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
    </div>
  );
};

export default AudioContent;