import { ENGLISH, POLISH } from "./languages";

const translations = {
  [ENGLISH.code]: {
    translation: {
      home: "Home",
      orders: "Orders",
      salesQuality: "Sales quality",
      opinions: "Customers' opinions",
      logout: "Log out",
    },
  },
  [POLISH.code]: {
    translation: {
      home: "Panel główny",
      orders: "Zamówienia",
      salesQuality: "Jakość sprzedaży",
      opinions: "Opinie kupujących",
      logout: "Wyloguj się",
    },
  },
};

export default translations;
