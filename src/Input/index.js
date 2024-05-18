import React, {useState} from "react";

const Input = () => {
  const [text, setText] = useState('');
  const DISPLAY_EMPTY = '값을 입력해주세요';

  const updateText = (e) => {
      setText(e.target.value);
  }
  return (
  <div className="show-box--container">
    <input onChange={updateText} value={text} />
    <p className="show-box--text">
    {text === '' ? DISPLAY_EMPTY : text}
    </p>
    </div>
    );
};

export default Input;