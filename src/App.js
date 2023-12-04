import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

function positiveCount() {
  setCount(count +1);
}

function negativeCount() {
  setCount(count -1);
}

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={negativeCount}
        >
          -
        </button>
        <button
          type="button"
          onClick={negativeCount}
          
        >
          +
        </button>
      </div>
    </div>
  );
}
