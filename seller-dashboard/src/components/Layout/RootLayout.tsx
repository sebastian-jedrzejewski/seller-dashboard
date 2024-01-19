import { Box, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import { ThemeContext } from "../../store/ThemeContext";

const RootLayout = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: colors.primary100,
            color: colors.text,
            position: "relative",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default RootLayout;
