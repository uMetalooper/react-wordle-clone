import "./GameKeyboard.css";

const GameKeyboard = () => {
  return (
    <div id="keyboard">
      <div className="row">
        <button>q</button>
        <button>w</button>
        <button>e</button>
        <button>r</button>
        <button>t</button>
        <button>y</button>
        <button>u</button>
        <button>i</button>
        <button>o</button>
        <button>p</button>
      </div>
      <div className="row">
        <div className="spacer half"></div>
        <button>a</button>
        <button>s</button>
        <button>d</button>
        <button>f</button>
        <button>g</button>
        <button>h</button>
        <button>j</button>
        <button>k</button>
        <button>l</button>
        <div className="spacer half"></div>
      </div>
      <div className="row">
        <button className="one-and-a-half">enter</button>
        <button>z</button>
        <button>x</button>
        <button>c</button>
        <button>v</button>
        <button>b</button>
        <button>n</button>
        <button>m</button>
        <button className="one-and-a-half">
          <img src="../images/Backspace-Icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GameKeyboard;
