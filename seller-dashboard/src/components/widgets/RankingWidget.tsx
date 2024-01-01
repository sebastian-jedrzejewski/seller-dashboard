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
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../store/ThemeContext";
import Card from "../UI/Card";
import Select from "../UI/inputs/Select";
import RadioButton from "../UI/inputs/RadioButton";
import monitor from "../../assets/monitor.png";

const RankingWidget = () => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();

  const tableHeadersOptions = [
    t("image").toUpperCase(),
    t("offersName").toUpperCase(),
    t("unitsSold").toUpperCase(),
    t("turnover").toUpperCase(),
  ];

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
          <Select options={sortSelectOptions} defaultValue="bestSelling" />
          <RadioButton
            formLabel={t("descendingBy") + ":"}
            options={sortRadioOptions}
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
                {[1, 2, 3, 4, 5].map((i) => {
                  return (
                    <TableRow
                      key={i}
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
                        <Box component="img" src={monitor} />
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        Monitor
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        1
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        2223 zł
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
