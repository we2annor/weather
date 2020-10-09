export const KEY = "a412248622c64d8e98dd52d1a7cde2bb";

interface SetApi {
  (api: string): string;
}

interface GetBaseAPI {
  (baseAPI: string): string;
}

export const setApi: SetApi = (api) => {
  return `${api}&key=${KEY}`;
};
export const getBaseAPI: GetBaseAPI = (baseAPI) => {
  return baseAPI;
};
