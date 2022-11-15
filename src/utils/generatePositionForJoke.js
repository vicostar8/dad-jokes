export function generatePositionForJoke() {
  const position = Math.random() < 0.5 ? true : false;

  if (position)
    return {
      marginLeft: "auto",
      backgroundColor: "#C5ECFF",
    };
  else
    return {
      marginRight: "auto",
      backgroundColor: "#FF9DBE",
    };
}
