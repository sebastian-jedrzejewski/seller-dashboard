import { Box, SxProps, Theme } from "@mui/material";
import { PropsWithChildren, useContext } from "react";

import { ThemeContext } from "../../store/ThemeContext";

type Props = {
  sx?: SxProps<Theme>;
  onClick?: () => void;
};

const Card: React.FC<PropsWithChildren<Props>> = (props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        bgcolor: colors.primary200,
        borderRadius: 10,
        border: `1px ${colors.accent} solid`,
        padding: "1rem",
        height: "100%",
        ...props.sx,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Box>
  );
};

export default Card;
