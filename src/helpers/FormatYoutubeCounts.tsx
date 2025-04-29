function formatCount(count: number): string {
  if (count >= 1000000000000) {
    return (count / 1000000000000).toFixed(1) + "T"; // Trillions
  } else if (count >= 1000000000) {
    return (count / 1000000000).toFixed(1) + "B"; // Billions
  } else if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M"; // Millions
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K"; // Thousands
  }
  return count.toString(); // For smaller numbers, return as is
}


export default formatCount;