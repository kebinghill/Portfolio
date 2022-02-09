import React, { useEffect, useRef } from "react";
import ContactButton from "./ContactButton";

const IntroductionText = () => {
  // set up text to print, each item in array is new line
  const aText = new Array(
    "Welcome to my page!",
    " ",
    "Have a look around (It's mobile friendly!)",
    "",
    "Feel free to reach out by clicking the button below"
  );
  const iSpeed = 65; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  const iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = 0; // initialise text position
  let sContents = ""; // initialise contents variable
  let iRow; // initialise current row

  useEffect(() => {
    const typewriter = () => {
      sContents = " ";
      iRow = Math.max(0, iIndex - iScrollAt);
      var destination = document.getElementById("introduction-text");

      while (iRow < iIndex) {
        sContents += aText[iRow++] + "<br />";
      }
      destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "_";
      if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 500);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    };
    typewriter();
  }, []);

  return (
    <div className="section-container">
      <div id="introduction-text"></div>
      <ContactButton
        label="Contact"
        mailto="mailto:kevin.gil@hotmail.com"
        className="contact-button"
      />
    </div>
  );
};

export default IntroductionText;
