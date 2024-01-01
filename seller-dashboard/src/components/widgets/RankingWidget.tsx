import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { createElement, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../store/ThemeContext";
import Card from "../UI/Card";
import Select from "../UI/inputs/Select";
import RadioButton from "../UI/inputs/RadioButton";
import { RootState } from "../../store/redux/store";
import Offer from "../../data/Offer";
import data from "../../data/data";

const sortSelectValues = {
  bestSelling: "bestSelling",
  worstSelling: "worstSelling",
};

const sortRadioValues = {
  unitsSold: "unitsSold",
  turnover: "turnover",
  viewsAmount: "viewsAmount",
};

const RankingWidget = () => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const chosenStockName = useSelector(
    (state: RootState) => state.auth.chosenStockName,
  );
  const [sortOption, setSortOption] = useState({
    select: sortSelectValues.bestSelling,
    radio: sortRadioValues.unitsSold,
  });

  let offers: Offer[] = [];
  if (userId && chosenStockName) {
    offers = data[userId][chosenStockName].offers;
    if (sortOption.select === sortSelectValues.bestSelling) {
      offers.sort((a, b) => {
        if (sortOption.radio === sortRadioValues.unitsSold) {
          return b.unitsSold - a.unitsSold;
        }
        return b.turnover - a.turnover;
      });
    } else {
      offers.sort((a, b) => {
        if (sortOption.radio === sortRadioValues.unitsSold) {
          return a.unitsSold - b.unitsSold;
        }
        return a.viewsAmount - b.viewsAmount;
      });
    }
    offers = offers.slice(0, 6);
  }

  const tableHeadersOptions = [
    t("image").toUpperCase(),
    t("offersName").toUpperCase(),
    t("unitsSold").toUpperCase(),
    sortOption.select === sortSelectValues.bestSelling
      ? t("turnover").toUpperCase()
      : t("viewsAmount").toUpperCase(),
  ];

  const sortSelectOptions = [
    { label: t("bestSelling"), value: sortSelectValues.bestSelling },
    { label: t("worstSelling"), value: sortSelectValues.worstSelling },
  ];

  const sortRadioOptions = [
    { label: t("unitsSold"), value: sortRadioValues.unitsSold },
    sortOption.select === sortSelectValues.bestSelling
      ? { label: t("turnover"), value: sortRadioValues.turnover }
      : { label: t("viewsAmount"), value: sortRadioValues.viewsAmount },
  ];

  const selectHandler = (value: string) => {
    setSortOption((options) => ({ ...options, select: value }));
  };

  const radioButtonHandler = (value: string) => {
    setSortOption((options) => ({ ...options, radio: value }));
  };

  const sortSelectOptions = [
    { label: t("bestSelling"), value: "bestSelling" },
    { label: t("worstSelling"), value: "worstSelling" },
  ];

  const sortRadioOptions = [
    { label: t("unitsSold"), value: "unitsSold" },
    { label: t("turnover"), value: "turnover" },
  ];

  return (
    <Card sx={{ maxWidth: "800px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h3">{t("offersRanking")}</Typography>
          <Select
            options={sortSelectOptions}
            defaultValue={sortSelectValues.bestSelling}
            onSelect={selectHandler}
          />
          <RadioButton
            formLabel={
              (sortOption.select === sortSelectValues.bestSelling
                ? t("descendingBy")
                : t("ascendingBy")) + ":"
            }
            options={sortRadioOptions}
            onChange={radioButtonHandler}
          />
        </Box>
        <Box sx={{ mt: "1rem" }}>
          <TableContainer>
            <Table
              sx={{
                backgroundColor: colors.primary200,
                margin: 0,
                borderBottom: `2px solid ${colors.primary200}`,
              }}
            >
              <TableHead>
                <TableRow>
                  {tableHeadersOptions.map((option) => {
                    return (
                      <TableCell
                        sx={{
                          borderBottom: `2px solid ${colors.accent}`,
                          textAlign: "center",
                          color: colors.tableHeaders,
                        }}
                        key={option}
                      >
                        {option}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {offers.map((offer, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        borderBottom: `2px solid ${colors.primary200}`,
                      }}
                    >
                      <TableCell
                        sx={{
                          textAlign: "center",
                          color: colors.text,
                          padding: "10px",
                        }}
                      >
                        {createElement(offer.image, { fontSize: "large" })}
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        {offer.name}
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        {offer.unitsSold}
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        {sortOption.select === sortSelectValues.bestSelling
                          ? `${offer.turnover} zł`
                          : offer.viewsAmount}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Card>
  );
};

export default RankingWidget;
