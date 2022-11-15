import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { generatePositionForJoke } from "./generatePositionForJoke";

export async function getNewJoke(jokes) {
  const jokesSize = jokes.length;

  while (jokes.length === jokesSize) {
    const res = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    jokes.push({
      id: uuidv4(),
      text: res.data.joke,
      votes: 0,
      isFavorite: false,
      jokeStyle: generatePositionForJoke(),
    });
    jokes.filter((joke) => joke.text !== res.data.joke);
  }
  return jokes;
}
