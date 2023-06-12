import React from "react";
import Banner from "../Banner";

function WonBanner({noOfGuesses}) {
  return (
    <Banner result="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        {" "}
        <strong>{noOfGuesses === 1 ? "1 Guess" : `${noOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
