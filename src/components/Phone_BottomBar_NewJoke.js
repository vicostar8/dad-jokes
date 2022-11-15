import React from "react";

const Phone_BottomBar_NewJoke = ({ generateNewJoke }) => {
  return (
    <div className="Phone_BottomBar_Emoji_Back">
      <i
        className="em em-sunglasses Phone_BottomBar_Emoji"
        onClick={generateNewJoke}
      ></i>
    </div>
  );
};

export default Phone_BottomBar_NewJoke;
