import { useState } from "react";

import GameRow from "components/GameRow";
import GameKeyboard from "components/GameKeyboard";
import { Ma } from "data/Ma";
import { Oa } from "data/Oa";

import "./Game.css";

const Game = () => {
  const [win, setWin] = useState(false);

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
      let curLetter = "";
      for (let index = 0; index < word.length; index++) {
        const element = word[index];
        curLetter += element.text;
      }
      if (![...Oa, ...Ma].includes(curLetter)) {
        alert("Word not allowed");
      } else {
        let evaluatedWord = [];
        let correctLetters = 0;
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
              correctLetters++;
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
        if (correctLetters === 5) {
          setWin(true);
        }
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

  let rows = [];
  let i = 0;
  for (; i < evaluatedWords.length; i++) {
    const element = evaluatedWords[i];
    rows.push(<GameRow key={rowIdx} letters={element} />);
  }
  rows.push(<GameRow key={rowIdx} letters={word} />);
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
      {win ? (
        <GameKeyboard
          onClick={(key) => key}
          onEnter={(key) => key}
          onDelete={(key) => key}
        />
      ) : (
        <GameKeyboard
          onClick={onKeyClick}
          onEnter={onEnterClick}
          onDelete={onBackspaceClick}
        />
      )}
    </div>
  );
};

export default Game;
