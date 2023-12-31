import { SxProps, Theme } from "@mui/material";
import MUIButton from "@mui/material/Button";
import { PropsWithChildren, useContext } from "react";

import { ThemeContext } from "../../../store/ThemeContext";

type Props = {
  sx?: SxProps<Theme>;
  onClick?: () => void;
};

const Button: React.FC<PropsWithChildren<Props>> = (props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <MUIButton
      variant="contained"
      sx={{
        backgroundColor: colors.secondary200,
        "&:hover": {
          backgroundColor: colors.secondary100,
        },
        ...props.sx,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
