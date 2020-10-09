export interface SearchBarProps {
  onFilterSubmit: {
    (minTemp: number, maxTemp: number): void;
  };
}

interface ResultItem {
  datetime: string;
  temp: number;
  weather: { description: string; icon: string };
  high_temp: number;
  low_temp: number;
}

export interface ResultItems extends Array<ResultItem> {}
interface Filter {
  minTemp: number;
  maxTemp: number;
}
export interface DailyForecastListProps {
  results: ResultItems;
  filter: Filter;
}

export interface DailyForecastProps {
  dailyForecast: {
    datetime: string;
    temp: number;
    weather: { description: string; icon: string };
    high_temp: number;
    low_temp: number;
  };
}

export interface CurrentForecastProps {
  forecast: {
    city_name: string;
    temp: number;
    sunrise: number;
    sunset: number;
  };
  weatherDetails: { description: string; icon: string };
}

export interface CityProps {
  api: string;
  city_name: string;
  filter: Filter;
}

interface ResultItem {
  datetime: string;
  temp: number;
  weather: { description: string; icon: string };
  high_temp: number;
  low_temp: number;
}

export interface ResultItems extends Array<ResultItem> {}
