import React from 'react';
import { handleKeyPress } from '../../utils';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

// make keyboard clickable
// add event listener to each letter
// when letter is clicked, call onGuess function
// pass letter as argument to onGuess function
// onGuess function will be passed as prop from App.js
// onGuess function will update state in App.js
// App.js will pass updated state as prop to Keyboard.js
// Keyboard.js will re-render with updated state

function Keyboard({ validatedGuesses, onGuess }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter]}`}
              onClick={() => onGuess(letter)}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;