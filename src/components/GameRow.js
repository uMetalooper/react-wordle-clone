import "./GameRow.css";
import GameTile from "./GameTile";

const GameRow = ({ letters }) => {
  var rows = [];
  var index = 0;
  for (; index < letters.length; index++) {
    const element = letters[index];
    rows.push(
      <GameTile key={index} state={element.state} letter={element.text} />
    );
  }
  if (letters.length < 5) {
    for (; index < 5; index++) {
      rows.push(<GameTile key={index} />);
    }
  }

  return <div className="row">{rows.map((tile) => tile)}</div>;
};

export default GameRow;
