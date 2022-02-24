import "./Game.css";
import { useState } from "react";
import GameRow from "./GameRow";
import GameKeyboard from "./GameKeyboard";

const Game = () => {
  const [letters, setLetters] = useState([]);
  const [index, setIndex] = useState(0);
  const onKeyClick = (key) => {
    const newIndex = index + 1;
    setIndex(newIndex);
    const newLetter = {
      id: newIndex,
      state: "tbd",
      anim: "pop",
      text: key,
    };
    setLetters([...letters, newLetter]);
  };

  return (
    <div id="game">
      <div id="board-container">
        <div id="board" style={{ width: "350px", height: "420px" }}>
          <GameRow letters={letters} />
          <GameRow letters={[]} />
          <GameRow letters={[]} />
          <GameRow letters={[]} />
          <GameRow letters={[]} />
          <GameRow letters={[]} />
        </div>
      </div>
      <GameKeyboard onClick={onKeyClick} />
    </div>
  );
};

export default Game;
