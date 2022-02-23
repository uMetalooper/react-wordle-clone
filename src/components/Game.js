import "./Game.css";
import GameRow from "./GameRow";

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
    </div>
  );
};

export default Game;
