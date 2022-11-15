import React from "react";

import "../css/Joke_Emoji.css";

import { generateEmoji } from "../utils/generateEmoji";

const Joke_Emoji = ({ vote }) => {
  return <i className={`em ${generateEmoji(vote)} Joke_Emoji`}></i>;
};

export default Joke_Emoji;
