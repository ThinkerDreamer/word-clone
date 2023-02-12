import React from "react";
// import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

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

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell `}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
