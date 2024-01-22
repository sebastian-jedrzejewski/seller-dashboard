import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

const SalesQualityPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <h1>{t("salesQuality")}</h1>
    </Box>
  );
};

export default SalesQualityPage;
