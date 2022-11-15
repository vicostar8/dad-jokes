import React from "react";

import "../css/Joke.css";

import Joke_Favorite from "./Joke_Favorite";
import Joke_Emoji from "./Joke_Emoji";
import Joke_Vote from "./Joke_Vote";

const Joke = ({ joke, jokeStyle, updateScore, toggleFavorite }) => {
  return (
    <div className="Joke_Div">
      <div className="Joke" style={jokeStyle}>
        {joke.text}
        <Joke_Favorite
          id={joke.id}
          isFavorite={joke.isFavorite}
          toggleFavorite={toggleFavorite}
        />
        <Joke_Vote id={joke.id} vote={joke.votes} updateScore={updateScore} />
        <Joke_Emoji vote={joke.votes} />
      </div>
    </div>
  );
};

export default Joke;
