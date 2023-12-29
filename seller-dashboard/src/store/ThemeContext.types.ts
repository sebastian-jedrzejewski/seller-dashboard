import { pallete } from "../themes/themes.types";

export interface ThemeContextType {
  theme: string;
  colors: pallete;
  toggleTheme: () => string;
}
