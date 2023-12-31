import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ThemeContext } from "../../../store/ThemeContext";
import { RootState } from "../../../store/redux/store";
import { selectStock } from "../../../store/redux/auth-slice";
import data from "../../../data/data";
import classes from "./inputs.module.css";

const SelectStock = () => {
  const { colors } = useContext(ThemeContext);
  const [selectedStock, setSelectedStock] = useState("Sklep 1");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const userId = useSelector((state: RootState) => state.auth.userId);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStockChange = (stock: string) => {
    setSelectedStock(stock);
    dispatch(selectStock(stock));
    handleClose();
  };

  let stocksList: string[] = [];
  if (userId) {
    stocksList = Object.keys(data[userId]);
  }

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
        {stocksList.map((stock) => {
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
