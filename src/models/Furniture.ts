import { FurnitureType } from "./FurnitureType";

export interface Furniture {
  name: string;
  location: FurnitureType["location"];
  load: number;
  comfort: number;
  enhancementLevel: number;
}
