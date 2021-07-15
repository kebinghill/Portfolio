import React, { useEffect, useRef } from 'react';

const BioSection = () => {
  // set up text to print, each item in array is new line
  const aText = new Array(
    'Hey there, welcome to my page!',
    ' ',
    'I am a software engineer who graduated from Fullstack Academy on 07/21.',
    '',
    'If you want to check out more of my work, scroll down to the next section.'
  );
  const iSpeed = 65; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  const iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = 0; // initialise text position
  let sContents = ''; // initialise contents variable
  let iRow; // initialise current row

  useEffect(() => {
    const typewriter = () => {
      sContents = ' ';
      iRow = Math.max(0, iIndex - iScrollAt);
      var destination = document.getElementById('bio');

      while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
      }
      destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + '_';
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
    <div className="section-container" id="bio-section">
      <div id="bio"></div>
      <img src="./images/headshot1.png" alt="Headshot Photo" id="headshot" />
    </div>
  );
};

export default BioSection;
