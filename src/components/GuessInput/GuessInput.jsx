import React, { useState, useRef } from "react";

function GuessInput({gameStatus, handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      return window.alert("Enter exactly 5 letters")
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        autoFocus
        disabled={gameStatus !== 'running'}
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value;
          setTentativeGuess(nextGuess.toUpperCase());
        }}
      />
    </form>
  )
}

export default GuessInput;
