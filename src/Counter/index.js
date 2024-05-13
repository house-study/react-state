import React, { useState } from "react";
import "./index.css";

const Counter = () => {
  const [ count, setCount ] = useState(0)

  const handleMinus = () => {
    if(count > -10){
      setCount(count-1)
    }
  }

  const handlePlus = () => {
    if(count < 10){
      setCount(count+1)
    }
  }

  return (
    <div className="counter--container">
      <button onClick={handleMinus} >-</button>
      <p>{count}</p>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Counter;
