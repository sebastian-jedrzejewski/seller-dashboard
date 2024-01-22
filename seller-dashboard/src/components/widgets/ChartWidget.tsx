import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import Checkbox from "../UI/inputs/Checkbox";
import Select from "../UI/inputs/Select";
import Chart, {
  ChartOptions,
  ChartType,
  DataPresented,
  PeriodPresented,
} from "../UI/Chart";
import ButtonToggleGroup from "../UI/inputs/ButtonToggleGroup";
import { RootState } from "../../store/redux/store";
import data from "../../data/data";

const ChartWidget = () => {
  const { t } = useTranslation();
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    dataPresented: "unitsSold",
    period: "week",
    type: "bar",
  });
  const userId = useSelector((state: RootState) => state.auth.userId);
  const chosenStockName = useSelector(
    (state: RootState) => state.auth.chosenStockName,
  );

  const presentedDataOptions = [
    { label: t("unitsSold"), value: "unitsSold" },
    { label: t("turnover"), value: "turnover" },
  ];

  const chartTypeOptions = [
    { label: t("bar"), value: "bar" },
    { label: t("line"), value: "line" },
  ];

  const periodOptions = [
    { label: t("today"), value: "today" },
    { label: t("week"), value: "week" },
    { label: t("year"), value: "year" },
  ];

  let charts = {};
  if (userId && chosenStockName) {
    charts = data[userId][chosenStockName].charts;
  }

  if (Object.keys(charts).length === 0) {
    return (
      <Card>
        <Typography variant="h3" sx={{ marginBottom: "20px" }}>
          {t("salesChart")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">{t("noSales")}</Typography>
        </Box>
      </Card>
    );
  }

  const handleSelectDataPresented = (value: DataPresented) => {
    setChartOptions((options) => ({ ...options, dataPresented: value }));
  };

  const handleSelectChartType = (value: ChartType) => {
    setChartOptions((options) => ({ ...options, type: value }));
  };

  const handleSelectPeriod = (value: PeriodPresented) => {
    setChartOptions((options) => ({ ...options, period: value }));
  };

  const handleCheckPreviousPeriod = (value: boolean) => {
    setChartOptions((options) => ({ ...options, previousPeriod: value }));
  };

  return (
    <Card>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            <Typography variant="h3">{t("salesChart")}</Typography>
          </Box>
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
              onSelect={handleSelectDataPresented}
            />
            <Select
              minWidth={240}
              options={chartTypeOptions}
              defaultValue="bar"
              onSelect={handleSelectChartType}
            />
          </Box>
        </Box>
        <Chart {...chartOptions} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <ButtonToggleGroup
            options={periodOptions}
            defaultValue="week"
            containerSx={{
              display: "flex",
            }}
            onSelect={handleSelectPeriod}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box>{t("showDataFromPreviousPeriod")}</Box>
            <Checkbox onChange={handleCheckPreviousPeriod} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ChartWidget;
