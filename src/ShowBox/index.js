import React from "react";
import "./index.css";
import Input from "../Input";

const ShowBox = (props) => {
  return (
    <div className="show-box--container">
      <Input value="text"/>
      <p className="show-box--text">
        {/* {여기에 표시가 되어야 합니다.} */}
      </p>
    </div>
  );
};

ShowBox.defaultProps = {
  text: ''
};

export default ShowBox;