import "./Game.css";
import GameRow from "./GameRow";
import GameKeyboard from "./GameKeyboard";

const Game = () => {
  return (
    <div id="game">
      <div id="board-container">
        <div id="board" style={{ width: "350px", height: "420px" }}>
          <GameRow />
          <GameRow />
          <GameRow />
          <GameRow />
          <GameRow />
          <GameRow />
        </div>
      </div>
      <GameKeyboard />
    </div>
  );
};

export default Game;
