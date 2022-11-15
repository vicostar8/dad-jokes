import React, { Component } from "react";
import Phone_TopBar from "./Phone_TopBar";
import Phone_Content from "./Phone_Content";
import Phone_BottomBar from "./Phone_BottomBar";

import "../css/Phone.css";

import { generateThreeJokes } from "../utils/generateThreeJokes";
import { getNewJoke } from "./../utils/getNewJoke";
import { getLoadingIcon } from "./../utils/loadingIcons";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      favorites: { favJokes: [], isActive: false },
      isLoading: { value: false, icon: getLoadingIcon() },
    };

    this.updateScore = this.updateScore.bind(this);
    this.generateNewJoke = this.generateNewJoke.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.resetPanel = this.resetPanel.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  async componentDidMount() {
    const jokes = await generateThreeJokes();
    this.setState({ jokes });
  }

  updateScore(id, operator) {
    const jokes = this.state.jokes;
    jokes.map((joke) => {
      if (joke.id === id) {
        joke.votes += operator;
        return joke;
      } else return joke;
    });
    this.setState({ jokes });
  }

  async generateNewJoke() {
    const jokes = await getNewJoke(this.state.jokes);
    this.setState(
      { isLoading: { value: true, icon: getLoadingIcon() }, jokes },
      () => {
        let time = Math.floor(Math.random() * 3 + 1) * 1000;
        setTimeout(
          () =>
            this.setState({
              isLoading: { value: false, icon: "" },
            }),
          time
        );
      }
    );
  }

  toggleFavorite(id) {
    const jokes = this.state.jokes;
    const favorites = this.state.favorites;

    jokes.map((joke) => {
      if (joke.id === id) {
        if (!joke.isFavorite) {
          joke.isFavorite = !joke.isFavorite;
          favorites.favJokes.push(joke);
        } else {
          joke.isFavorite = !joke.isFavorite;
          let favJokes = favorites.favJokes.filter(
            (favJoke) => favJoke.id !== id
          );
          favorites.favJokes = favJokes;
        }
      }
    });
    this.setState({ jokes, favorites });
  }

  async resetPanel() {
    this.setState(
      {
        isLoading: { value: true, icon: getLoadingIcon() },
        jokes: await generateThreeJokes(),
      },
      () => {
        let time = Math.floor(Math.random() * 10 + 1) * 1000;
        setTimeout(
          async () =>
            this.setState({
              jokes: await generateThreeJokes(),
              favorites: { favJokes: [], isActive: false },
              isLoading: { value: false, icon: getLoadingIcon() },
            }),
          time
        );
      }
    );
  }

  toggleView() {
    const favorites = this.state.favorites;
    favorites.isActive = !favorites.isActive;
    this.setState({ favorites });
  }

  render() {
    const { jokes, favorites, isLoading } = this.state;

    return (
      <div className="Phone">
        <Phone_TopBar />
        <Phone_Content
          jokes={jokes}
          favorites={favorites}
          isLoading={isLoading}
          updateScore={this.updateScore}
          toggleFavorite={this.toggleFavorite}
        />
        <Phone_BottomBar
          generateNewJoke={this.generateNewJoke}
          resetPanel={this.resetPanel}
          toggleView={this.toggleView}
        />
      </div>
    );
  }
}

export default Phone;
