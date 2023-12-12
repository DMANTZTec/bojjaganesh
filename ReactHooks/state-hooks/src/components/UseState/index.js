import { useState } from "react";
import "./index.css";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Default");
  const onInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  const onCount = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="head">Click Counter</h1>
        <p className="count">{counter}</p>
        <button className="count-btn" onClick={onCount}>
          Click To Count
        </button>
      </div>
      <div className="app-card">
        <input
          type="text"
          placeholder="Enter the text to be displayed"
          onChange={onInputChange}
          className="input-style"
        />
        <p className="text">{inputValue}</p>
      </div>
    </div>
  );
};

export default UseState;
