import React, {useState} from "react";

const Input = (props) => {
  const [text, setTxt] = useState('');

  const updateText = (e) => {
    setTxt(e.target.value);
  }

  return <input onChange={updateText} value={text}/>;
};

export default Input;

Input.defaultProps={
  content:'값을 입력해주세요'
};