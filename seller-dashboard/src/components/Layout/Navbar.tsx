import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeContext } from "../../store/ThemeContext";
import SelectLanguage from "../UI/inputs/SelectLanguage";
import SelectTheme from "../UI/inputs/SelectTheme";
import avatar from "../../assets/avatar.jpg";
import SidebarDrawer from "./SidebarDrawer";
import SelectStock from "../UI/inputs/SelectStock";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { colors } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: colors.primary100,
          borderBottom: `2px solid ${colors.accent}`,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <SelectStock />
          <Box sx={{ flexGrow: 1 }}></Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mx: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SelectLanguage />
              <SelectTheme />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: "1rem", color: colors.text }}
            >
              Robert Fox
            </Typography>
            <Avatar sx={{ bgcolor: colors.primary300 }} src={avatar} />
          </Box>
        </Toolbar>
      </AppBar>
      <SidebarDrawer isOpen={mobileOpen} toggleHandler={handleDrawerToggle} />
    </>
  );
};

export default Navbar;
