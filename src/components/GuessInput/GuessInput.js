import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleInput(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
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
        value={tentativeGuess}
        required={true}
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
