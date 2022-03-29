import React, {useContext} from "react";
import {ThemeContext} from "../../ThemeContext";
import "./Button.css";

interface ButtonProps {
  text: string
};

const Button = (props: ButtonProps) => {
  const themeContext: any = useContext(ThemeContext);
  const themeSuffix = themeContext.isDarkMode ? "-dark" : "-light";

  return (
    <div className={`Button Button${themeSuffix}`}>
      {props.text}
    </div>
  )
};

export default Button;