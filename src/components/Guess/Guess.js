import React from "react";

function Guess({ guess }) {
  if (!guess) {
    guess = "     ";
  }
  let guessedWord = guess.split("");

  return (
    <>
      {guessedWord.map((character, index) => (
        <span key={index} className="cell">
          {character}
        </span>
      ))}
    </>
  );
}

export default Guess;
