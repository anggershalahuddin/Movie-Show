import axios from "axios";
import env from "../../helper/env";

const getListPopularMovie = async (page) => {
  const { baseUrl, secretKey } = env;
  try {
    const response = await axios.get(
      `${baseUrl}movie/popular?api_key=${secretKey}&language=en-US&page=${page}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export { getListPopularMovie };
