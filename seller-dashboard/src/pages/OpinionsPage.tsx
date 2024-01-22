import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

const OpinionsPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <h1>{t("opinions")}</h1>
    </Box>
  );
};

export default OpinionsPage;
