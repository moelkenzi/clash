import { ImageURISource } from "react-native";

export type CharacterData = {
  id: number;
  url: any;
  fav: string;
  title: string;
};

export const Data: CharacterData[] = [
  {
    id: 1,
    url: require("@/assets/characters/2.png"),
    fav: "1.47k Fav",
    title: "Clanser",
  },
  {
    id: 2,
    url: require("@/assets/characters/3.png"),
    fav: "1.65k Fav",
    title: "Kalthor",
  },
  {
    id: 3,
    url: require("@/assets/characters/4.png"),
    fav: "1.22k Fav",
    title: "Zypher",
  },
  {
    id: 4,
    url: require("@/assets/characters/5.png"),
    fav: "2.13k Fav",
    title: "Seraphina",
  },
  {
    id: 5,
    url: require("@/assets/characters/6.png"),
    fav: "1.97k Fav",
    title: "Korrax",
  },
  {
    id: 6,
    url: require("@/assets/characters/7.png"),
    fav: "3.04k Fav",
    title: "Aeloria",
  },
  {
    id: 7,
    url: require("@/assets/characters/8.png"),
    fav: "1.54k Fav",
    title: "Falgar",
  },
  {
    id: 8,
    url: require("@/assets/characters/9.png"),
    fav: "2.33k Fav",
    title: "Lunara",
  },
  {
    id: 9,
    url: require("@/assets/characters/10.png"),
    fav: "1.89k Fav",
    title: "Braxor",
  },
  {
    id: 10,
    url: require("@/assets/characters/11.png"),
    fav: "1.76k Fav",
    title: "Thalindra",
  },
  {
    id: 11,
    url: require("@/assets/characters/12.png"),
    fav: "2.05k Fav",
    title: "Valkir",
  },
  {
    id: 12,
    url: require("@/assets/characters/13.png"),
    fav: "3.12k Fav",
    title: "Rivana",
  },
  {
    id: 13,
    url: require("@/assets/characters/14.png"),
    fav: "1.60k Fav",
    title: "Xenor",
  },
  {
    id: 14,
    url: require("@/assets/characters/15.png"),
    fav: "1.99k Fav",
    title: "Eryndor",
  },
];

