export interface FurnitureType {
  label: string;
  category: string;
  location:
    | "wall"
    | "floor"
    | "carpet"
    | "wallpaper"
    | "furniture"
    | "wall_decor"
    | "ceiling_decor";
}
