import React from "react";
import Banner from "../Banner/";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong><br />
        You guessed the word in {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}!
      </p>
    </Banner>
  )
}

export default WonBanner;
