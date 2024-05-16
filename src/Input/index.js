import React, {useState} from "react";

const Input = () => {
  const [text, setTxt] = useState('');
  const displayNull = '값을 입력하세요';

  const updateText = (e) => {
      setTxt(e.target.value);
  }
  return (
  <div className="show-box--container">
    <input onChange={updateText} value={text} />
    <p className="show-box--text">
    {text === '' ? displayNull : text}
    </p>
    </div>
    );
};

export default Input;