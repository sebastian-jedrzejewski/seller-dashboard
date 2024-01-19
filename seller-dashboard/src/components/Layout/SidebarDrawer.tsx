import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarsIcon from "@mui/icons-material/Stars";
import CommentIcon from "@mui/icons-material/Comment";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../store/ThemeContext";
import { logoutUser } from "../../store/redux/actions";

const drawerWidth = 240;

type Props = {
  isOpen: boolean;
  toggleHandler: () => void;
};

const SidebarDrawer: React.FC<Props> = (props) => {
  const { colors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignOut = () => {
    /* @ts-ignore */
    dispatch(logoutUser());
    navigate("/login");
  };

  const menuItems = [
    { icon: <HomeIcon />, text: t("home"), isActive: true },
    { icon: <BookmarkBorderIcon />, text: t("orders") },
    { icon: <StarsIcon />, text: t("salesQuality") },
    { icon: <CommentIcon />, text: t("opinions") },
  ];

  const drawer = (
    <>
      <Toolbar />
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <List sx={{ color: colors.text }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {React.cloneElement(item.icon, {
                    sx: {
                      color: item.isActive
                        ? colors.secondary200
                        : colors.accent,
                    },
                  })}
                </ListItemIcon>
                <ListItemText
                  sx={{ color: item.isActive ? colors.secondary200 : "" }}
                >
                  {item.text}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{ color: colors.text }}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleSignOut}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: colors.accent }} />
              </ListItemIcon>
              <ListItemText>{t("logout")}</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={props.isOpen}
        onClose={props.toggleHandler}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: colors.primary100,
            borderRight: `2px solid ${colors.accent}`,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: colors.primary100,
            borderRight: `2px solid ${colors.accent}`,
          },
          display: { xs: "none", md: "block" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
