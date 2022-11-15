import React from "react";
import Phone_BottomBar_Reset from "./Phone_BottomBar_Reset";
import Phone_BottomBar_NewJoke from "./Phone_BottomBar_NewJoke";
import Phone_BottomBar_Favorites from "./Phone_BottomBar_Favorites";

import "../css/Phone_BottomBar.css";

const Phone_BottomBar = ({ generateNewJoke, resetPanel, toggleView }) => {
  return (
    <div className="Phone_BottomBar">
      <Phone_BottomBar_Favorites toggleView={toggleView} />
      <Phone_BottomBar_NewJoke generateNewJoke={generateNewJoke} />
      <Phone_BottomBar_Reset resetPanel={resetPanel} />
    </div>
  );
};

export default Phone_BottomBar;
