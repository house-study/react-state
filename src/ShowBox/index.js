import React, { useState } from "react";
import "./index.css";
import Input from "../Input";

const ShowBox = () => {
  const [text, setText] = useState('');

  const UpdateText = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="show-box--container">
      <Input value ={text} onChange={UpdateText} />
      <p className="show-box--text">
        {text === ''? '값을 입력하세요' : text}
      </p>
    </div>
  );
};

export default ShowBox;
