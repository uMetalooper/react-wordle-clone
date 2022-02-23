import "./GameRow.css";
import GameTile from "./GameTile";

const GameRow = () => {
  return (
    <div className="row">
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
    </div>
  );
};

export default GameRow;
