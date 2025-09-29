// Function to generate a random color in hex format
function randomColor() {
  const rand = () => Math.floor(Math.random() * 256);
  return `#${rand().toString(16).padStart(2, "0")}${rand().toString(16).padStart(2, "0")}${rand().toString(16).padStart(2, "0")}`;
}

// Generate 5 random start and end color pairs
const randomColors = Array.from({ length: 5 }, () => ({
  startColor: randomColor(),
  endColor: randomColor(),
}));

console.log(randomColors);

// [
//     { startColor: '#a35f49', endColor: '#d38d75' },
//     { startColor: '#5f73af', endColor: '#8fa1d5' },
//     { startColor: '#4e756d', endColor: '#7da38b' },
//     { startColor: '#6f5b9f', endColor: '#9d81c8' },
//     { startColor: '#8d4a3c', endColor: '#d97b6a' }
//     { startColor: '#FFC548', endColor: '#FF7D42' }
//     { startColor: '#FF6F61', endColor: '#D23E2A' }
//   ]
