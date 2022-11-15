import React from "react";
import Joke_Emoji from "./Joke_Emoji";

import "../css/FavJoke.css";

const FavJoke = ({ joke, jokeStyle }) => {
  return (
    <div className="FavJoke_Div">
      <div className="FavJoke" style={jokeStyle}>
        {joke.text}
        <Joke_Emoji vote={joke.votes} />
      </div>
    </div>
  );
};

export default FavJoke;
