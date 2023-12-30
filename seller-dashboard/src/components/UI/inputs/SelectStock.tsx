import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext, useState } from "react";

import { ThemeContext } from "../../../store/ThemeContext";
import classes from "./inputs.module.css";

const SelectStock = () => {
  const { colors } = useContext(ThemeContext);
  const [selectedStock, setSelectedStock] = useState("Sklep 1");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStockChange = (stock: string) => {
    setSelectedStock(stock);
    handleClose();
  };

  return (
    <>
      <IconButton size="medium" onClick={handleClick}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: colors.text,
          }}
        >
          <Typography variant="h6" noWrap component="div">
            {selectedStock}
          </Typography>
          {Boolean(anchorEl) ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </Box>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          style: {
            width: 150,
          },
        }}
      >
        {["Sklep 1", "Sklep 2", "Sklep 3"].map((stock) => {
          return (
            <MenuItem
              onClick={() => handleStockChange(stock)}
              className={stock === selectedStock ? classes.selected : ""}
              key={stock}
            >
              {stock}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default SelectStock;
