export interface CardResponse {
  items: Item[];
  supportItems: SupportItem[];
}

interface SupportItem {
  name: string;
  id: number;
  maxLevel: number;
  iconUrls: ImageUrl;
  rarity: string;
}

interface ImageUrl {
  medium: string;
}

export interface Item {
  name: string;
  id: number;
  maxLevel: number;
  maxEvolutionLevel?: number;
  elixirCost?: number;
  iconUrls: IconUrls;
  rarity: string;
}

interface IconUrls {
  medium: string;
  evolutionMedium?: string;
}
