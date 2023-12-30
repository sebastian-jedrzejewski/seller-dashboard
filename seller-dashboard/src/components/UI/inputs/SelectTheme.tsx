import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";

import { ThemeContext } from "../../../store/ThemeContext";
import { Theme } from "../../../themes/themes.types";

const SelectTheme = () => {
  const { theme, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <IconButton size="medium" onClick={toggleTheme}>
      {theme === Theme.DARK ? (
        <DarkModeIcon sx={{ color: colors.text }} />
      ) : (
        <LightModeIcon sx={{ color: colors.text }} />
      )}
    </IconButton>
  );
};

export default SelectTheme;
