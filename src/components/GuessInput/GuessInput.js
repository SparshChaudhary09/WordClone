import React from "react";

function GuessInput({AddGuess, gameStatus}) {
  const [guessedWord, setguessedWord] = React.useState('');

  function handleSubmit(e){
    e.preventDefault();

    AddGuess(guessedWord.toUpperCase());
    setguessedWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input 
        id="guess-input"
        type="text"
        required
        minLength="5"
        maxLength="5"
        value={guessedWord}
        onChange={(e)=> setguessedWord(e.target.value)}
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
