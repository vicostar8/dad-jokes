import React from "react";

import "../css/Joke_Vote.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { getBorderColorForScore } from "../utils/getBorderColorForScore";

const Joke_Vote = ({ id, vote, updateScore }) => {
  return (
    <div className="Joke_Vote" style={getBorderColorForScore(vote)}>
      <i
        className="bi bi-arrow-up AnimUp"
        onClick={() => updateScore(id, 1)}
      ></i>
      <div className="Joke_Vote_Score">{vote}</div>
      <i
        className="bi bi-arrow-down AnimDown"
        onClick={() => updateScore(id, -1)}
      ></i>
    </div>
  );
};

export default Joke_Vote;
