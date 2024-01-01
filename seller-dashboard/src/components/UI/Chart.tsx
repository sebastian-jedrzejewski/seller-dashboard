import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../store/ThemeContext";
import { RootState } from "../../store/redux/store";
import appData from "../../data/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

// 01h, 02h, ..., 24h
const dayLabels = Array.from({ length: 24 }, (_, index) => {
  const hour = (index + 1).toString().padStart(2, "0");
  return `${hour}h`;
});

export type DataPresented = "unitsSold" | "turnover";
export type PeriodPresented = "today" | "week" | "year";
export type ChartType = "bar" | "line";

export type ChartOptions = {
  dataPresented: DataPresented;
  period: PeriodPresented;
  previousPeriod?: boolean;
  type: ChartType;
};

const Chart: React.FC<ChartOptions> = (props) => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const chosenStockName = useSelector(
    (state: RootState) => state.auth.chosenStockName,
  );

  const { dataPresented, period, previousPeriod, type } = props;

  const weekLabels = [
    t("monday"),
    t("tuesday"),
    t("wednesday"),
    t("thursday"),
    t("friday"),
    t("saturday"),
    t("sunday"),
  ];

  const yearLabels = [
    t("january"),
    t("february"),
    t("march"),
    t("april"),
    t("may"),
    t("june"),
    t("july"),
    t("august"),
    t("september"),
    t("october"),
    t("november"),
    t("december"),
  ];

  const data = {
    labels: [] as string[],
    datasets: [] as any[],
  };

  if (period === "today") {
    data.labels = dayLabels;
  } else if (period === "week") {
    data.labels = weekLabels;
  } else {
    data.labels = yearLabels;
  }

  let current = [] as number[];
  let previous = [] as number[];
  if (userId && chosenStockName) {
    const userCharts = appData[userId][chosenStockName].charts;
    current = userCharts[dataPresented][period].current;
    previous = userCharts[dataPresented][period].previous;
  }
  data.datasets.push({
    label: t("current"),
    data: current.slice(0, -1),
    borderColor: colors.secondary200,
    backgroundColor: colors.secondary200,
  });
  data.datasets.push({
    label: t("unfinished"),
    data: [
      ...Array(current.length - 1).fill(null),
      current[current.length - 1],
    ],
    borderColor: colors.yellow,
    backgroundColor: colors.yellow,
  });
  if (previousPeriod) {
    data.datasets.push({
      label: t("previousPeriod"),
      data: previous,
      borderColor: colors.red,
      backgroundColor: colors.red,
    });
  }

  return (
    <Box
      sx={{
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
      }}
    >
      {type === "bar" ? (
        <Bar options={options} data={data} />
      ) : (
        <Line options={options} data={data} />
      )}
    </Box>
  );
};

export default Chart;
