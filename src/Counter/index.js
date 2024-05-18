import React,{useState} from "react";
import "./index.css";

// Counter의 시작은 0부터 시작합니다.
const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickIncrease = () => {
    if(count < 10){
      setCount(count + 1)
    }
  };
    
  const onClickDecrease = () => {
    if(count > -10){
      setCount(count - 1)
    }
  };

  return (
    <div className="counter--container">
      <button onClick={onClickDecrease}>-</button>
      <p>{count}</p>
      <button onClick={onClickIncrease}>+</button>
    </div>
  );
};


export default Counter;
