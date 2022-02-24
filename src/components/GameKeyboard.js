import "./GameKeyboard.css";

const GameKeyboard = ({ onClick, onEnter, onDelete }) => {
  return (
    <div id="keyboard">
      <div className="krow">
        <button onClick={() => onClick("q")}>q</button>
        <button onClick={() => onClick("w")}>w</button>
        <button onClick={() => onClick("e")}>e</button>
        <button onClick={() => onClick("r")}>r</button>
        <button onClick={() => onClick("t")}>t</button>
        <button onClick={() => onClick("y")}>y</button>
        <button onClick={() => onClick("u")}>u</button>
        <button onClick={() => onClick("i")}>i</button>
        <button onClick={() => onClick("o")}>o</button>
        <button onClick={() => onClick("p")}>p</button>
      </div>
      <div className="krow">
        <div className="spacer half"></div>
        <button onClick={() => onClick("a")}>a</button>
        <button onClick={() => onClick("s")}>s</button>
        <button onClick={() => onClick("d")}>d</button>
        <button onClick={() => onClick("f")}>f</button>
        <button onClick={() => onClick("g")}>g</button>
        <button onClick={() => onClick("h")}>h</button>
        <button onClick={() => onClick("j")}>j</button>
        <button onClick={() => onClick("k")}>k</button>
        <button onClick={() => onClick("l")}>l</button>
        <div className="spacer half"></div>
      </div>
      <div className="krow">
        <button className="one-and-a-half" onClick={onEnter}>
          enter
        </button>
        <button onClick={() => onClick("z")}>z</button>
        <button onClick={() => onClick("x")}>x</button>
        <button onClick={() => onClick("c")}>c</button>
        <button onClick={() => onClick("v")}>v</button>
        <button onClick={() => onClick("b")}>b</button>
        <button onClick={() => onClick("n")}>n</button>
        <button onClick={() => onClick("m")}>m</button>
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
