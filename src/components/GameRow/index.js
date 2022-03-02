import GameTile from "components/GameTile";

import "./GameRow.css";

const GameRow = ({ letters }) => {
  const tiles = letters.map((element, index) => {
    return (
      <GameTile
        key={index}
        state={element.state}
        anim={element.anim}
        letter={element.text}
      />
    );
  });

  if (letters.length < 5) {
    for (let index = letters.length; index < 5; index++) {
      tiles.push(<GameTile key={index} />);
    }
  }

  return (
    <div className="row" data-animation="shake">
      {tiles}
    </div>
  );
};

export default GameRow;
