import React, {useContext, useEffect, useState} from 'react';
import './ScrollUpButton.css';
import {ThemeContext} from "../../ThemeContext";

function ScrollUpButton() {
    const themeContext: any = useContext(ThemeContext);
    const themeSuffix = themeContext.isDarkMode ? "-dark" : "-light";

    const scrollTo = (position: number) => {
        document.body.scrollTop = position; // For Safari
        document.documentElement.scrollTop = position; // For Chrome, Firefox, IE and Opera
    };
    const scrollUp = async () => {
        const sleep = (ms: number): Promise<number> => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const max = (a: number, b: number) => a > b ? a : b;
        const onePercent = max(document.documentElement.scrollHeight, document.body.scrollHeight) / 100;

        while(max(document.documentElement.scrollTop, document.body.scrollTop) > 0) { // til top
            let scrollTop = max(document.documentElement.scrollTop, document.body.scrollTop);
            scrollTo(max(scrollTop - onePercent, 0)); // scroll up 1%

            await sleep(5);
        }
    };
    const isScrolled = () => window.scrollY > 0.3 * window.outerHeight;

    const [scrolled, setScrolled] = useState(isScrolled());

    useEffect(() => {
        window.addEventListener('scroll', () => setScrolled(isScrolled()), true)
    }, []);

    return !scrolled ? null : (
        <div className={`ScrollUpButton ScrollUpButton${themeSuffix}`}>
            <button onClick={scrollUp}>Przewiń w górę</button>
        </div>
    )
}

export default ScrollUpButton;