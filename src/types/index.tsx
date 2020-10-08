export interface APIProps {
  api: string;
}

export interface API {
  city_name?: string;
  temp: number;
  dewpt: number;
}

export interface WeatherInfo {
  description: string;
  icon: string;
}

export interface Data {
  data: API;
  isLoading: boolean;
  weather: WeatherInfo;
  error: string | null;
}

export interface PageContent {
  pagecontent: string;
}
