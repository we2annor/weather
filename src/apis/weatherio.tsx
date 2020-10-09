import axios from "axios";

export const KEY = "a412248622c64d8e98dd52d1a7cde2bb";

export const setApi = (api) => {
  return `${api}&key=${KEY}`;
};
export const getBaseAPI = (baseAPI) => {
  return baseAPI;
};

export default axios.create({
  baseURL: getBaseAPI(),
  params: {
    key: KEY,
  },
});
