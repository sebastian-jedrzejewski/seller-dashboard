export interface Period {
  current: number[];
  previous: number[];
}

interface ChartInterface {
  unitsSold: {
    today: Period;
    week: Period;
    year: Period;
  };
  turnover: {
    today: Period;
    week: Period;
    year: Period;
  };
}

export default ChartInterface;
