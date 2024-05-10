import React, { useState } from "react";
import "./index.css";
import Input from "../Input";

const ShowBox = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="show-box--container">
      <Input onChange={handleChange} />
      <p role="paragraph" className="show-box--text">
        {text || "값을 입력해주세요"}
      </p>
    </div>
  );
};

export default ShowBox;
