import React, { useState } from "react";
import "./index.css";

// Counter의 시작은 0부터 시작합니다.
const Counter = () => {
  const [count, setCount] = useState(0);
  
  const clickPlus = () =>{
    if(count <10){
      setCount(count+1);
    }
    else{
      alert("10이 최대입니다!");
    }
  }

  const clickMinus = () =>{
    if(count>-10 ){
      setCount(count-1);
    }
    else{
      alert("-10이 최소입니다!");
    }
  }

  return (
    <div className="counter--container">
      <button onClick={clickMinus}>-</button>
      <p>{
          count
        }{}
        </p>
      <button onClick={clickPlus}>+</button>
    </div>
  );
};

export default Counter;
