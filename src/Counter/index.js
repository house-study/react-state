import React,{useState} from "react";
import "./index.css";

// Counter의 시작은 0부터 시작합니다.
const Counter = () => {
  const [cnt, setCnt] = useState(0);

  const onClickIncrease = () => {setCnt(cnt + 1)};
  const onClickDecrease = () => {setCnt(cnt - 1)};

  return (
    <div className="counter--container">
      <button onClick={onClickDecrease}>-</button>
      <p>{cnt}</p>
      <button onClick={onClickIncrease}>+</button>
    </div>
  );
};

export default Counter;
