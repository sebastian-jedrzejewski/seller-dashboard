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
import ChartInterface from "./Chart";
import SalesQualityAspect from "./SalesQualityAspect";
import Opinion from "./Opinion";

interface Stock {
  [key: string]: {
    offers: Offer[];
    charts: ChartInterface;
    orders: number[];
    salesQualityAspects: SalesQualityAspect[];
    opinions: Opinion[];
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
      charts: {
        unitsSold: {
          today: {
            current: [
              0, 0, 0, 0, 0, 3, 9, 12, 19, 22, 21, 19, 17, 28, 27, 31, 32,
            ],
            previous: [
              0, 0, 1, 0, 0, 2, 4, 9, 11, 18, 19, 21, 17, 23, 21, 30, 31, 31,
              34, 29, 23, 18, 9, 2,
            ],
          },
          week: {
            current: [316, 312, 371, 410],
            previous: [389, 289, 301, 346, 321, 389, 234],
          },
          year: {
            current: [417, 557, 215, 575],
            previous: [
              296, 592, 224, 580, 489, 594, 484, 422, 431, 226, 235, 598,
            ],
          },
        },
        turnover: {
          today: {
            current: [
              0, 0, 0, 0, 0, 160, 34, 443, 417, 94, 364, 221, 358, 599, 68, 345,
              591,
            ],
            previous: [
              11, 0, 0, 0, 591, 569, 125, 39, 147, 488, 362, 226, 306, 504, 88,
              220, 345, 538, 492, 184, 320, 67, 104, 353,
            ],
          },
          week: {
            current: [7623, 2567, 6005, 6836],
            previous: [
              5260, 5989, 3498, 2885, 6958, 4266, 4673, 4652, 4420, 5080, 2474,
              6565,
            ],
          },
          year: {
            current: [27429, 39708, 25625],
            previous: [
              29795, 38749, 34861, 25012, 31127, 27201, 29780, 33708, 37765,
              29941, 25253, 31677,
            ],
          },
        },
      },
      orders: [1000, 5, 0],
      salesQualityAspects: [
        {
          name: "productsQuality",
          rating: 3,
        },
        {
          name: "shippingTime",
          rating: 7,
        },
        {
          name: "customerService",
          rating: 4,
        },
        {
          name: "customerExperience",
          rating: 2,
        },
        {
          name: "productsPrice",
          rating: 10,
        },
      ],
      opinions: [
        {
          imageSrc: "https://randomuser.me/api/portraits/men/50.jpg",
          name: "John Smith",
          rating: 9,
          date: new Date("2021-09-20"),
          comment:
            "Excellent product quality, met or exceeded my expectations.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/49.jpg",
          name: "Esther Howard",
          rating: 7,
          date: new Date("2022-05-10"),
          comment:
            "Fast and reliable shipping, received the product sooner than expected.",
          productName: "Portable Speaker Harmony 360",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/31.jpg",
          name: "Sofia Williams",
          rating: 8,
          date: new Date("2023-03-21"),
          comment:
            "Impressed with the exceptional customer service, quick response to inquiries.",
          productName: "Camera Master 5000",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/31.jpg",
          name: "Jack Wilson",
          rating: 10,
          date: new Date("2022-07-28"),
          comment: "The product's features are user-friendly and intuitive.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/20.jpg",
          name: "Leslie Alexa",
          rating: 8,
          date: new Date("2023-09-17"),
          comment: "Great value for the price, affordable yet high-quality.",
          productName: "4K Smart TV Supreme 55-inch",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/7.jpg",
          name: "Alexia Stones",
          rating: 3,
          date: new Date("2021-01-20"),
          comment:
            "Disappointed with the product quality, it didn't meet expectations.",
          productName: "Gaming Console X1",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/39.jpg",
          name: "Jacob Fisher",
          rating: 2,
          date: new Date("2023-02-17"),
          comment:
            "Shipping took longer than anticipated, causing inconvenience.",
          productName: "Wireless Earbuds Ultra 2.0",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/25.jpg",
          name: "Anto Watson",
          rating: 4,
          date: new Date("2022-08-11"),
          comment:
            "Poor customer service, difficult to get a timely response or resolution.",
          productName: "Smartphone Pro 12",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/11.jpg",
          name: "Albert Flores",
          rating: 1,
          date: new Date("2023-05-13"),
          comment:
            "The product's functionality is not as described or advertised.",
          productName: "Fitness Tracker Pro Max",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/27.jpg",
          name: "Dianne Russell",
          rating: 2,
          date: new Date("2021-04-14"),
          comment:
            "Overpriced for the quality received, did not justify the cost.",
          productName: "Smartphone Pro 12",
          isPositive: false,
        },
      ],
    },
    "Sklep 2": {
      offers: [],
      charts: {
        unitsSold: {
          today: {
            current: [
              0, 0, 0, 0, 0, 5, 10, 15, 20, 25, 22, 20, 18, 35, 30, 35, 40,
            ],
            previous: [
              0, 0, 2, 0, 0, 4, 6, 12, 15, 22, 20, 24, 18, 28, 22, 32, 35, 35,
              38, 32, 25, 20, 10, 5,
            ],
          },
          week: {
            current: [280, 330, 400, 450],
            previous: [360, 260, 300, 350, 320, 390, 220],
          },
          year: {
            current: [380, 520, 180, 540],
            previous: [
              260, 550, 190, 530, 460, 580, 450, 390, 400, 200, 210, 550,
            ],
          },
        },
        turnover: {
          today: {
            current: [
              0, 0, 0, 0, 0, 140, 50, 420, 380, 80, 350, 250, 330, 560, 60, 330,
              560,
            ],
            previous: [
              8, 0, 0, 0, 560, 530, 110, 30, 130, 450, 330, 200, 280, 470, 80,
              200, 330, 520, 470, 150, 290, 50, 90, 330,
            ],
          },
          week: {
            current: [7800, 2400, 6400, 7000],
            previous: [
              5000, 5700, 3300, 2700, 6700, 4000, 4400, 4500, 4200, 4800, 2200,
              6700,
            ],
          },
          year: {
            current: [28000, 38000, 24000],
            previous: [
              30500, 37500, 33500, 23800, 29800, 26000, 28500, 32500, 36500,
              28700, 24000, 30500,
            ],
          },
        },
      },
      orders: [13, 0, 21],
      salesQualityAspects: [
        {
          name: "productsQuality",
          rating: 10,
        },
        {
          name: "shippingTime",
          rating: 10,
        },
        {
          name: "customerService",
          rating: 10,
        },
        {
          name: "customerExperience",
          rating: 10,
        },
        {
          name: "productsPrice",
          rating: 10,
        },
      ],
      opinions: [
        {
          imageSrc: "https://randomuser.me/api/portraits/men/50.jpg",
          name: "John Smith",
          rating: 9,
          date: new Date("2021-09-20"),
          comment:
            "Excellent product quality, met or exceeded my expectations.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/49.jpg",
          name: "Esther Howard",
          rating: 7,
          date: new Date("2022-05-10"),
          comment:
            "Fast and reliable shipping, received the product sooner than expected.",
          productName: "Portable Speaker Harmony 360",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/31.jpg",
          name: "Sofia Williams",
          rating: 8,
          date: new Date("2023-03-21"),
          comment:
            "Impressed with the exceptional customer service, quick response to inquiries.",
          productName: "Camera Master 5000",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/31.jpg",
          name: "Jack Wilson",
          rating: 10,
          date: new Date("2022-07-28"),
          comment: "The product's features are user-friendly and intuitive.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/20.jpg",
          name: "Leslie Alexa",
          rating: 8,
          date: new Date("2023-09-17"),
          comment: "Great value for the price, affordable yet high-quality.",
          productName: "4K Smart TV Supreme 55-inch",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/7.jpg",
          name: "Alexia Stones",
          rating: 3,
          date: new Date("2021-01-20"),
          comment:
            "Disappointed with the product quality, it didn't meet expectations.",
          productName: "Gaming Console X1",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/39.jpg",
          name: "Jacob Fisher",
          rating: 2,
          date: new Date("2023-02-17"),
          comment:
            "Shipping took longer than anticipated, causing inconvenience.",
          productName: "Wireless Earbuds Ultra 2.0",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/25.jpg",
          name: "Anto Watson",
          rating: 4,
          date: new Date("2022-08-11"),
          comment:
            "Poor customer service, difficult to get a timely response or resolution.",
          productName: "Smartphone Pro 12",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/11.jpg",
          name: "Albert Flores",
          rating: 1,
          date: new Date("2023-05-13"),
          comment:
            "The product's functionality is not as described or advertised.",
          productName: "Fitness Tracker Pro Max",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/27.jpg",
          name: "Dianne Russell",
          rating: 2,
          date: new Date("2021-04-14"),
          comment:
            "Overpriced for the quality received, did not justify the cost.",
          productName: "Smartphone Pro 12",
          isPositive: false,
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
      charts: {
        unitsSold: {
          today: {
            current: [
              0, 0, 0, 0, 0, 6, 12, 18, 24, 30, 25, 22, 20, 40, 33, 38, 45,
            ],
            previous: [
              0, 0, 3, 0, 0, 5, 8, 15, 18, 25, 22, 25, 20, 30, 25, 35, 38, 38,
              42, 36, 30, 25, 15, 8,
            ],
          },
          week: {
            current: [260, 340, 420, 480],
            previous: [340, 240, 280, 330, 300, 370, 200],
          },
          year: {
            current: [360, 500, 160, 520],
            previous: [
              240, 530, 170, 510, 440, 560, 430, 370, 380, 180, 190, 530,
            ],
          },
        },
        turnover: {
          today: {
            current: [
              0, 0, 0, 0, 0, 130, 60, 410, 360, 70, 340, 270, 310, 540, 50, 320,
              540,
            ],
            previous: [
              7, 0, 0, 0, 540, 510, 100, 25, 120, 420, 310, 180, 250, 450, 70,
              180, 310, 500, 450, 130, 270, 40, 80, 320,
            ],
          },
          week: {
            current: [8000, 2200, 6600, 7200],
            previous: [
              4800, 5500, 3200, 2600, 6600, 3900, 4200, 4300, 4000, 4600, 2000,
              6500,
            ],
          },
          year: {
            current: [29000, 37000, 23000],
            previous: [
              31500, 36500, 32500, 22800, 28800, 25000, 27500, 31500, 35500,
              27700, 23000, 29500,
            ],
          },
        },
      },
      orders: [0, 0, 0],
      salesQualityAspects: [
        {
          name: "productsQuality",
          rating: 4,
        },
        {
          name: "shippingTime",
          rating: 2,
        },
        {
          name: "customerService",
          rating: 3,
        },
        {
          name: "customerExperience",
          rating: 5,
        },
        {
          name: "productsPrice",
          rating: 1,
        },
      ],
      opinions: [],
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
      charts: {
        unitsSold: {
          today: {
            current: [
              0, 0, 0, 0, 0, 8, 15, 20, 25, 32, 28, 25, 22, 45, 38, 42, 50,
            ],
            previous: [
              0, 0, 5, 0, 0, 7, 12, 20, 25, 30, 28, 32, 25, 35, 30, 40, 42, 42,
              48, 40, 35, 30, 18, 8,
            ],
          },
          week: {
            current: [240, 360, 400, 520],
            previous: [320, 220, 260, 310, 280, 350, 180],
          },
          year: {
            current: [320, 480, 140, 490],
            previous: [
              200, 500, 150, 480, 400, 520, 380, 320, 340, 160, 170, 500,
            ],
          },
        },
        turnover: {
          today: {
            current: [
              0, 0, 0, 0, 0, 120, 70, 400, 350, 60, 330, 290, 270, 520, 40, 310,
              520,
            ],
            previous: [
              5, 0, 0, 0, 520, 490, 80, 20, 110, 400, 290, 160, 230, 420, 60,
              160, 290, 480, 430, 120, 240, 30, 70, 310,
            ],
          },
          week: {
            current: [8200, 2000, 6800, 7400],
            previous: [
              4600, 5400, 3100, 2500, 6400, 3700, 4000, 4100, 3800, 4400, 1800,
              7100,
            ],
          },
          year: {
            current: [30000, 36000, 22000],
            previous: [
              32500, 35500, 31500, 21800, 27800, 24000, 26500, 30500, 34500,
              25700, 22000, 28500,
            ],
          },
        },
      },
      orders: [20, 2, 19],
      salesQualityAspects: [
        {
          name: "productsQuality",
          rating: 9,
        },
        {
          name: "shippingTime",
          rating: 2,
        },
        {
          name: "customerService",
          rating: 5,
        },
        {
          name: "customerExperience",
          rating: 5,
        },
        {
          name: "productsPrice",
          rating: 7,
        },
      ],
      opinions: [
        {
          imageSrc: "https://randomuser.me/api/portraits/men/50.jpg",
          name: "John Smith",
          rating: 9,
          date: new Date("2021-09-20"),
          comment:
            "Excellent product quality, met or exceeded my expectations.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/49.jpg",
          name: "Esther Howard",
          rating: 7,
          date: new Date("2022-05-10"),
          comment:
            "Fast and reliable shipping, received the product sooner than expected.",
          productName: "Portable Speaker Harmony 360",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/31.jpg",
          name: "Sofia Williams",
          rating: 8,
          date: new Date("2023-03-21"),
          comment:
            "Impressed with the exceptional customer service, quick response to inquiries.",
          productName: "Camera Master 5000",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/31.jpg",
          name: "Jack Wilson",
          rating: 10,
          date: new Date("2022-07-28"),
          comment: "The product's features are user-friendly and intuitive.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/20.jpg",
          name: "Leslie Alexa",
          rating: 8,
          date: new Date("2023-09-17"),
          comment: "Great value for the price, affordable yet high-quality.",
          productName: "4K Smart TV Supreme 55-inch",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/7.jpg",
          name: "Alexia Stones",
          rating: 3,
          date: new Date("2021-01-20"),
          comment:
            "Disappointed with the product quality, it didn't meet expectations.",
          productName: "Gaming Console X1",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/39.jpg",
          name: "Jacob Fisher",
          rating: 2,
          date: new Date("2023-02-17"),
          comment:
            "Shipping took longer than anticipated, causing inconvenience.",
          productName: "Wireless Earbuds Ultra 2.0",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/25.jpg",
          name: "Anto Watson",
          rating: 4,
          date: new Date("2022-08-11"),
          comment:
            "Poor customer service, difficult to get a timely response or resolution.",
          productName: "Smartphone Pro 12",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/11.jpg",
          name: "Albert Flores",
          rating: 1,
          date: new Date("2023-05-13"),
          comment:
            "The product's functionality is not as described or advertised.",
          productName: "Fitness Tracker Pro Max",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/27.jpg",
          name: "Dianne Russell",
          rating: 2,
          date: new Date("2021-04-14"),
          comment:
            "Overpriced for the quality received, did not justify the cost.",
          productName: "Smartphone Pro 12",
          isPositive: false,
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
      charts: {
        unitsSold: {
          today: {
            current: [
              0, 0, 0, 0, 0, 7, 14, 22, 30, 28, 26, 24, 22, 40, 32, 38, 45,
            ],
            previous: [
              0, 0, 4, 0, 0, 6, 10, 18, 26, 28, 26, 30, 24, 32, 28, 36, 40, 40,
              44, 38, 32, 26, 16, 7,
            ],
          },
          week: {
            current: [260, 340, 420, 500],
            previous: [340, 240, 280, 330, 300, 370, 200],
          },
          year: {
            current: [380, 500, 160, 510],
            previous: [
              250, 520, 170, 500, 430, 550, 410, 350, 370, 180, 190, 520,
            ],
          },
        },
        turnover: {
          today: {
            current: [
              0, 0, 0, 0, 0, 130, 60, 410, 350, 70, 340, 270, 310, 540, 50, 320,
              540,
            ],
            previous: [
              7, 0, 0, 0, 540, 510, 100, 25, 120, 420, 310, 180, 250, 450, 70,
              180, 310, 500, 450, 130, 270, 40, 80, 320,
            ],
          },
          week: {
            current: [7800, 2400, 6600, 7200],
            previous: [
              4800, 5500, 3200, 2600, 6600, 3900, 4200, 4300, 4000, 4600, 2000,
              6500,
            ],
          },
          year: {
            current: [28000, 37000, 23000],
            previous: [
              31500, 36500, 32500, 22800, 28800, 25000, 27500, 31500, 35500,
              27700, 23000, 29500,
            ],
          },
        },
      },
      orders: [17, 1, 15],
      salesQualityAspects: [
        {
          name: "productsQuality",
          rating: 5,
        },
        {
          name: "shippingTime",
          rating: 6,
        },
        {
          name: "customerService",
          rating: 4,
        },
        {
          name: "customerExperience",
          rating: 8,
        },
        {
          name: "productsPrice",
          rating: 5,
        },
      ],
      opinions: [
        {
          imageSrc: "https://randomuser.me/api/portraits/men/50.jpg",
          name: "John Smith",
          rating: 9,
          date: new Date("2021-09-20"),
          comment:
            "Excellent product quality, met or exceeded my expectations.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/49.jpg",
          name: "Esther Howard",
          rating: 7,
          date: new Date("2022-05-10"),
          comment:
            "Fast and reliable shipping, received the product sooner than expected.",
          productName: "Portable Speaker Harmony 360",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/31.jpg",
          name: "Sofia Williams",
          rating: 8,
          date: new Date("2023-03-21"),
          comment:
            "Impressed with the exceptional customer service, quick response to inquiries.",
          productName: "Camera Master 5000",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/31.jpg",
          name: "Jack Wilson",
          rating: 10,
          date: new Date("2022-07-28"),
          comment: "The product's features are user-friendly and intuitive.",
          productName: "Coffee Maker Deluxe Plus",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/20.jpg",
          name: "Leslie Alexa",
          rating: 8,
          date: new Date("2023-09-17"),
          comment: "Great value for the price, affordable yet high-quality.",
          productName: "4K Smart TV Supreme 55-inch",
          isPositive: true,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/7.jpg",
          name: "Alexia Stones",
          rating: 3,
          date: new Date("2021-01-20"),
          comment:
            "Disappointed with the product quality, it didn't meet expectations.",
          productName: "Gaming Console X1",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/39.jpg",
          name: "Jacob Fisher",
          rating: 2,
          date: new Date("2023-02-17"),
          comment:
            "Shipping took longer than anticipated, causing inconvenience.",
          productName: "Wireless Earbuds Ultra 2.0",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/25.jpg",
          name: "Anto Watson",
          rating: 4,
          date: new Date("2022-08-11"),
          comment:
            "Poor customer service, difficult to get a timely response or resolution.",
          productName: "Smartphone Pro 12",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/men/11.jpg",
          name: "Albert Flores",
          rating: 1,
          date: new Date("2023-05-13"),
          comment:
            "The product's functionality is not as described or advertised.",
          productName: "Fitness Tracker Pro Max",
          isPositive: false,
        },
        {
          imageSrc: "https://randomuser.me/api/portraits/women/27.jpg",
          name: "Dianne Russell",
          rating: 2,
          date: new Date("2021-04-14"),
          comment:
            "Overpriced for the quality received, did not justify the cost.",
          productName: "Smartphone Pro 12",
          isPositive: false,
        },
      ],
    },
  },
};

export default data;
