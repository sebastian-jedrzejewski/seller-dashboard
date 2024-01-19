import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";
import Card from "../UI/Card";
import { Box, Rating, Typography } from "@mui/material";
import Button from "../UI/inputs/Button";
import data from "../../data/data";
import SalesQualityAspect from "../../data/SalesQualityAspect";

const SalesQualityWidget = () => {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const chosenStockName = useSelector(
    (state: RootState) => state.auth.chosenStockName,
  );

  let salesQualityAspects: SalesQualityAspect[];
  if (userId && chosenStockName) {
    salesQualityAspects = data[userId][chosenStockName].salesQualityAspects;
    salesQualityAspects.sort((a, b) => a.rating - b.rating);
  } else {
    return <></>;
  }
  const theWorstAspects = salesQualityAspects.slice(0, 3);
  const rating = Math.round(
    salesQualityAspects.reduce((a, b) => a + b.rating, 0) /
      salesQualityAspects.length,
  );

  const totalOpinions = 0;

  return (
    <>
      {totalOpinions !== 0 ? (
        <Card>
          <Typography
            variant="h3"
            color={colors.text}
            sx={{ marginBottom: "20px" }}
          >
            {t("salesQuality")}
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
              {t("noSaleMessage")}
            </Typography>
            <Button
              sx={{
                backgroundColor: colors.redButton,
                marginTop: "20px",
                "&:hover": { backgroundColor: colors.redButtonHover },
              }}
            >
              {t("listItemForSale")}
            </Button>
          </Box>
        </Card>
      ) : (
        <Card>
          <Typography
            variant="h3"
            color={colors.text}
            sx={{ marginBottom: "20px" }}
          >
            {t("salesQuality")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "1em",
              paddingBottom: "3px",
              borderBottom: `2px solid ${colors.primary300}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" color={colors.text} sx={{}}>
                {t("salesRating")}
              </Typography>
              <Typography variant="h5" color={colors.secondary200} sx={{}}>
                {rating + "/10"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" color={colors.text} sx={{}}>
                {t("qualityCategory")}
              </Typography>
              <Rating
                name="half-rating-read"
                value={rating / 2}
                precision={0.5}
                readOnly
                size="large"
                sx={{ marginTop: "1px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <Typography
              variant="h5"
              color={colors.text}
              sx={{ marginBottom: "10px" }}
            >
              {t("theWorstAspects")}
            </Typography>
            {theWorstAspects.map((aspect, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1em",
                    marginBottom: "5px",
                  }}
                >
                  <Typography variant="h5" color={colors.text} sx={{}}>
                    {t(aspect.name)}
                  </Typography>
                  <Typography variant="h5" color={colors.secondary200} sx={{}}>
                    {aspect.rating + "/10"}
                  </Typography>
                </Box>
              );
            })}
            <Button sx={{ marginTop: "20px" }}>{t("showMore")}</Button>
          </Box>
        </Card>
      )}
    </>
  );
};

export default SalesQualityWidget;
