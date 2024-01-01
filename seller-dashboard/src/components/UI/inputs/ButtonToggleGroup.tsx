import { useContext, useState } from "react";
import { Box, SxProps, Theme } from "@mui/material";

import Button from "./Button";
import { ThemeContext } from "../../../store/ThemeContext";

type Props = {
  options: { label: string; value: string }[];
  defaultValue: string;
  containerSx?: SxProps<Theme>;
  onSelect?: (value: any) => void;
};

const ButtonToggleGroup: React.FC<Props> = (props) => {
  const { colors } = useContext(ThemeContext);
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);

  const handleButtonClick = (value: string) => {
    setSelectedOption(value);
    if (props.onSelect) {
      props.onSelect(value);
    }
  };

  return (
    <Box sx={props.containerSx}>
      {props.options.map((option) => {
        return (
          <Button
            key={option.value}
            onClick={() => handleButtonClick(option.value)}
            sx={{
              mr: 2,
              backgroundColor:
                selectedOption === option.value
                  ? colors.secondary300
                  : colors.secondary100,
              "&:hover": {
                backgroundColor:
                  selectedOption === option.value
                    ? colors.secondary300
                    : colors.secondary200,
              },
            }}
          >
            {option.label}
          </Button>
        );
      })}
    </Box>
  );
};

export default ButtonToggleGroup;
