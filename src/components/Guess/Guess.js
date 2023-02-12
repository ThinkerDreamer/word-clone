import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ value, answer }) {
  // if (!value) {
  //   value = "     ";
  // }
  // let guessedWord = value.split("");

  // return (
  //   <p className="guess">
  //     {guessedWord.map((character, index) => (
  //       <span key={index} className={`cell `}>
  //         {character}
  //       </span>
  //     ))}
  //   </p>
  // );

  const guessResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={`cell ${
            guessResult ? guessResult[index].letter : undefined
          }`}
        >
          {guessResult ? guessResult[index].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
