import "./styles.css";
import React, { useState } from "react";

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
    <button className="square" value={value} onClick={onClick}>
      {value}
    </button>
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

{Gameboard.map(function (square, index) {
  return <Square key=index value={display} />

export default function App() {
  const [xTurn, setXTurn] = useState(true);
  const [display, setDisplay] = useState("");

  function handleClick() {
    console.log("xTurn", xTurn);
    setXTurn(!xTurn);

    if (xTurn === "true") {
      setDisplay("X");
      console.log("display", display);
    } else {
      setDisplay("O");
      console.log("display", display);
    }
  }

  return (
    <div className="App">
      <div>
        <Gameboard title="Tic Tac Toe" />
        {/* <Gameboard title="hello world" number="6" punctuation="!"/> 
        <Gameboard title="hi" /> */}
        <div>
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
        </div>
      </div>
    </div>
  );
}

