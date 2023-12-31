import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Card from "../UI/Card";
import Button from "../UI/inputs/Button";
import Checkbox from "../UI/inputs/Checkbox";
import Select from "../UI/inputs/Select";

const ChartWidget = () => {
  const { t } = useTranslation();

  const presentedDataOptions = [
    { label: t("unitsSold"), value: "unitsSold" },
    { label: t("turnover"), value: "turnover" },
  ];

  const chartTypeOptions = [
    { label: t("bar"), value: "bar" },
    { label: t("pie"), value: "pie" },
  ];

  return (
    <Card sx={{ maxWidth: "1000px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h3">{t("salesChart")}</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Select
              minWidth={240}
              options={presentedDataOptions}
              defaultValue="unitsSold"
            />
            <Select
              minWidth={240}
              options={chartTypeOptions}
              defaultValue="bar"
            />
          </Box>
        </Box>
        <Box sx={{ bgcolor: "red", height: "400px" }}></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button sx={{ mr: 2 }}>Dziś</Button>
            <Button sx={{ mr: 2 }}>Obecny tydzień</Button>
            <Button sx={{ mr: 2 }}>Obecny rok</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box>Pokaż dane z poprzedniego okresu</Box>
            <Checkbox />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ChartWidget;
