import React from "react";

function Guess({ guess }) {
  if (!guess) {
    guess = "     ";
  }
  let guessedWord = guess.split("");

  return (
    <p className="guess">
      {guessedWord.map((character, index) => (
        <span key={index} className="cell">
          {character}
        </span>
      ))}
    </p>
  );
}

export default Guess;
