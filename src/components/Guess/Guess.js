import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import { answer } from "../Game/Game";

function Guess({ value }) {
  // if (!guess) {
  //   guess = "     ";
  // }
  // let guessedWord = guess.split("");

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
      {guessResult
        ? guessResult.map(({ letter, status }, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter ? letter : undefined}
            </span>
          ))
        : range(5).map((num) => (
            <span key={num} className={"cell"}>
              {" "}
            </span>
          ))}
    </p>
  );
}

export default Guess;
