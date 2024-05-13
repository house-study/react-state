import React, { useState } from "react";
import "./index.css";
import Input from "../Input";

const ShowBox = () => {
  const [ value, setValue ] = useState('')

  const handleInput = (e) =>{
    setValue(e.target.value)
  }

  return (
    <div className="show-box--container">
      <Input value={value} onChange={handleInput} />
      <p className="show-box--text">
        {value === '' ?  '값을 입력해주세요' : value }
      </p>
    </div>
  );
};

export default ShowBox;
