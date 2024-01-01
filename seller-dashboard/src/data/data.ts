import MonitorIcon from "@mui/icons-material/Monitor";
import LaptopIcon from "@mui/icons-material/Laptop";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Offer from "./Offer";

interface Stock {
  [key: string]: {
    offers: Offer[];
  };
}

interface Data {
  [key: string]: Stock;
}

const data: Data = {
  user1: {
    "Sklep 1": {
      offers: [
        {
          image: MonitorIcon,
          name: "Monitor",
          unitsSold: 5,
          turnover: 10230,
          viewsAmount: 38,
        },
        {
          image: LaptopIcon,
          name: "Laptop Elite X1",
          unitsSold: 15,
          turnover: 25000,
          viewsAmount: 45,
        },
        {
          image: SmartphoneIcon,
          name: "Smartphone Pro 12",
          unitsSold: 6,
          turnover: 12000,
          viewsAmount: 30,
        },
        {
          image: VideogameAssetIcon,
          name: "Gaming Console X1",
          unitsSold: 10,
          turnover: 22000,
          viewsAmount: 65,
        },
        {
          image: EarbudsIcon,
          name: "Wireless Earbuds Ultra 2.0",
          unitsSold: 18,
          turnover: 15000,
          viewsAmount: 78,
        },
        {
          image: MonitorHeartIcon,
          name: "Fitness Tracker Pro Max",
          unitsSold: 7,
          turnover: 8000,
          viewsAmount: 42,
        },
        {
          image: ConnectedTvIcon,
          name: "4K Smart TV Supreme 55-inch",
          unitsSold: 14,
          turnover: 35000,
          viewsAmount: 60,
        },
        {
          image: CameraAltIcon,
          name: "Camera Master 5000",
          unitsSold: 6,
          turnover: 12000,
          viewsAmount: 30,
        },
        {
          image: VolumeUpIcon,
          name: "Portable Speaker Harmony 360",
          unitsSold: 20,
          turnover: 10000,
          viewsAmount: 48,
        },
        {
          image: CoffeeMakerIcon,
          name: "Coffee Maker Deluxe Plus",
          unitsSold: 9,
          turnover: 9500,
          viewsAmount: 33,
        },
      ],
    },
    "Sklep 2": {
      offers: [
        {
          image: MonitorIcon,
          name: "Monitor",
          unitsSold: 1,
          turnover: 2230,
          viewsAmount: 13,
        },
        {
          image: LaptopIcon,
          name: "Laptop Prestige Z2",
          unitsSold: 20,
          turnover: 28000,
          viewsAmount: 50,
        },
        {
          image: SmartphoneIcon,
          name: "Smartphone Advanced 15",
          unitsSold: 14,
          turnover: 20000,
          viewsAmount: 60,
        },
        {
          image: VideogameAssetIcon,
          name: "Gaming Console Super X2",
          unitsSold: 12,
          turnover: 24000,
          viewsAmount: 70,
        },
        {
          image: EarbudsIcon,
          name: "Wireless Earbuds Prodigy 3.0",
          unitsSold: 22,
          turnover: 17000,
          viewsAmount: 85,
        },
        {
          image: MonitorHeartIcon,
          name: "Fitness Tracker Supreme Ultra",
          unitsSold: 10,
          turnover: 10000,
          viewsAmount: 55,
        },
        {
          image: ConnectedTvIcon,
          name: "4K Smart TV Deluxe 65-inch",
          unitsSold: 18,
          turnover: 38000,
          viewsAmount: 75,
        },
        {
          image: CameraAltIcon,
          name: "Camera Expert 6000",
          unitsSold: 8,
          turnover: 15000,
          viewsAmount: 35,
        },
        {
          image: VolumeUpIcon,
          name: "Portable Speaker Symphony 450",
          unitsSold: 25,
          turnover: 12000,
          viewsAmount: 55,
        },
        {
          image: CoffeeMakerIcon,
          name: "Coffee Maker Elegance Gold",
          unitsSold: 12,
          turnover: 10500,
          viewsAmount: 40,
        },
      ],
    },
    "Sklep 3": {
      offers: [
        {
          image: MonitorIcon,
          name: "Monitor",
          unitsSold: 0,
          turnover: 0,
          viewsAmount: 29,
        },
        {
          image: LaptopIcon,
          name: "Laptop Supreme Pro",
          unitsSold: 18,
          turnover: 32000,
          viewsAmount: 55,
        },
        {
          image: SmartphoneIcon,
          name: "Smartphone Ultimate X",
          unitsSold: 16,
          turnover: 23000,
          viewsAmount: 70,
        },
        {
          image: VideogameAssetIcon,
          name: "Gaming Console Hyper 3D",
          unitsSold: 14,
          turnover: 26000,
          viewsAmount: 80,
        },
        {
          image: EarbudsIcon,
          name: "Wireless Earbuds Harmony 4.0",
          unitsSold: 20,
          turnover: 20000,
          viewsAmount: 90,
        },
        {
          image: MonitorHeartIcon,
          name: "Fitness Tracker Deluxe Ultra",
          unitsSold: 12,
          turnover: 12000,
          viewsAmount: 50,
        },
        {
          image: ConnectedTvIcon,
          name: "4K Smart TV Elite 75-inch",
          unitsSold: 25,
          turnover: 42000,
          viewsAmount: 85,
        },
        {
          image: CameraAltIcon,
          name: "Camera Masterpiece 8000",
          unitsSold: 10,
          turnover: 18000,
          viewsAmount: 40,
        },
        {
          image: VolumeUpIcon,
          name: "Portable Speaker Echo 600",
          unitsSold: 30,
          turnover: 15000,
          viewsAmount: 65,
        },
        {
          image: CoffeeMakerIcon,
          name: "Coffee Maker Premium Silver",
          unitsSold: 18,
          turnover: 11500,
          viewsAmount: 48,
        },
      ],
    },
  },
  user2: {
    "Sklep 1": {
      offers: [
        {
          image: MonitorIcon,
          name: "Gaming Monitor X",
          unitsSold: 5,
          turnover: 8500,
          viewsAmount: 42,
        },
        {
          image: LaptopIcon,
          name: "Laptop Advanced Pro",
          unitsSold: 22,
          turnover: 38000,
          viewsAmount: 68,
        },
        {
          image: SmartphoneIcon,
          name: "Smartphone Prodigy 9",
          unitsSold: 14,
          turnover: 19800,
          viewsAmount: 72,
        },
        {
          image: VideogameAssetIcon,
          name: "Gaming Console Ultra VR",
          unitsSold: 18,
          turnover: 32000,
          viewsAmount: 90,
        },
        {
          image: EarbudsIcon,
          name: "Wireless Earbuds Pro X2",
          unitsSold: 25,
          turnover: 25000,
          viewsAmount: 95,
        },
        {
          image: MonitorHeartIcon,
          name: "Fitness Tracker Pro Max",
          unitsSold: 15,
          turnover: 11000,
          viewsAmount: 60,
        },
        {
          image: ConnectedTvIcon,
          name: "8K Smart TV Deluxe 85-inch",
          unitsSold: 30,
          turnover: 52000,
          viewsAmount: 100,
        },
        {
          image: CameraAltIcon,
          name: "Camera Ultimate 9000",
          unitsSold: 12,
          turnover: 22000,
          viewsAmount: 50,
        },
        {
          image: VolumeUpIcon,
          name: "Portable Speaker Bass King",
          unitsSold: 28,
          turnover: 18000,
          viewsAmount: 75,
        },
        {
          image: CoffeeMakerIcon,
          name: "Coffee Maker Platinum Edition",
          unitsSold: 20,
          turnover: 13000,
          viewsAmount: 55,
        },
      ],
    },
    "Sklep 2": {
      offers: [
        {
          image: MonitorIcon,
          name: "Ultra-Wide Monitor Pro",
          unitsSold: 8,
          turnover: 12500,
          viewsAmount: 50,
        },
        {
          image: LaptopIcon,
          name: "Laptop Infinity X",
          unitsSold: 20,
          turnover: 36000,
          viewsAmount: 72,
        },
        {
          image: SmartphoneIcon,
          name: "Smartphone Supreme 11",
          unitsSold: 18,
          turnover: 26000,
          viewsAmount: 80,
        },
        {
          image: VideogameAssetIcon,
          name: "Gaming Console Titan VR",
          unitsSold: 15,
          turnover: 28000,
          viewsAmount: 88,
        },
        {
          image: EarbudsIcon,
          name: "Wireless Earbuds Prodigy 5.0",
          unitsSold: 28,
          turnover: 23000,
          viewsAmount: 95,
        },
        {
          image: MonitorHeartIcon,
          name: "Fitness Tracker Elite Ultra",
          unitsSold: 10,
          turnover: 9000,
          viewsAmount: 40,
        },
        {
          image: ConnectedTvIcon,
          name: "Curved Smart TV Supreme 65-inch",
          unitsSold: 22,
          turnover: 48000,
          viewsAmount: 92,
        },
        {
          image: CameraAltIcon,
          name: "Camera Advanced 7000",
          unitsSold: 14,
          turnover: 20000,
          viewsAmount: 60,
        },
        {
          image: VolumeUpIcon,
          name: "Portable Speaker Mega Bass",
          unitsSold: 35,
          turnover: 22000,
          viewsAmount: 78,
        },
        {
          image: CoffeeMakerIcon,
          name: "Coffee Maker Deluxe Gold",
          unitsSold: 15,
          turnover: 14500,
          viewsAmount: 52,
        },
      ],
    },
  },
};

export default data;
