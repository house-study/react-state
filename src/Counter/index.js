import React, { useState } from "react";
import "./index.css";

// Counter의 시작은 0부터 시작합니다.
const Counter = () => {
  const [num, setNum] = useState(0);

  const countChange = (e) => {
  const countN = num + e; 
  
  if(countN >= -10 && countN <= 10){
    setNum(countN);
  }
};
  return (
    <div className="counter--container">
      <button onClick={() => countChange(-1)}>-</button>
      <p>{num}</p>
      <button onClick={() => countChange(+1)}>+</button>
    </div>
  );
};
export default Counter;
