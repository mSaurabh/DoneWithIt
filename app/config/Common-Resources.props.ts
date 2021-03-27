export enum colors {
  PRIMARY = "#fc5c65",
  SECONDARY = "#4ecdc4",
  BLACK = "#000",
  WHITE = "#fff",
  DARK = "#0c0c0c",
  MEDIUM = "#6e6969",
  LIGHT = "#f8f4f4",
  BLUE = "#06c",
  PURPLE = "purple",
  GOLD = "gold",
  DANGER = "#ff5252",
  FURNITURE = "#fc5c65",
  CARS = "#fd9644",
  CAMERAS = "#fed330",
  GAMES = "#26de81",
  CLOTHING = "#2bcbba",
  SPORTS = "#45aaf2",
  MOVIESMUSIC = "#4b7bec",
}

export interface dItems {
  label: string;
  value: number;
  color?: string;
  icon?: string;
}
