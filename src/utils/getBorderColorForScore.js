export function getBorderColorForScore(vote) {
  let color = "";

  if (vote >= 40) {
    color = "#4CAF50";
  } else if (vote >= 30) {
    color = "#8BC34A";
  } else if (vote >= 20) {
    color = "#CDDC39";
  } else if (vote >= 10) {
    color = "#FFEB3B";
  } else if (vote >= 5) {
    color = "#FFC107";
  } else if (vote < 0) {
    color = "#f44336";
  } else color = "#FF9800";

  const borderColor = {
    border: `3px solid ${color}`,
  };

  return borderColor;
}
