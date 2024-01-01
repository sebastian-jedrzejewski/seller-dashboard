import { Box, SxProps, Theme } from "@mui/material";
import { PropsWithChildren, useContext } from "react";

import { ThemeContext } from "../../store/ThemeContext";

type Props = {
  sx?: SxProps<Theme>;
};

const Card: React.FC<PropsWithChildren<Props>> = (props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        bgcolor: colors.primary200,
        borderRadius: 10,
        padding: "1rem",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default Card;
