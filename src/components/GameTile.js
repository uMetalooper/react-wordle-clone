import PropTypes from "prop-types";
import "./GameTile.css";

const GameTile = ({ state, anim, letter }) => {
  return (
    <div className="tile" data-state={state} data-animation={anim}>
      {letter}
    </div>
  );
};

GameTile.defaultProps = {
  state: "empty",
  anim: "idle",
  letter: "",
};

GameTile.propTypes = {
  state: PropTypes.string,
  anim: PropTypes.string,
  letter: PropTypes.string,
};

export default GameTile;
