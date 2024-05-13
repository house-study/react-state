import React, { useState } from "react";
import "./index.css";
import Input from "../Input";

function ShowBox() {

  const [text, setText] = useState("");
  
  const InputChange = (e) => {
  const inputText = e.target.value;

  setText(inputText);
};

  return (
    <div className="show-box--container">
      <Input onChange={InputChange} value={text}/>
      <p className="show-box--text">
        {text ? text : "값을 입력해주세요"}
      </p>
    </div>
  );
};
export default ShowBox;
