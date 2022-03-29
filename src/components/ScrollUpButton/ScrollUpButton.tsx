import React from 'react';
import '../ScrollUpButton.css';

function ScrollUpButton() {
    function scrollTo(position: number) {
        document.body.scrollTop = position; // For Safari
        document.documentElement.scrollTop = position; // For Chrome, Firefox, IE and Opera
    }

    function scrollUp() {
        scrollTo(0);
    }
    return (
        <h1 onClick={scrollUp}>This is a button</h1>
    )
}