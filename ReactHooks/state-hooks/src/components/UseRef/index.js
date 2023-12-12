import { useEffect, useRef, useState } from "react";
import "./index.css";

const UseRef = () => {
  const inputValue = useRef(null);

  const onChange = () => {
    inputValue.current.focus();
    console.log(inputValue.current.value);
  };

  useEffect(() => {
    inputValue.current.focus();
  });

  return (
    <div className="container">
      <p className="name">Ganesh Kumar</p>
      <input type="text" placeholder="Enter the name" ref={inputValue} />
      <button className="change-btn" type="button" onClick={onChange}>
        Change Name
      </button>
    </div>
  );
};

export default UseRef;
