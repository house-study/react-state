import React from "react";

const Input = ({onChange, value}) => {
  return (<input
          value={value}
          onChange={onChange}    
    />
  );
};

export default Input;
