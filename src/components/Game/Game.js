import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"
import {checkGuess} from "../../game-helpers";

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard/Keyboard';


function Game() {
  const [answer, setAnswer] = React.useState(()=> sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function AddGuess(guessedWord)
  {
    const newResults = [...guesses, guessedWord];
    setGuesses(newResults);

    if(guessedWord.toUpperCase() === answer)
      setGameStatus('won');
    else if(newResults.length === NUM_OF_GUESSES_ALLOWED)
      setGameStatus('lost');  
  }

  const validatedGuesses = guesses.map(guess => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} answer={answer} />
      <GuessInput AddGuess={AddGuess} gameStatus={gameStatus} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === 'won' && <WonBanner noOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
    );
}

export default Game;
