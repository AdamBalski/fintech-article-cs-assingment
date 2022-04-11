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
      <iframe style={{marginTop: 30}} width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1248503725%3Fsecret_token%3Ds-8Ik9YEqfNuE&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
    </div>
  );
};

export default AudioContent;