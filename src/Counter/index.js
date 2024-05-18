import React, { useState } from "react";
import "./index.css";

// Counter의 시작은 0부터 시작합니다.
const Counter = () => {
  const [Count, setCount] = useState(0);
  const CountIncrease = () =>{
    if(Count <10){
      setCount(Count  + 1);
    }
  }

  const CountDecrease = () =>{
    if(Count > -10){
      setCount(Count - 1);
    }
  }

  return (
    <div className="counter--container">
      <button onClick={CountDecrease}>-</button>
      <p>{Count}</p>
      <button onClick={CountIncrease}>+</button>
    </div>
  );
};

export default Counter;
