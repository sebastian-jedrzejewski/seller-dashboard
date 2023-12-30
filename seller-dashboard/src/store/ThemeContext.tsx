import { PropsWithChildren, createContext, useState } from "react";

import { ThemeContextType } from "./ThemeContext.types";
import { Theme } from "../themes/themes.types";
import { darkTheme, lightTheme } from "../themes/themes";

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.DARK,
  colors: darkTheme,
  toggleTheme: () => "",
});

export const ThemeContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [theme, setTheme] = useState(Theme.DARK);

  const toggleTheme = () => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
      return Theme.LIGHT;
    }
    setTheme(Theme.DARK);
    return Theme.DARK;
  };

  const getColors = () => {
    if (theme === Theme.DARK) {
      return darkTheme;
    }
    return lightTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: getColors(), toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
