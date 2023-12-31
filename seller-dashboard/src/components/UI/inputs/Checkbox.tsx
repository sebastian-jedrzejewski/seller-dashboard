import MUICheckbox from "@mui/material/Checkbox";
import { useContext } from "react";

import { ThemeContext } from "../../../store/ThemeContext";

const Checkbox = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <MUICheckbox
      sx={{
        color: colors.accent,
        "&.Mui-checked": {
          color: colors.accent,
        },
      }}
    />
  );
};

export default Checkbox;
