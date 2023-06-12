import React from "react";
import {range} from "../../utils";

function Cell({letter, status}){
  const classes = status ? `cell ${status}` : `cell`;
  return (
    <span className={classes}>{letter}</span>
  )
}

function Guess({value, answer}) {
  return (
    <p className="guess">
    {
      range(5).map(num => (
        <Cell key={num} letter={value && value[num].letter} status={value && value[num].status} />
      ))
    }
    </p>
  );
}

export default Guess;
