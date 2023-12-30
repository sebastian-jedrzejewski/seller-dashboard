import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { LANGUAGES, Language, POLISH } from "../../../locale/languages";
import classes from "./inputs.module.css";

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(POLISH);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: Language) => {
    i18n.changeLanguage(language.code);
    setSelectedLanguage(language);
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={handleClick} size="medium">
        <Box component="img" width="32px" src={selectedLanguage.flagIcon} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {LANGUAGES.map((language) => {
          return (
            <MenuItem
              onClick={() => handleLanguageSelect(language)}
              className={
                language.code === selectedLanguage.code ? classes.selected : ""
              }
              key={language.code}
            >
              <Box
                component="img"
                width="32px"
                src={language.flagIcon}
                sx={{ mr: 1 }}
              />
              {language.label}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default SelectLanguage;
