import React from "react";
import "../css/Joke_Favorite.css";

const Joke_Favorite = ({ id, isFavorite, toggleFavorite }) => {
  let myStyle = "";
  if (isFavorite) {
    myStyle = { color: "#ffcc4d" };
  } else {
    myStyle = { color: "black" };
  }

  return (
    <i
      className="bi bi-star-fill Joke_Favorite"
      onClick={() => toggleFavorite(id)}
      style={myStyle}
    ></i>
  );
};

export default Joke_Favorite;
