import "./Game.css";
import { useState } from "react";
import GameRow from "./GameRow";
import GameKeyboard from "./GameKeyboard";
import { Ma } from "./Ma";
import { Oa } from "./Oa";

const Game = () => {
  const [word, setWord] = useState([]);
  const [colIdx, setColIdx] = useState(0);
  const [rowIdx, setRowIdx] = useState(0);

  const [evaluatedWords, setEvaluatedWords] = useState([]);

  const todayIndex = 203;
  const todayWord = Ma[todayIndex];
  const onKeyClick = (key) => {
    if (colIdx < 5) {
      const newLetter = {
        id: colIdx,
        state: "tbd",
        anim: "pop",
        text: key,
      };
      setWord([...word, newLetter]);
      const newIndex = colIdx + 1;
      setColIdx(newIndex);
    }
  };

  const onEnterClick = () => {
    if (colIdx < 5) {
      alert("Not enough letter");
    } else {
      var curLetter = "";
      for (let index = 0; index < word.length; index++) {
        const element = word[index];
        curLetter += element.text;
      }
      if (![...Oa, ...Ma].includes(curLetter)) {
        alert("Word not allowed");
      } else {
        var evaluatedWord = [];
        for (let index = 0; index < word.length; index++) {
          const element = word[index];
          const pos = todayWord.indexOf(element.text);
          if (pos > -1) {
            if (pos === index) {
              evaluatedWord.push({
                id: index,
                state: "correct",
                anim: "flip-in",
                text: element.text,
              });
            } else {
              evaluatedWord.push({
                id: index,
                state: "present",
                anim: "flip-in",
                text: element.text,
              });
            }
          } else {
            evaluatedWord.push({
              id: index,
              state: "absent",
              anim: "flip-in",
              text: element.text,
            });
          }
        }
        setWord([]);
        setEvaluatedWords([...evaluatedWords, evaluatedWord]);
        setColIdx(0);
        setRowIdx(rowIdx + 1);
      }
    }
  };

  const onBackspaceClick = () => {
    if (colIdx === 0) {
      alert("Nothing to delete");
    } else {
      const newIndex = colIdx - 1;
      setWord(word.filter((letter) => letter.id !== colIdx - 1));
      setColIdx(newIndex);
    }
  };

  var rows = [];
  var i = 0;
  for (; i < evaluatedWords.length; i++) {
    const element = evaluatedWords[i];
    rows.push(<GameRow letters={element} />);
  }
  rows.push(<GameRow letters={word} />);
  i++;
  if (evaluatedWords.length < 6) {
    for (; i < 6; i++) {
      rows.push(<GameRow letters={[]} />);
    }
  }
  return (
    <div id="game">
      <div id="board-container">
        <div id="board" style={{ width: "350px", height: "420px" }}>
          {rows.map((row) => row)}
        </div>
      </div>
      <GameKeyboard
        onClick={onKeyClick}
        onEnter={onEnterClick}
        onDelete={onBackspaceClick}
      />
    </div>
  );
};

export default Game;
