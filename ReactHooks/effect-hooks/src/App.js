import { useReducer, useEffect } from "react";
import "./App.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  useEffect(() => console.log("Count is:", count), [count]);

  return (
    <div className="counter-container">
      <p className="count">{count}</p>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
};
export default App;
