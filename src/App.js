import "./styles.css";
import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none"
};

function Square({ value, onClick }) {
  return <button style={style} value={value} onClick={onClick}></button>;
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

export default function App() {
  return (
    <div className="App">
      <div>
        <Gameboard title="Tic Tac Toe" punctuation="!" number="4" />
        <Gameboard title="hello world" number="6" />
        <Gameboard title="hi" />
        <Square value="1" onClick={() => onClick("dummy value")} />
        <Square value="2" onClick={() => onClick("dummy value")} />
        <Square value="3" onClick={() => onClick("dummy value")} />
        <Square value="4" onClick={() => onClick("dummy value")} />
        <Square value="5" onClick={() => onClick("dummy value")} />
        <Square value="6" onClick={() => onClick("dummy value")} />
        <Square value="7" onClick={() => onClick("dummy value")} />
        <Square value="8" onClick={() => onClick("dummy value")} />
        <Square value="9" onClick={() => onClick("dummy value")} />
      </div>
    </div>
  );
}
