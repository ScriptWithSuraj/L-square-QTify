import axios from "axios";
const url = "https://qtify-backend-labs.crio.do";

export const fetchTopSogs = async () => {
  try {
    const response = await axios.get(`${url}/albums/top`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${url}/albums/new`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${url}/songs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
