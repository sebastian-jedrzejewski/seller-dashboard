import { useContext, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";
import data from "../../data/data";
import Card from "../UI/Card";
import {
  Avatar,
  Box,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Select from "../UI/inputs/Select";
import Opinion from "../../data/Opinion";
import { useTranslation } from "react-i18next";
import Button from "../UI/inputs/Button";

const sortSelectValues = {
  all: "all",
  positive: "positive",
  negative: "negative",
};

const OpinionsWidget = () => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const chosenStockName = useSelector(
    (state: RootState) => state.auth.chosenStockName,
  );
  const [sortOption, setSortOption] = useState({
    select: sortSelectValues.all,
  });

  let opinions: Opinion[] = [];
  if (userId && chosenStockName) {
    opinions = data[userId][chosenStockName].opinions;
    if (sortOption.select === sortSelectValues.all) {
      opinions.sort((a, b) => b.date.getTime() - a.date.getTime());
      opinions = opinions.slice(0, 5);
    } else if (sortOption.select === sortSelectValues.positive) {
      opinions = opinions.filter((opinion) => opinion.isPositive);
      opinions.sort((a, b) => b.date.getTime() - a.date.getTime());
      opinions = opinions.slice(0, 5);
    } else {
      opinions = opinions.filter((opinion) => !opinion.isPositive);
      opinions.sort((a, b) => b.date.getTime() - a.date.getTime());
      opinions = opinions.slice(0, 5);
    }
  } else {
    return <></>;
  }

  if (opinions.length === 0) {
    return (
      <Card sx={{ maxWidth: "800px" }}>
        <Typography
          variant="h3"
          color={colors.text}
          sx={{ marginBottom: "20px" }}
        >
          {t("opinions")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color={colors.text}>
            {t("noOpinions")}
          </Typography>
        </Box>
      </Card>
    );
  }

  const sortSelectOptions = [
    { label: t("allOpinions"), value: sortSelectValues.all },
    { label: t("positiveOpinionsOnly"), value: sortSelectValues.positive },
    { label: t("negativeOpinionsOnly"), value: sortSelectValues.negative },
  ];

  const selectHandler = (value: string) => {
    setSortOption((options) => ({ ...options, select: value }));
  };

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

  const getDate = (date: Date): string => {
    let dateString = date.toDateString().substring(3);
    const month = date.getMonth();
    const dateWithoutMonth = dateString.substring(4);
    dateString = t(yearLabels[month]) + dateWithoutMonth;
    return dateString;
  };

  return (
    <Card sx={{ maxWidth: "950px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h3">{t("opinions")}</Typography>
          <Select
            options={sortSelectOptions}
            defaultValue={sortSelectValues.all}
            onSelect={selectHandler}
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
              <TableBody>
                {opinions.map((opinion, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        borderBottom: `2px solid ${colors.primary300}`,
                      }}
                    >
                      <TableCell
                        sx={{
                          textAlign: "center",
                          color: colors.text,
                          padding: "10px",
                        }}
                      >
                        <Avatar
                          src={opinion.imageSrc}
                          sx={{ height: "3em", width: "3em" }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6">{opinion.name}</Typography>
                          <Rating
                            name="half-rating-read"
                            value={opinion.rating / 2}
                            precision={0.5}
                            readOnly
                            size="medium"
                            sx={{}}
                          />
                          <Typography variant="h6" sx={{ fontWeight: 100 }}>
                            {getDate(opinion.date)}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", color: colors.text }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6">
                            {opinion.productName}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 100 }}>
                            {opinion.comment}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button sx={{ marginTop: "20px" }}>{t("showMore")}</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default OpinionsWidget;
