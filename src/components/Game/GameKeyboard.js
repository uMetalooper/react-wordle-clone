import "./GameKeyboard.css";

const GameKeyboard = ({ onClick, onEnter, onDelete }) => {
  return (
    <div id="keyboard">
      <div className="krow">
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((c) => {
          return <button onClick={() => onClick(c)}>{c}</button>;
        })}
      </div>
      <div className="krow">
        <div className="spacer half"></div>
        {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((c) => {
          return <button onClick={() => onClick(c)}>{c}</button>;
        })}
        <div className="spacer half"></div>
      </div>
      <div className="krow">
        <button className="one-and-a-half" onClick={onEnter}>
          enter
        </button>
        {["z", "x", "c", "v", "b", "n", "m"].map((c) => {
          return <button onClick={() => onClick(c)}>{c}</button>;
        })}
        <button className="one-and-a-half" onClick={onDelete}>
          {/* steal from the original game */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GameKeyboard;
