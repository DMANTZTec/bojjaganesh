import { useEffect, useLayoutEffect, useRef } from "react";
import "./index.css";

const UseRef = () => {
  const inputValue = useRef("Default");

  const onChange = () => {
    inputValue.current.focus();
    console.log(inputValue.current.value);
  };

  useEffect(() => {
    inputValue.current.focus();
    console.log(inputValue.current.value)
  },[]);

  useLayoutEffect(() => {
    console.log(inputValue.current.value);
  });

  return (
    <div className="container">
      <p className="name">{inputValue.current}</p>
      <input type="text" placeholder="Enter the name" ref={inputValue} />
      <button className="change-btn" type="button" onClick={onChange}>
        Change Name
      </button>
    </div>
  );
};

export default UseRef;
