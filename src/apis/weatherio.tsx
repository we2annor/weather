import axios from "axios";

export const KEY = "a412248622c64d8e98dd52d1a7cde2bb";
export const getBaseAPI = (api?: any) => {
  return api;
};

export default axios.create({
  baseURL: getBaseAPI(),
  params: {
    key: KEY,
  },
});
