import MUICheckbox from "@mui/material/Checkbox";
import { useContext } from "react";

import { ThemeContext } from "../../../store/ThemeContext";

type Props = {
  onChange?: (value: boolean) => void;
};

const Checkbox: React.FC<Props> = (props) => {
  const { colors } = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  };

  return (
    <MUICheckbox
      onChange={handleChange}
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
