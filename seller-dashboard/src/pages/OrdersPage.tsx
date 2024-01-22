import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import { Box, Typography } from "@mui/material";

const OrdersPage = () => {
  const { t } = useTranslation();
  const { type } = useParams();
  const { colors } = useContext(ThemeContext);

  const ordersProps = [
    { type: "unpaid", color: colors.red },
    { type: "unsent", color: colors.yellow },
    { type: "returned", color: colors.secondary200 },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{t("orders")}</h1>
      <Typography
        variant="h4"
        color={ordersProps.find((order) => order.type === type)?.color}
      >
        {type ? t(type + "Order") : t("allOrders")}
      </Typography>
    </Box>
  );
};

export default OrdersPage;
