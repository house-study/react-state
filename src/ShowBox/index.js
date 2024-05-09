import React from "react";
import "./index.css";
import Input from "../Input";

const ShowBox = () => {
  return (
    <div className="show-box--container">
      <Input />
      <p className="show-box--text">
        {/* 여기 안에 Input에서 입력한 값이 나와야 해요. 주석은 지워주세요 */}
      </p>
    </div>
  );
};

export default ShowBox;
