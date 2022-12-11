import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";

function App() {
  const [showSolution, setShowSolution] = useState(false);

  const [wordPool, setWordPool] = useState([
    { arabic: "אימסי", hebrew: "שמי" },
  ]);

  const [usernameFromInput, setUsernameFromInput] = useState("");
  const [levelFromSelect, setLevelFromSelect] = useState(1);

  const [currentWord, setCurrentWord] = useState(wordPool[0].arabic);
  const [currentTranslation, setCurrentTranslation] = useState(
    wordPool[0].hebrew
  );
  useEffect(() => {
    setCurrentWord(wordPool[0].arabic);
    setCurrentTranslation(wordPool[0].hebrew);
    if (wordPool.length === 0) {
      console.log("need to call fetch, no wordsPool");
    }
  }, [wordPool]);
  useEffect(() => {
    // setWordPool()
    console.log("need to call fetch, no wordsPool");
  }, []);
  async function clickedUserRating(userRating) {
    console.log("clicked user Rating " + userRating);
  }
  function getWordsFromServer() {
    // const usernameFromInput = document.getElementById("usernameInput").value;
    // const levelFromSelect = document.getElementById("level").value;
    let url = window.location + usernameFromInput + "/" + levelFromSelect;
    alert("fetching from url: " + url);
    // const response = await (await fetch(url)).json();
    // console.log(await response);
    // setWordPool(response);
  }
  let arrOfLength = new Array(8).fill(null);
  return (
    <div className="App">
      <header className="App-header">
        <h1>אוצר מילים חכם</h1>
        <div>
          <input
            id="usernameInput"
            type="text"
            placeholder="Username"
            value={usernameFromInput}
            onChange={(e) => setUsernameFromInput(e.target.value)}
          ></input>
          <select
            id="level"
            name="level"
            placeholder="Level"
            onChange={(e) => setLevelFromSelect(e.target.value)}
          >
            {arrOfLength.map((option, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          {/* <select value="level">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> */}
          <button
            onClick={async () => {
              getWordsFromServer();
            }}
          >
            Get Words
          </button>
        </div>
      </header>
      <body>
        <div>
          {showSolution ? (
            <Card word={currentWord}></Card>
          ) : (
            <Card word={currentTranslation}></Card>
          )}
          <div onClick={() => setShowSolution(!showSolution)}>
            <button
              onClick={() => {
                clickedUserRating("easy");
              }}
            >
              Easy
            </button>
            <button
              onClick={() => {
                clickedUserRating("medium");
              }}
            >
              Medium
            </button>
            <button
              onClick={() => {
                clickedUserRating("hard");
              }}
            >
              Hard
            </button>
            <button
              onClick={() => {
                clickedUserRating("again");
              }}
            >
              Again
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
