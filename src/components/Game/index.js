import "./Game.css";
import { useState } from "react";
import GameRow from "components/GameRow";
import GameKeyboard from "components/GameKeyboard";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Ma } from "data/Ma";
import { Oa } from "data/Oa";


const Game = () => {
  // state
  const [win, setWin] = useState(false);

  const [word, setWord] = useState([]);
  const [colIdx, setColIdx] = useState(0);
  const [rowIdx, setRowIdx] = useState(0);

  const [evaluatedWords, setEvaluatedWords] = useState([]);

  const keyStates = [
    // 1st row
    {
      id: 0,
      keyName: "q",
      state: ""
    },
    {
      id: 1,
      keyName: "w",
      state: ""
    },
    {
      id: 2,
      keyName: "e",
      state: ""
    },
    {
      id: 3,
      keyName: "r",
      state: ""
    },
    {
      id: 4,
      keyName: "t",
      state: ""
    },
    {
      id: 5,
      keyName: "y",
      state: ""
    },
    {
      id: 6,
      keyName: "u",
      state: ""
    },
    {
      id: 7,
      keyName: "i",
      state: ""
    },
    {
      id: 8,
      keyName: "o",
      state: ""
    },
    {
      id: 9,
      keyName: "p",
      state: ""
    },
    // 2nd row
    {
      id: 10,
      keyName: "a",
      state: ""
    },
    {
      id: 11,
      keyName: "s",
      state: ""
    },
    {
      id: 12,
      keyName: "d",
      state: ""
    },
    {
      id: 13,
      keyName: "f",
      state: ""
    },
    {
      id: 14,
      keyName: "g",
      state: ""
    },
    {
      id: 15,
      keyName: "h",
      state: ""
    },
    {
      id: 16,
      keyName: "j",
      state: ""
    },
    {
      id: 17,
      keyName: "k",
      state: ""
    },
    {
      id: 18,
      keyName: "l",
      state: ""
    },
    // 3rd row
    {
      id: 19,
      keyName: "z",
      state: ""
    },
    {
      id: 20,
      keyName: "x",
      state: ""
    },
    {
      id: 21,
      keyName: "c",
      state: ""
    },
    {
      id: 22,
      keyName: "v",
      state: ""
    },
    {
      id: 23,
      keyName: "b",
      state: ""
    },
    {
      id: 24,
      keyName: "n",
      state: ""
    },
    {
      id: 25,
      keyName: "m",
      state: ""
    },
  ];

  const todayIndex = 203;
  const todayWord = Ma[todayIndex];

  // actions
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
      toast.error('Not enough letters', {
        position: "top-center",
        autoClose: 200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        theme: "dark",
        transition: Flip
        });
    } else {
      let curLetter = "";
      for (let index = 0; index < word.length; index++) {
        const element = word[index];
        curLetter += element.text;
      }
      if (![...Oa, ...Ma].includes(curLetter)) {
        toast.error('Not in word list', {
          position: "top-center",
          autoClose: 200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          theme: "dark",
          transition: Flip
          });
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
              for (const obj in keyStates) {
                if (obj.keyName === element.text)
                {
                  obj.state = "correct";
                }
              }
              console.log(element);
              console.log(keyStates);
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
    if (colIdx > 0) {
      const newIndex = colIdx - 1;
      setWord(word.filter((letter) => letter.id !== colIdx - 1));
      setColIdx(newIndex);
    }
  };

  // view
  const gameRows = evaluatedWords.map((eword, index) => {
    return (<GameRow key={(index)} letters={eword} />)
  })

  gameRows.push(<GameRow key={evaluatedWords.length} letters={word} />);
  if (evaluatedWords.length < 6) {
    for (let i = evaluatedWords.length + 1; i < 6; i++) {
      gameRows.push(<GameRow key={i} letters={[]} />);
    }
  }
  return (
    <div id="game">
      <div id="board-container">
        <div id="board" style={{ width: "350px", height: "420px" }}>
          {gameRows}
        </div>
      </div>
      {win ? (
        <GameKeyboard
          onClick={(key) => key}
          onEnter={(key) => key}
          onDelete={(key) => key}
          keyStates={keyStates}
        />
      ) : (
        <GameKeyboard
          onClick={onKeyClick}
          onEnter={onEnterClick}
          onDelete={onBackspaceClick}
          keyStates={keyStates}
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Game;
