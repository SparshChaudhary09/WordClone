import React from "react";
import { range } from "../../utils";

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses){
  const statusObj = {};

  validatedGuesses.forEach(guess => {
    guess.forEach(({letter, status}) => {
      statusObj[letter] = status;
    });    
  });

  return statusObj;
}

function Keyboard({validatedGuesses}) {
  const statusByLetter = getStatusByLetter(validatedGuesses);
  return (
    <div className="keyboard">
    {
      ROWS.map((row, idx)=> (
        <div key={idx} className="keyboard-row">
        {
          row.map(letter=> (
            <span key={letter} className={`letter ${statusByLetter[letter]}`}>{letter}</span>
          ))
        }
        </div>
      ))
    }
    </div>
  )
}

export default Keyboard;
