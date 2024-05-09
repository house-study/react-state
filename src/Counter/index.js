import React from "react";
import "./index.css";

// Counter의 시작은 0부터 시작합니다.
const Counter = () => {
  return (
    <div className="counter--container">
      <button>-</button>
      <p>{/** 여기에 카운트가 나타납니다. 주석 삭제 후 작성해주세요 */}</p>
      <button>+</button>
    </div>
  );
};

export default Counter;
