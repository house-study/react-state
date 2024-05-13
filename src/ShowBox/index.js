import React, { useState } from "react";
import "./index.css";
import Input from "../Input";

const ShowBox = () => {
  const [input, setInput] = useState("");
   
  const changeInput = (e) =>{
    e.preventDefault();
    setInput(e.target.value);
    
  }
  return (
    <div className="show-box--container">
      <Input value={input} onChange ={changeInput} />
      <p className="show-box--text">
      {
        input==="" ? (    
            <p>Please input</p>       
        ) : (
          <p>Input words :{ input}</p>
        )
      }
      </p>
    </div>
  );
};

export default ShowBox;
