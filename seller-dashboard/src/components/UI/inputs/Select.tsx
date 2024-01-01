import { Box, FormControl, MenuItem } from "@mui/material";
import MUISelect, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";

import { ThemeContext } from "../../../store/ThemeContext";
import classes from "./inputs.module.css";

type Props = {
  options: { label: string; value: string }[];
  defaultValue: string;
  onSelect?: (value: any) => void;
  minWidth?: number;
};

const Select: React.FC<Props> = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  const { colors } = useContext(ThemeContext);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    if (props.onSelect) {
      props.onSelect(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: props.minWidth || 120 }}>
      <FormControl
        sx={{
          m: 1,
          minWidth: props.minWidth || 120,
          bgcolor: colors.selects,
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
        }}
      >
        <MUISelect
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ color: colors.text }}
        >
          {props.options.map((option) => {
            return (
              <MenuItem
                key={option.value}
                value={option.value}
                classes={{ selected: classes.selected }}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </MUISelect>
      </FormControl>
    </Box>
  );
};

export default Select;
