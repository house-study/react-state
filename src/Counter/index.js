import React,{useState} from "react";
import "./index.css";

// Counter의 시작은 0부터 시작합니다.
const Counter = () => {
  const [cnt, setCnt] = useState(0);

  const onClickIncrease = () => {
    if(cnt < 10){
      setCnt(cnt + 1)
    }
    else{
      setCnt(10);
    }
  };
    
  const onClickDecrease = () => {
    if(cnt > -10){
      setCnt(cnt - 1)
    }
    else{
      setCnt(-10)
    };  
  };

  return (
    <div className="counter--container">
      <button onClick={onClickDecrease}>-</button>
      <p>{cnt}</p>
      <button onClick={onClickIncrease}>+</button>
    </div>
  );
};


export default Counter;