// Shuffle function to randomize the array
function shuffleArray(array: CharacterData[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
}

// Randomize the order of the characters
export const randomizedData = shuffleArray(Data);

//
// Live Card Data

// Random gradient colors
// const gradientColors = [
//   { startColor: "#a35f49", endColor: "#d38d75" },
//   { startColor: "#5f73af", endColor: "#8fa1d5" },
//   { startColor: "#7da38b", endColor: "#4e756d" },
//   { startColor: "#6f5b9f", endColor: "#9d81c8" },
//   { startColor: "#8d4a3c", endColor: "#d97b6a" },
//   { startColor: "#FFC548", endColor: "#FF7D42" },
//   { startColor: "#FF6F61", endColor: "#D23E2A" },
// ];

const gradientColors = [
  // Vibrant Gradients
  { startColor: "#FF6B6B", endColor: "#4ECDC4" }, // Coral to Turquoise
  { startColor: "#8E2DE2", endColor: "#4A00E0" }, // Purple to Dark Blue
  { startColor: "#00B4DB", endColor: "#0083B0" }, // Sky Blue to Deep Blue
  { startColor: "#43C6AC", endColor: "#191654" }, // Teal to Navy
  { startColor: "#A8FF78", endColor: "#78FFD6" }, // Lime to Aqua
  { startColor: "#F46B45", endColor: "#EEA849" }, // Orange to Yellow
  { startColor: "#8E54E9", endColor: "#4776E6" }, // Purple to Blue
  { startColor: "#FF5F6D", endColor: "#FFC371" }, // Red to Peach
  { startColor: "#1A2980", endColor: "#26D0CE" }, // Navy to Teal
  { startColor: "#00F260", endColor: "#0575E6" }, // Green to Blue
  { startColor: "#7F00FF", endColor: "#E100FF" }, // Purple to Magenta
  { startColor: "#1E9600", endColor: "#FFF200" }, // Green to Yellow to Red
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#f12711", endColor: "#f5af19" }, // Red to Yellow
  { startColor: "#7b4397", endColor: "#dc2430" }, // Purple to Red
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
  { startColor: "#11998e", endColor: "#38ef7d" }, // Teal to Green
  { startColor: "#fc4a1a", endColor: "#f7b733" }, // Orange to Yellow
  { startColor: "#4568dc", endColor: "#b06ab3" }, // Blue to Purple
  { startColor: "#f46b45", endColor: "#eea849" }, // Orange to Yellow
  { startColor: "#00c6ff", endColor: "#0072ff" }, // Light Blue to Dark Blue
  { startColor: "#00b09b", endColor: "#96c93d" }, // Teal to Lime
  { startColor: "#3a7bd5", endColor: "#00d2ff" }, // Blue to Cyan
  { startColor: "#ff7e5f", endColor: "#feb47b" }, // Peach to Light Orange
  { startColor: "#6a11cb", endColor: "#2575fc" }, // Deep Purple to Blue
];

// Function to get a random gradient
const getRandomGradient = () => {
  return gradientColors[Math.floor(Math.random() * gradientColors.length)];
};

export type LiveCardData = {
  id: number;
  image: ImageURISource;
  title: string;
  rating: number;
  live: number;
  tag: string;
  customGradient: ReturnType<typeof getRandomGradient>;
};

export const liveCardData = [
  {
    id: 1,
    image: require("@/assets/image/image-01.png"),
    title: "Clash of Clan Get",
    rating: 4.2,
    live: 3452,
    tag: "#Clansof #Victory",
    customGradient: getRandomGradient(),
  },
  {
    id: 2,
    image: require("@/assets/image/image-02.png"),
    title: "Clash Royale Legends",
    rating: 4.7,
    live: 4200,
    tag: "#Clansof #Legends",
    customGradient: getRandomGradient(),
  },
  {
    id: 3,
    image: require("@/assets/image/image-03.png"),
    title: "Clan Wars Battle",
    rating: 3.8,
    live: 1890,
    tag: "#Warrior #Battle",
    customGradient: getRandomGradient(),
  },
  {
    id: 4,
    image: require("@/assets/image/image-04.png"),
    title: "Epic Clan Victory",
    rating: 4.5,
    live: 3045,
    tag: "#Legend #Battle",
    customGradient: getRandomGradient(),
  },
  {
    id: 5,
    image: require("@/assets/image/image-05.png"),
    title: "Clash of Clan Wars",
    rating: 4.3,
    live: 1854,
    tag: "#Clashof #Victory",
    customGradient: getRandomGradient(),
  },
  {
    id: 6,
    image: require("@/assets/image/image-06.png"),
    title: "Clash of Kings",
    rating: 3.9,
    live: 2478,
    tag: "#Clansof #War",
    customGradient: getRandomGradient(),
  },
  {
    id: 7,
    image: require("@/assets/image/image-07.png"),
    title: "Clan Wars Legends",
    rating: 4.6,
    live: 3125,
    tag: "#Clashof #War",
    customGradient: getRandomGradient(),
  },
  {
    id: 8,
    image: require("@/assets/image/image-08.png"),
    title: "Clash of Victory",
    rating: 4.1,
    live: 2275,
    tag: "#Clashof #Legends",
    customGradient: getRandomGradient(),
  },
  {
    id: 9,
    image: require("@/assets/image/image-09.png"),
    title: "Warrior Clash Battle",
    rating: 3.5,
    live: 3051,
    tag: "#Warrior #Victory",
    customGradient: getRandomGradient(),
  },
  {
    id: 10,
    image: require("@/assets/image/image-01.png"),
    title: "Clan Legends Rise",
    rating: 4.4,
    live: 1570,
    tag: "#Legend #Battle",
    customGradient: getRandomGradient(),
  },
];
