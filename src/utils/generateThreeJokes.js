import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { generatePositionForJoke } from "../utils/generatePositionForJoke";

export async function generateThreeJokes() {
  try {
    let set = new Set();
    let threeJokes = [];

    while (set.size < 3) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      set.add(res.data.joke);
    }

    for (let joke of set) {
      threeJokes.push({
        id: uuidv4(),
        text: joke,
        votes: 0,
        isFavorite: false,
        jokeStyle: generatePositionForJoke(),
      });
    }
    return threeJokes;
  } catch (e) {
    console.log("Joke cannot be retrieved: ", e);
  }
}
