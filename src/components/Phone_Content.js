import React from "react";
import Joke from "./Joke";
import Loading from "./Loading";

import "../css/Phone_Content.css";
import FavJoke from "./FavJoke";

const Phone_Content = ({
  jokes,
  favorites,
  isLoading,
  updateScore,
  toggleFavorite,
}) => {
  return (
    <div className="Phone_Content">
      {!isLoading.value ? (
        !favorites.isActive ? (
          <div className="Phone_Content_Main">
            {jokes.map((joke) => (
              <Joke
                key={joke.id}
                id={joke.id}
                joke={joke}
                jokeStyle={joke.jokeStyle}
                updateScore={updateScore}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="Phone_Content_Main">
            {favorites.favJokes.length === 0 && (
              <h1>You have no favorite joke!</h1>
            )}
            {favorites.favJokes.map((favJoke) => (
              <FavJoke
                key={favJoke.id}
                id={favJoke.id}
                joke={favJoke}
                jokeStyle={favJoke.jokeStyle}
              />
            ))}
          </div>
        )
      ) : (
        <Loading icon={isLoading.icon} />
      )}
    </div>
  );
};

export default Phone_Content;
