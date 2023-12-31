import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Offer {
  image: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  name: string;
  unitsSold: number;
  turnover: number;
  viewsAmount: number;
}

export default Offer;
