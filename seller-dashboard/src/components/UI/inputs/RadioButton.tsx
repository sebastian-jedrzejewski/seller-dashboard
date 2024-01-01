import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";

import { ThemeContext } from "../../../store/ThemeContext";

type Props = {
  formLabel: string;
  options: { label: string; value: string }[];
};

const RadioButton: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState(props.options[0].value);
  const { colors } = React.useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormLabel id="radio-buttons-group" sx={{ color: colors.text }}>
        {props.formLabel}
      </FormLabel>
      <FormControl>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {props.options.map((option) => {
            return (
              <FormControlLabel
                value={option.value}
                control={
                  <Radio
                    disableRipple
                    sx={{
                      "&, &.Mui-checked": {
                        color: colors.accent,
                      },
                    }}
                  />
                }
                label={option.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default RadioButton;
