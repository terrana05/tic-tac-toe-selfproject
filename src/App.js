import "./styles.css";
import React, { useEffect, useState } from "react";

// const square = {
//   background: "lightblue",
//   border: "2px solid darkblue",
//   fontSize: "30px",
//   fontWeight: "800",
//   cursor: "pointer",
//   outline: "none"
// };

function Square({ value, onClick }) {
  // return <button style={square} value={value} onClick={onClick}></button>;
  return (
    <div className="square" value={value} onClick={onClick}>
      {value}
    </div>
  );
}

function Gameboard(props) {
  // function Gameboard({ title, punctuation, number }) {
  return (
    <h1>
      {props.title} {props.punctuation} {props.number}{" "}
      {/* {title} {punctuation} {number} */}
    </h1>
  );
}

// const Square = ({ value, onClick }) => (
// 	<button style={style} onClick={onClick}>
// 		{value}
// 	</button>
// );

// Gameboard.map(function (square, index) {
//   return <Square key=index value={display} />
// };

export default function App() {
  const [xTurn, setXTurn] = useState(true);
  // const [display, setDisplay] = useState("");
  const [gameStatus, setGameStatus] = useState(Array(9).fill(null));

  // todo: check if the value is null before doing anything
  function handleClick(boxIndex) {
    setGameStatus((currentStatus) => {
      if (xTurn === true) {
        currentStatus[boxIndex] = "X";
      } else {
        currentStatus[boxIndex] = "0";
      }
      return currentStatus;
    });
    setXTurn((xTurn) => !xTurn);
  }

  return (
    <div className="App">
      <div>
        <Gameboard title="Tic Tac Toe" />
        {/* <Gameboard title="hello world" number="6" punctuation="!"/> 
        <Gameboard title="hi" /> */}
        <div id="squareStyle">
          {gameStatus.map(function (square, index) {
            return (
              <Square
                value={square}
                key={index}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
        {/* <div>
          <Square value={display} onClick={handleClick} />
          <Square value={display} onClick={handleClick} />
          <Square value={display} onClick={handleClick} />
        </div>

        <div>
          <Square value={display} onClick={handleClick} />
          <Square value={display} onClick={handleClick} />
          <Square value={display} onClick={handleClick} />
        </div>

        <div>
          <Square value={display} onClick={handleClick} />
          <Square value={display} onClick={handleClick} />
          <Square value={display} onClick={handleClick} />
        </div> */}
      </div>
    </div>
  );
}

// const [] null
// ['x','x','o','x','o','x','x','o','o']
// [0,1,2] || [0,3,6] || [0,4,8] [2,5,8] [2,4,7] [7,8,9] [1,4,8]
