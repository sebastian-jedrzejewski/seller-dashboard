import { ENGLISH, POLISH } from "./languages";

const translations = {
  [ENGLISH.code]: {
    translation: {
      home: "Home",
      orders: "Orders",
      salesQuality: "Sales quality",
      opinions: "Customers' opinions",
      offersRanking: "Offers ranking",
      logout: "Log out",
      bestSelling: "Best selling",
      worstSelling: "Worst selling",
      descendingBy: "Descending by",
      unitsSold: "Units sold",
      turnover: "Turnover",
      image: "image",
      offersName: "offer's name",
    },
  },
  [POLISH.code]: {
    translation: {
      home: "Panel główny",
      orders: "Zamówienia",
      salesQuality: "Jakość sprzedaży",
      opinions: "Opinie kupujących",
      offersRanking: "Ranking ofert",
      logout: "Wyloguj się",
      bestSelling: "Najczęściej kupowane",
      worstSelling: "Najrzadziej kupowane",
      descendingBy: "Malejąco według",
      unitsSold: "Liczba sprzedanych sztuk",
      turnover: "Obrót",
      image: "obrazek",
      offersName: "nazwa oferty",
    },
  },
};

export default translations;
