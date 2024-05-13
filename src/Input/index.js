import React from "react";



const Input = ({value, onChange}) => {
  return(
    <div>
      <p> Type anything! </p>
      <input value={value} onChange={onChange} />
   </div>
  )
};

export default Input;
