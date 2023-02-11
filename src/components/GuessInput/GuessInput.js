import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  console.log(guess);

  function handleInput(event) {
    event.preventDefault();
    console.log("Hello");
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper">
      <label htmlFor="guess-input" onSubmit={(event) => handleInput(event)}>
        Enter Guess:{" "}
      </label>
      <input
        type="text"
        className="guess-input"
        value={guess}
        id="guess-input"
        minLength={5}
        maxLength={5}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
