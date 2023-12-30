import { Box, Toolbar } from "@mui/material";
import { useContext } from "react";

import Navbar from "./Navbar";
import { ThemeContext } from "../../store/ThemeContext";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: colors.primary100,
            color: colors.text,
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
