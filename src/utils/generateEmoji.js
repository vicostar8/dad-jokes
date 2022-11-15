export function generateEmoji(vote) {
  if (vote >= 40) {
    return "em-rolling_on_the_floor_laughing";
  } else if (vote >= 35) {
    return "em-laughing";
  } else if (vote >= 30) {
    return "em-face_with_hand_over_mouth";
  } else if (vote >= 25) {
    return "em-sweat_smile";
  } else if (vote >= 20) {
    return "em-smile";
  } else if (vote >= 15) {
    return "em-grin";
  } else if (vote >= 10) {
    return "em-smiley";
  } else if (vote >= 5) {
    return "em-slightly_smiling_face";
  } else if (vote < 0) {
    return "em-angry";
  } else return "em-neutral_face";
}
