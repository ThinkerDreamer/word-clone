import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleInput(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleInput(event)}
    >
      <label htmlFor="guess-input">Enter Guess: </label>
      <input
        type="text"
        className="guess-input"
        value={guess}
        required={true}
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
