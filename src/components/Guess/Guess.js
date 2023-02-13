import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const guessResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          status={guessResult ? guessResult[index].status : undefined}
          letter={guessResult ? guessResult[index].letter : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
