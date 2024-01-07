import RankingWidget from "../components/widgets/RankingWidget";
import ChartWidget from "../components/widgets/ChartWidget";
import OrdersWidget from "../components/widgets/OrdersWidget";
import SalesQualityWidget from "../components/widgets/SalesQualityWidget";
import OpinionsWidget from "../components/widgets/OpinionsWidget";
import { Grid } from "@mui/material";

const MainPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <OrdersWidget />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SalesQualityWidget />
      </Grid>

      <Grid item xs={12} lg={6}>
        <RankingWidget />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ChartWidget />
      </Grid>

      <Grid
        item
        xs={12}
        lg={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <OpinionsWidget />
      </Grid>
    </Grid>
  );
};

export default MainPage;
