import GameTile from "../GameTile";

import "./GameRow.css";

const GameRow = ({ letters }) => {
  var cols = [];
  var index = 0;
  for (; index < letters.length; index++) {
    const element = letters[index];
    cols.push(
      <GameTile
        key={index}
        state={element.state}
        anim={element.anim}
        letter={element.text}
      />
    );
  }
  if (letters.length < 5) {
    for (; index < 5; index++) {
      cols.push(<GameTile key={index} />);
    }
  }

  return (
    <div className="row" data-animation="shake">
      {cols.map((tile) => tile)}
    </div>
  );
};

export default GameRow;
