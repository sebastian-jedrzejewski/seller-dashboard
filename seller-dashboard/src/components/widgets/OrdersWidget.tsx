import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";
import data from "../../data/data";
import Card from "../UI/Card";
import { Box, Typography } from "@mui/material";
import Button from "../UI/inputs/Button";
import { useNavigate } from "react-router-dom";
import { East } from "@mui/icons-material";

const OrdersWidget = () => {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const chosenStockName = useSelector(
    (state: RootState) => state.auth.chosenStockName,
  );

  let orders: number[] = [];
  if (userId && chosenStockName) {
    orders = data[userId][chosenStockName].orders;
  }
  const totalOrders = orders.reduce((a, b) => a + b, 0);

  const ordersProps = [
    { type: t("unpaid"), color: colors.red },
    { type: t("unsent"), color: colors.yellow },
    { type: t("returned"), color: colors.secondary200 },
  ];

  return (
    <>
      {totalOrders === 0 ? (
        <Card sx={{ maxWidth: "800px" }}>
          <Typography
            variant="h3"
            color={colors.text}
            sx={{ marginBottom: "20px" }}
          >
            {t("orders")}
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
              {t("noOrders")}
            </Typography>
            <Typography variant="h5" color={colors.text}>
              {t("promotionOffer")}
            </Typography>
            <Button
              sx={{
                backgroundColor: colors.redButton,
                marginTop: "20px",
                "&:hover": { backgroundColor: colors.redButtonHover },
              }}
            >
              {t("showDetails")}
            </Button>
          </Box>
        </Card>
      ) : (
        ordersProps.map((order, index) => (
          <Card
            onClick={
              orders[index] === 0
                ? () => {}
                : () => {
                    navigate("/orders");
                  }
            }
            sx={{
              maxWidth: "800px",
              ":hover": { boxShadow: orders[index] === 0 ? 0 : 20 },
              mb: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" color={colors.text}>
                {orders[index]}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" color={order.color}>
                  {order.type}
                </Typography>
                <Typography variant="h4" color={colors.text}>
                  {t("ordersForOrdersWidget")}
                </Typography>
              </Box>
              <East
                sx={{
                  fontSize: "4rem",
                  opacity: orders[index] === 0 ? 0 : 100,
                }}
              />
            </Box>
          </Card>
        ))
      )}
    </>
  );
};

export default OrdersWidget;
